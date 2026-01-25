import { Newspaper } from 'lucide-react';
import { ScrollReveal, StaggerContainer } from '@/components/animation/ScrollReveal';
import { useBlogPostsBySource } from '@/hooks/useBlogPosts';
import { NewsCard } from './NewsCard';
import { NewsSectionSkeleton } from './NewsSectionSkeleton';

// Fallback data for when no posts are available
const fallbackPosts = [
  {
    id: '1',
    title: 'AI-Driven Medical Supply Chain Optimization',
    summary: 'Healthcare facilities are increasingly adopting AI and machine learning to predict demand, reduce waste, and ensure critical supply availability.',
    source: 'industry' as const,
    category: 'Innovation',
    external_link: null,
    published_date: '2025-01-20',
    fetched_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Sustainable Medical Packaging Standards 2025',
    summary: 'New industry guidelines promote eco-friendly packaging for medical supplies while maintaining sterility and compliance standards.',
    source: 'industry' as const,
    category: 'Sustainability',
    external_link: null,
    published_date: '2025-01-15',
    fetched_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Global Medical Device Market Outlook 2025',
    summary: 'The medical device market continues to grow with increased demand for PPE, surgical supplies, and diagnostic equipment across emerging markets.',
    source: 'industry' as const,
    category: 'Industry Trends',
    external_link: null,
    published_date: '2025-01-10',
    fetched_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Enhanced Quality Certification Requirements',
    summary: 'ISO 13485:2024 updates emphasize risk management, cybersecurity for connected devices, and supply chain transparency for medical manufacturers.',
    source: 'industry' as const,
    category: 'Quality Assurance',
    external_link: null,
    published_date: '2024-12-20',
    fetched_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
];

export function IndustryNewsSection() {
  const { data: posts, isLoading, error } = useBlogPostsBySource('industry');

  const displayPosts = posts && posts.length > 0 ? posts.slice(0, 4) : fallbackPosts;

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Newspaper className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="text-coffee font-medium text-sm block">Industry Insights</span>
              <h2 className="text-2xl md:text-3xl font-bold">Healthcare Industry News</h2>
            </div>
          </div>
          <p className="text-muted-foreground text-base max-w-2xl">
            Insights and trends from the medical supply industry to help you stay ahead
            and make informed decisions for your healthcare facility.
          </p>
        </ScrollReveal>

        {isLoading ? (
          <NewsSectionSkeleton count={4} />
        ) : error ? (
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {fallbackPosts.map((post) => (
              <NewsCard key={post.id} post={post} showCategory />
            ))}
          </StaggerContainer>
        ) : (
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {displayPosts.map((post) => (
              <NewsCard key={post.id} post={post} showCategory />
            ))}
          </StaggerContainer>
        )}
      </div>
    </section>
  );
}
