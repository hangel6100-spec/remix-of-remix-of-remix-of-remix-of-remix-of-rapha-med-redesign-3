import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { BlogHero } from '@/components/blog/BlogHero';
import { BlogFilters } from '@/components/blog/BlogFilters';
import { FilteredNewsSection } from '@/components/blog/FilteredNewsSection';
import { NewsletterSection } from '@/components/blog/NewsletterSection';
import { HealthCanadaSection } from '@/components/blog/HealthCanadaSection';
import { WHOSection } from '@/components/blog/WHOSection';
import { IndustryNewsSection } from '@/components/blog/IndustryNewsSection';
import { BlogCTA } from '@/components/blog/BlogCTA';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSource, setActiveSource] = useState<string | null>(null);
  
  const { data: allPosts } = useBlogPosts();
  
  // Get the most recent fetched_at timestamp
  const lastUpdated = allPosts && allPosts.length > 0 
    ? allPosts.reduce((latest, post) => 
        new Date(post.fetched_at) > new Date(latest) ? post.fetched_at : latest, 
        allPosts[0].fetched_at
      )
    : undefined;

  const hasActiveFilters = searchQuery || activeSource;

  return (
    <Layout>
      <BlogHero lastUpdated={lastUpdated} />
      <BlogFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeSource={activeSource}
        onSourceChange={setActiveSource}
      />
      
      {hasActiveFilters ? (
        // Show filtered results when filters are active
        <FilteredNewsSection searchQuery={searchQuery} activeSource={activeSource} />
      ) : (
        // Show categorized sections when no filters
        <>
          <HealthCanadaSection />
          <WHOSection />
          <IndustryNewsSection />
        </>
      )}
      
      <NewsletterSection />
      <BlogCTA />
    </Layout>
  );
};

export default Blog;
