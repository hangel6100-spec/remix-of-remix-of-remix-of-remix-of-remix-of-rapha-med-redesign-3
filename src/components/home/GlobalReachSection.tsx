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
    <section className="py-12 md:py-16 bg-forest text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <ScrollReveal>
            <span className="text-gold font-medium mb-2 block text-sm">Global Reach</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Delivering Excellence Worldwide
            </h2>
            <p className="text-sage/90 text-base mb-6 leading-relaxed">
              From North America to emerging markets across the globe, RaphaMed's medical supplies 
              reach healthcare professionals who need them most. Our international distribution 
              network ensures reliable delivery of quality-certified products, meeting the highest 
              standards in every region we serve.
            </p>
            
            <StaggerContainer className="grid grid-cols-2 gap-4">
              {globalStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  className="flex items-center gap-3"
                >
                  <div className="p-2 bg-gold/20 rounded-lg">
                    <stat.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gold">{stat.value}</p>
                    <p className="text-sage/70 text-xs">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          {/* Earth Image */}
          <ScrollReveal delay={0.2} className="relative flex items-center justify-center">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-primary/20 rounded-full blur-3xl scale-110" />
              <div className="relative z-10 aspect-square w-full overflow-hidden rounded-full border-4 border-gold/30 shadow-2xl">
                <img
                  src={earthImage}
                  alt="Global distribution network"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-2 rounded-lg font-semibold shadow-lg z-20 whitespace-nowrap text-sm">
                International Quality Standards
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
