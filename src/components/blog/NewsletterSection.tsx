export function NewsletterSection() {
  return (
    <section className="py-8 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-bold text-white mb-3">Subscribe to Our Newsletter</h3>
          <p className="text-sage/80 mb-4 text-base">
            Get the latest healthcare news and updates delivered directly to your inbox.
          </p>
          <form
            action="mailto:info@Raphamedinc.com"
            method="post"
            encType="text/plain"
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md bg-white/10 border border-sage/30 text-white placeholder:text-sage/60 focus:outline-none focus:border-coffee"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-sage/60 text-sm mt-3">
            All newsletter updates sent to:{' '}
            <a
              href="mailto:info@Raphamedinc.com"
              className="text-gold hover:text-coffee transition-colors"
            >
              info@Raphamedinc.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
