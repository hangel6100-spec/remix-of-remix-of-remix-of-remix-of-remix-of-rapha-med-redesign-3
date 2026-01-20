import { Globe, Users, Building, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, staggerItem } from '@/components/animation/ScrollReveal';
import earthImage from '@/assets/earth-global.jpg';

const globalStats = [
  {
    icon: Globe,
    value: '50+',
    label: 'Countries Served',
  },
  {
    icon: Building,
    value: '10K+',
    label: 'Healthcare Facilities',
  },
  {
    icon: Users,
    value: '1M+',
    label: 'Patients Impacted',
  },
  {
    icon: Truck,
    value: '24/7',
    label: 'Global Logistics',
  },
];

export function GlobalReachSection() {
  return (
    <section className="py-20 md:py-28 bg-forest text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <ScrollReveal>
            <span className="text-gold font-medium mb-3 block">Global Reach</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Delivering Excellence Worldwide
            </h2>
            <p className="text-sage/90 text-lg mb-8 leading-relaxed">
              From North America to emerging markets across the globe, RaphaMed's medical supplies 
              reach healthcare professionals who need them most. Our international distribution 
              network ensures reliable delivery of quality-certified products, meeting the highest 
              standards in every region we serve.
            </p>
            
            <StaggerContainer className="grid grid-cols-2 gap-6">
              {globalStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-gold/20 rounded-lg">
                    <stat.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gold">{stat.value}</p>
                    <p className="text-sage/70 text-sm">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          {/* Earth Image */}
          <ScrollReveal delay={0.2} className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-full blur-3xl" />
              <img
                src={earthImage}
                alt="Global distribution network"
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gold/90 text-charcoal px-6 py-3 rounded-xl font-semibold shadow-lg z-20">
                International Quality Standards
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
