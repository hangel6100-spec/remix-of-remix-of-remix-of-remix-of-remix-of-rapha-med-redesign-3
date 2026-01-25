import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  source: 'health_canada' | 'who' | 'industry';
  category: string | null;
  external_link: string | null;
  published_date: string;
  fetched_at: string;
  created_at: string;
}

export function useBlogPosts() {
  return useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_date', { ascending: false })
        .limit(50);

      if (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
      }

      return data as BlogPost[];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useBlogPostsBySource(source: 'health_canada' | 'who' | 'industry') {
  return useQuery({
    queryKey: ['blog-posts', source],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('source', source)
        .order('published_date', { ascending: false })
        .limit(20);

      if (error) {
        console.error(`Error fetching ${source} posts:`, error);
        throw error;
      }

      return data as BlogPost[];
    },
    staleTime: 1000 * 60 * 5,
  });
}
