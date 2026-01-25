import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface NewsItem {
  title: string;
  summary: string;
  source: 'health_canada' | 'who' | 'industry';
  category?: string;
  external_link?: string;
  published_date: string;
}

async function scrapeWithFirecrawl(url: string, apiKey: string): Promise<string | null> {
  try {
    console.log(`Scraping URL: ${url}`);
    
    const response = await fetch('https://api.firecrawl.dev/v1/scrape', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url,
        formats: ['markdown'],
        onlyMainContent: true,
      }),
    });

    if (!response.ok) {
      console.error(`Firecrawl error for ${url}: ${response.status}`);
      return null;
    }

    const data = await response.json();
    return data.data?.markdown || data.markdown || null;
  } catch (error) {
    console.error(`Error scraping ${url}:`, error);
    return null;
  }
}

function extractNewsFromMarkdown(markdown: string, source: 'health_canada' | 'who' | 'industry', baseUrl: string): NewsItem[] {
  const news: NewsItem[] = [];
  const today = new Date().toISOString().split('T')[0];
  
  // Split by headers to find news items
  const sections = markdown.split(/(?=^#{1,3}\s)/m);
  
  for (const section of sections.slice(0, 10)) { // Limit to first 10 sections
    const lines = section.trim().split('\n');
    if (lines.length < 2) continue;
    
    // Get title from first line (remove markdown headers)
    const title = lines[0].replace(/^#+\s*/, '').trim();
    if (!title || title.length < 10 || title.length > 200) continue;
    
    // Get summary from remaining content
    const summaryLines = lines.slice(1).join(' ').trim();
    const summary = summaryLines.slice(0, 300).replace(/\[.*?\]\(.*?\)/g, '').trim();
    if (!summary || summary.length < 20) continue;
    
    // Extract date if present
    const dateMatch = section.match(/(\d{1,2}[\s\/\-](?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[\s\/\-]\d{2,4}|\d{4}[\-\/]\d{2}[\-\/]\d{2})/i);
    const publishedDate = dateMatch ? new Date(dateMatch[1]).toISOString().split('T')[0] : today;
    
    news.push({
      title: title.slice(0, 200),
      summary: summary.slice(0, 500),
      source,
      external_link: baseUrl,
      published_date: publishedDate || today,
    });
  }
  
  return news;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Starting news fetch job...');
    
    const firecrawlApiKey = Deno.env.get('FIRECRAWL_API_KEY');
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!firecrawlApiKey) {
      console.error('FIRECRAWL_API_KEY not configured');
      return new Response(
        JSON.stringify({ success: false, error: 'Firecrawl API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Supabase credentials not configured');
      return new Response(
        JSON.stringify({ success: false, error: 'Supabase credentials not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // News sources to scrape
    const sources = [
      {
        url: 'https://www.canada.ca/en/health-canada/news.html',
        source: 'health_canada' as const,
      },
      {
        url: 'https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices.html',
        source: 'health_canada' as const,
      },
      {
        url: 'https://www.who.int/news',
        source: 'who' as const,
      },
      {
        url: 'https://www.who.int/news-room/spotlight',
        source: 'who' as const,
      },
    ];

    const allNews: NewsItem[] = [];

    for (const { url, source } of sources) {
      const markdown = await scrapeWithFirecrawl(url, firecrawlApiKey);
      if (markdown) {
        const newsItems = extractNewsFromMarkdown(markdown, source, url);
        allNews.push(...newsItems);
        console.log(`Found ${newsItems.length} news items from ${source}`);
      }
    }

    console.log(`Total news items found: ${allNews.length}`);

    if (allNews.length === 0) {
      return new Response(
        JSON.stringify({ success: true, message: 'No new news items found', count: 0 }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check for duplicates by title (case-insensitive)
    const { data: existingPosts } = await supabase
      .from('blog_posts')
      .select('title');

    const existingTitles = new Set(
      (existingPosts || []).map((p: { title: string }) => p.title.toLowerCase())
    );

    const newPosts = allNews.filter(
      (item) => !existingTitles.has(item.title.toLowerCase())
    );

    console.log(`New posts to insert: ${newPosts.length}`);

    if (newPosts.length > 0) {
      const { error: insertError } = await supabase
        .from('blog_posts')
        .insert(newPosts);

      if (insertError) {
        console.error('Error inserting posts:', insertError);
        return new Response(
          JSON.stringify({ success: false, error: insertError.message }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    console.log('News fetch completed successfully');

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Fetched and stored ${newPosts.length} new posts`,
        totalFound: allNews.length,
        newPosts: newPosts.length,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in fetch-news function:', error);
    return new Response(
      JSON.stringify({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
