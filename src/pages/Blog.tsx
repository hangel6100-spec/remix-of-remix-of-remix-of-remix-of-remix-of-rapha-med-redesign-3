import { Layout } from '@/components/layout/Layout';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { BlogHero } from '@/components/blog/BlogHero';
import { NewsletterSection } from '@/components/blog/NewsletterSection';
import { HealthCanadaSection } from '@/components/blog/HealthCanadaSection';
import { WHOSection } from '@/components/blog/WHOSection';
import { IndustryNewsSection } from '@/components/blog/IndustryNewsSection';
import { BlogCTA } from '@/components/blog/BlogCTA';

const Blog = () => {
  const { data: allPosts } = useBlogPosts();
  
  // Get the most recent fetched_at timestamp
  const lastUpdated = allPosts && allPosts.length > 0 
    ? allPosts.reduce((latest, post) => 
        new Date(post.fetched_at) > new Date(latest) ? post.fetched_at : latest, 
        allPosts[0].fetched_at
      )
    : undefined;

  return (
    <Layout>
      <BlogHero lastUpdated={lastUpdated} />
      <NewsletterSection />
      <HealthCanadaSection />
      <WHOSection />
      <IndustryNewsSection />
      <BlogCTA />
    </Layout>
  );
};

export default Blog;
