import { ShieldCheck, Truck, HeartHandshake, Award, Clock, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, staggerItem } from '@/components/animation/ScrollReveal';

const features = [
  {
    icon: ShieldCheck,
    title: 'Quality Assured',
    description: 'ISO 13485 certified quality—every product tested, every standard met, every time.',
  },
  {
    icon: Truck,
    title: 'Reliable Distribution',
    description: 'Reliable delivery across Canada and beyond—when you need us, we\'re there.',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Support',
    description: 'Your dedicated healthcare supply partner, always ready to support your success.',
  },
  {
    icon: Award,
    title: 'Industry Leading',
    description: '20+ years of trusted partnerships with healthcare leaders across the globe.',
  },
  {
    icon: Clock,
    title: 'Always Available',
    description: 'Always in stock. Always available. Always reliable—even in emergencies.',
  },
  {
    icon: Globe,
    title: 'Worldwide Compliance',
    description: 'Global certifications. Local expertise. International standards.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-12 md:py-16 section-sage">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-coffee font-medium mb-2 block text-sm">Why Choose Us</span>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Why Healthcare Professionals Choose RaphaMed
          </h2>
          <p className="text-muted-foreground text-base">
            We believe quality medical supplies strengthen the hands of those who care. Every product, 
            every partnership, every delivery reflects our commitment to excellence.
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
