import { Shield } from 'lucide-react';
import { ScrollReveal, StaggerContainer } from '@/components/animation/ScrollReveal';
import { useBlogPostsBySource } from '@/hooks/useBlogPosts';
import { NewsCard } from './NewsCard';
import { NewsSectionSkeleton } from './NewsSectionSkeleton';

// Fallback data for when no posts are available
const fallbackPosts = [
  {
    id: '1',
    title: 'MDEL Modernization Phase II Consultation',
    summary: 'Health Canada launches consultation to modernize Medical Device Establishment Licences, including removing MDEL requirements for certain foreign distributors and strengthening traceability.',
    source: 'health_canada' as const,
    category: null,
    external_link: 'https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices.html',
    published_date: '2025-11-25',
    fetched_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Public Release of Clinical Device Information',
    summary: 'New initiative provides public access to clinical data for Class III and IV medical devices through the Clinical Information Portal.',
    source: 'health_canada' as const,
    category: null,
    external_link: 'https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices.html',
    published_date: '2025-11-01',
    fetched_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Mandatory Device Shortage Reporting Update',
    summary: 'Updates to the mandatory shortage list now include specific devices like capsular tension rings. Manufacturers must report shortages under MDR sections 62.23-62.25.',
    source: 'health_canada' as const,
    category: null,
    external_link: 'https://www.canada.ca/en/health-canada/services/drugs-health-products/compliance-enforcement/establishment-licences.html',
    published_date: '2025-11-07',
    fetched_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
];

export function HealthCanadaSection() {
  const { data: posts, isLoading, error } = useBlogPostsBySource('health_canada');

  const displayPosts = posts && posts.length > 0 ? posts.slice(0, 3) : fallbackPosts;

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <span className="text-coffee font-medium text-sm block">Official Updates</span>
              <h2 className="text-2xl md:text-3xl font-bold">Health Canada</h2>
            </div>
          </div>
          <p className="text-muted-foreground text-base max-w-2xl">
            Stay compliant with the latest regulatory updates and guidelines from Health Canada
            for medical devices and healthcare supplies.
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
