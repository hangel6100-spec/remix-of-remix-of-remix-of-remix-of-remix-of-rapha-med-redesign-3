import { Skeleton } from '@/components/ui/skeleton';

interface NewsSectionSkeletonProps {
  count?: number;
}

export function NewsSectionSkeleton({ count = 3 }: NewsSectionSkeletonProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-card p-6 rounded-xl shadow-card border border-border"
        >
          <Skeleton className="h-4 w-24 mb-3" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-3/4 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6 mb-4" />
          <Skeleton className="h-4 w-20" />
        </div>
      ))}
    </div>
  );
}
