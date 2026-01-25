interface BlogHeroProps {
  lastUpdated?: string;
}

export function BlogHero({ lastUpdated }: BlogHeroProps) {
  return (
    <section className="relative py-14 md:py-18 bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sage rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-charcoal rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          <span className="text-sage font-medium mb-3 block text-sm">News & Updates</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Healthcare Industry<br />
            News & Insights
          </h1>
          <p className="text-lg text-sage/90 leading-relaxed">
            Stay informed with the latest updates from Health Canada, World Health Organization,
            and industry news that matters to healthcare professionals.
          </p>
          {lastUpdated && (
            <p className="text-sm text-sage/70 mt-4">
              Last updated: {new Date(lastUpdated).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
