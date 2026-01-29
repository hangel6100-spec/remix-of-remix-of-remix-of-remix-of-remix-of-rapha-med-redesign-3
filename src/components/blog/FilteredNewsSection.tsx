import { useMemo } from 'react';
import { FileSearch } from 'lucide-react';
import { ScrollReveal, StaggerContainer } from '@/components/animation/ScrollReveal';
import { useBlogPosts, type BlogPost } from '@/hooks/useBlogPosts';
import { NewsCard } from './NewsCard';
import { NewsSectionSkeleton } from './NewsSectionSkeleton';

interface FilteredNewsSectionProps {
  searchQuery: string;
  activeSource: string | null;
}

export function FilteredNewsSection({ searchQuery, activeSource }: FilteredNewsSectionProps) {
  const { data: allPosts, isLoading, error } = useBlogPosts();

  const filteredPosts = useMemo(() => {
    if (!allPosts) return [];

    return allPosts.filter((post) => {
      // Filter by source
      if (activeSource && post.source !== activeSource) {
        return false;
      }

      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = post.title.toLowerCase().includes(query);
        const matchesSummary = post.summary.toLowerCase().includes(query);
        const matchesCategory = post.category?.toLowerCase().includes(query);
        
        if (!matchesTitle && !matchesSummary && !matchesCategory) {
          return false;
        }
      }

      return true;
    });
  }, [allPosts, searchQuery, activeSource]);

  const getSourceLabel = (source: string) => {
    switch (source) {
      case 'health_canada':
        return 'Health Canada';
      case 'who':
        return 'WHO';
      case 'industry':
        return 'Industry';
      default:
        return source;
    }
  };

  if (isLoading) {
    return (
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <NewsSectionSkeleton count={6} />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Failed to load articles. Please try again later.</p>
        </div>
      </section>
    );
  }

  if (filteredPosts.length === 0) {
    return (
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <FileSearch className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Try adjusting your search terms or clearing filters to see more results.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal className="mb-8">
          <p className="text-muted-foreground">
            Found <strong className="text-foreground">{filteredPosts.length}</strong> article
            {filteredPosts.length !== 1 ? 's' : ''}
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div key={post.id} className="relative">
              <span className="absolute top-3 right-3 z-10 px-2 py-1 text-xs font-medium rounded-full bg-background/80 backdrop-blur-sm border border-border">
                {getSourceLabel(post.source)}
              </span>
              <NewsCard post={post} showCategory={!!post.category} />
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
