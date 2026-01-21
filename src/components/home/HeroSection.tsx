import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-medical.jpg';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image - positioned to show more white/left side */}
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay - lighter on left for text visibility */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl">
          {/* Trust Badge - Moved up with tighter spacing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full mb-4"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-xs md:text-sm font-semibold text-primary">
              Trusted by healthcare facilities across Canada and beyond
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
          >
            <span className="text-hero-green">Trusted quality that empowers confident care in every moment—</span>
            <br />
            <span className="text-gold" style={{ textShadow: '0 0 20px rgba(255,255,255,0.9), 0 0 40px rgba(255,255,255,0.7), 2px 2px 4px rgba(255,255,255,0.8)' }}>Starts here.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-base text-hero-green mb-6 leading-relaxed max-w-2xl font-medium"
          >
            We supply quality‑driven, carefully tested medical essentials that uphold the highest 
            standards in every clinical setting—so you can deliver uncompromising care to every 
            life you touch. At RaphaMed, we're committed to partnering with healthcare professionals 
            who are dedicated to saving lives. Our premium medical supplies are designed through 
            continuous product research and modern engineering to deliver reliable performance 
            when it matters most.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              to="/products"
              className="btn-primary inline-flex items-center justify-center gap-2 text-base"
            >
              Explore Our Solutions
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="btn-outline inline-flex items-center justify-center gap-2 text-base"
            >
              Request a Quote
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <div className="trust-badge bg-white/90 backdrop-blur-sm">
              <div className="p-2 bg-primary/20 rounded-full">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-primary font-bold text-sm md:text-base">ISO Certified</p>
                <p className="text-primary/70 text-xs">Quality Assured</p>
              </div>
            </div>
            <div className="trust-badge bg-white/90 backdrop-blur-sm">
              <div className="p-2 bg-primary/20 rounded-full">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-primary font-bold text-sm md:text-base">20+ Years</p>
                <p className="text-primary/70 text-xs">Industry Experience</p>
              </div>
            </div>
            <div className="trust-badge bg-white/90 backdrop-blur-sm">
              <div className="p-2 bg-primary/20 rounded-full">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-primary font-bold text-sm md:text-base">10K+ Partners</p>
                <p className="text-primary/70 text-xs">Healthcare Facilities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 rounded-full border-2 border-white/70 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
