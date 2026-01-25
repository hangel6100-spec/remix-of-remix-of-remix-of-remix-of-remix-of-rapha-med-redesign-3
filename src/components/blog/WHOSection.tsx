import { Globe } from 'lucide-react';
import { ScrollReveal, StaggerContainer } from '@/components/animation/ScrollReveal';
import { useBlogPostsBySource } from '@/hooks/useBlogPosts';
import { NewsCard } from './NewsCard';
import { NewsSectionSkeleton } from './NewsSectionSkeleton';

// Fallback data for when no posts are available
const fallbackPosts = [
  {
    id: '1',
    title: 'Historic Pandemic Agreement Adopted',
    summary: "Member states adopted the world's first Pandemic Agreement at the 78th World Health Assembly to ensure equitable access to vaccines and medicines for future global threats.",
    source: 'who' as const,
    category: null,
    external_link: 'https://www.who.int/news-room/spotlight/stronger-together-milestones-that-mattered-in-2025',
    published_date: '2025-05-01',
    fetched_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Disease Elimination Milestones Achieved',
    summary: 'Georgia, Suriname, and Timor-Leste certified malaria-free. Maldives achieved triple elimination of mother-to-child transmission of HIV, syphilis, and hepatitis B.',
    source: 'who' as const,
    category: null,
    external_link: 'https://www.who.int/news-room/spotlight/stronger-together-milestones-that-mattered-in-2025',
    published_date: '2025-01-15',
    fetched_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'NCD Fast-Track Targets for 2030',
    summary: 'New political declaration sets ambitious 2030 targets: 150 million fewer tobacco users and 150 million more people with access to mental health care.',
    source: 'who' as const,
    category: null,
    external_link: 'https://www.who.int/',
    published_date: '2025-01-10',
    fetched_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
];

export function WHOSection() {
  const { data: posts, isLoading, error } = useBlogPostsBySource('who');

  const displayPosts = posts && posts.length > 0 ? posts.slice(0, 3) : fallbackPosts;

  return (
    <section className="py-12 md:py-16 section-sage">
      <div className="container mx-auto px-4">
        <ScrollReveal className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <span className="text-coffee font-medium text-sm block">Global Health</span>
              <h2 className="text-2xl md:text-3xl font-bold">World Health Organization</h2>
            </div>
          </div>
          <p className="text-muted-foreground text-base max-w-2xl">
            Important updates from the WHO on global health initiatives, standards,
            and recommendations for healthcare facilities worldwide.
          </p>
        </ScrollReveal>

        {isLoading ? (
          <NewsSectionSkeleton count={3} />
        ) : error ? (
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {fallbackPosts.map((post) => (
              <NewsCard key={post.id} post={post} />
            ))}
          </StaggerContainer>
        ) : (
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {displayPosts.map((post) => (
              <NewsCard key={post.id} post={post} />
            ))}
          </StaggerContainer>
        )}
      </div>
    </section>
  );
}
