import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface BlogFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeSource: string | null;
  onSourceChange: (source: string | null) => void;
}

const sources = [
  { value: 'health_canada', label: 'Health Canada', color: 'bg-destructive/10 text-destructive' },
  { value: 'who', label: 'WHO', color: 'bg-accent text-accent-foreground' },
  { value: 'industry', label: 'Industry', color: 'bg-primary/10 text-primary' },
];

export function BlogFilters({
  searchQuery,
  onSearchChange,
  activeSource,
  onSourceChange,
}: BlogFiltersProps) {
  const handleClearFilters = () => {
    onSearchChange('');
    onSourceChange(null);
  };

  const hasActiveFilters = searchQuery || activeSource;

  return (
    <section className="py-6 border-b border-border bg-background sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 pr-10"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Source Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-muted-foreground hidden md:block" />
            <span className="text-sm text-muted-foreground hidden md:block">Filter:</span>
            {sources.map((source) => (
              <Badge
                key={source.value}
                variant={activeSource === source.value ? 'default' : 'outline'}
                className={`cursor-pointer transition-all ${
                  activeSource === source.value
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
                onClick={() =>
                  onSourceChange(activeSource === source.value ? null : source.value)
                }
              >
                {source.label}
              </Badge>
            ))}
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                Clear all
              </Button>
            )}
          </div>
        </div>

        {/* Active filter summary */}
        {hasActiveFilters && (
          <div className="mt-3 text-sm text-muted-foreground">
            Showing results
            {searchQuery && <span> for "<strong className="text-foreground">{searchQuery}</strong>"</span>}
            {activeSource && (
              <span>
                {' '}from{' '}
                <strong className="text-foreground">
                  {sources.find((s) => s.value === activeSource)?.label}
                </strong>
              </span>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
