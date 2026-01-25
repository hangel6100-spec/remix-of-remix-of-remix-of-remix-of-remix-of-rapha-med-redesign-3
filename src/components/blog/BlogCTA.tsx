import { Link } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';

export function BlogCTA() {
  return (
    <section className="py-12 md:py-16 section-khaki">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <Heart className="w-12 h-12 text-coffee mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Need More Information?</h2>
          <p className="text-muted-foreground text-base mb-6 max-w-2xl mx-auto">
            Contact our team for the latest updates on medical supplies, regulatory changes,
            or any questions about our products and services.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2 text-sm"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:info@Raphamedinc.com"
              className="px-5 py-3 font-medium rounded-md border-2 border-ebony text-ebony hover:bg-ebony hover:text-white transition-all duration-300 text-sm inline-flex items-center justify-center gap-2"
            >
              Email: info@Raphamedinc.com
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
