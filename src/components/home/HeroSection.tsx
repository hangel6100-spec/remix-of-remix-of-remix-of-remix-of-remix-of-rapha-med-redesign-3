import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-medical.jpg';
export function HeroSection() {
  return <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundPosition: 'calc(50% + 4in) center'
    }} />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-20 opacity-95 -mt-24">
        <div className="max-w-3xl">
          {/* Trust Badge - Moved up with tighter spacing */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full mb-4">
            <Shield className="text-primary w-5 h-5" />
            <span className="text-sm md:text-base font-semibold text-primary">
              Trusted by healthcare facilities across Canada and beyond
            </span>
          </motion.div>

          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight bg-transparent">
            <span className="text-hero-green text-5xl md:text-6xl text-primary">Excellence in Medical Care</span>
            <br />
            <span className="text-gold text-5xl md:text-6xl" style={{
            textShadow: '0 0 20px rgba(255,255,255,0.9), 0 0 40px rgba(255,255,255,0.7), 2px 2px 4px rgba(255,255,255,0.8)'
          }}>Starts Here.</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="text-lg md:text-xl mb-3 leading-relaxed drop-shadow-md max-w-2xl font-sans text-primary font-semibold bg-transparent">
            Trusted quality that empowers confident care in every moment— Starts here.
          </motion.p>

          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.35
        }} className="text-base md:text-lg text-hero-green mb-6 leading-relaxed max-w-2xl font-medium">
            We supply quality‑driven, carefully tested medical essentials that uphold the highest 
            standards in every clinical setting—so you can deliver uncompromising care to every 
            life you touch. At RaphaMed, we're committed to partnering with healthcare professionals 
            who are dedicated to saving lives. Our premium medical supplies are designed through 
            continuous product research and modern engineering to deliver reliable performance 
            when it matters most.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="flex flex-col sm:flex-row gap-3">
            <Link to="/products" className="btn-primary inline-flex items-center justify-center gap-2 text-lg">
              Explore Our Solutions
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-outline inline-flex items-center justify-center gap-2 text-lg">
              Request a Quote
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.5
        }} className="mt-10 flex flex-wrap gap-4">
            <div className="trust-badge bg-white/90 backdrop-blur-sm">
              <div className="p-2 bg-primary/20 rounded-full">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-primary font-bold text-base md:text-lg">ISO Certified</p>
                <p className="text-primary/70 text-sm">Quality Assured</p>
              </div>
            </div>
            <div className="trust-badge bg-white/90 backdrop-blur-sm">
              <div className="p-2 bg-primary/20 rounded-full">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-primary font-bold text-base md:text-lg">20+ Years</p>
                <p className="text-primary/70 text-sm">Industry Experience</p>
              </div>
            </div>
            <div className="trust-badge bg-white/90 backdrop-blur-sm">
              <div className="p-2 bg-primary/20 rounded-full">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-primary font-bold text-base md:text-lg">10K+ Partners</p>
                <p className="text-primary/70 text-sm">Healthcare Facilities</p>
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
    </section>;
}