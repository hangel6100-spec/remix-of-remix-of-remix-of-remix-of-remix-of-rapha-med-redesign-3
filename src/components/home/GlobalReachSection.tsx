import { Globe, Users, Building, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, staggerItem } from '@/components/animation/ScrollReveal';
import earthImage from '@/assets/earth-global.jpg';
const globalStats = [{
  icon: Globe,
  value: '50+',
  label: 'Countries Served'
}, {
  icon: Building,
  value: '10K+',
  label: 'Healthcare Facilities'
}, {
  icon: Users,
  value: '1M+',
  label: 'Patients Impacted'
}, {
  icon: Truck,
  value: '24/7',
  label: 'Global Logistics'
}];
export function GlobalReachSection() {
  return <section className="py-12 md:py-16 bg-forest text-white overflow-hidden rounded-none shadow-none border-0">
      {/* Full-width Video Background */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 mb-10">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/global-reach-video.mp4" type="video/mp4" />
        </video>
        {/* Fallback image if video doesn't load */}
        <img src={earthImage} alt="Global reach" className="absolute inset-0 w-full h-full object-cover" style={{
        zIndex: -1
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-transparent to-forest/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-gold text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg text-center">
            Global Outreach
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <ScrollReveal>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Delivering Excellence Worldwide
            </h3>
            <p className="text-sage/90 text-base mb-6 leading-relaxed">
              From North America to emerging markets across the globe, RaphaMed's medical supplies 
              reach healthcare professionals who need them most. Our international distribution 
              network ensures reliable delivery of quality-certified products, meeting the highest 
              standards in every region we serve.
            </p>
            
            <StaggerContainer className="grid grid-cols-2 gap-4">
              {globalStats.map(stat => <motion.div key={stat.label} variants={staggerItem} className="flex items-center gap-3">
                  <div className="p-2 bg-gold/20 rounded-lg">
                    <stat.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gold">{stat.value}</p>
                    <p className="text-sage/70 text-xs">{stat.label}</p>
                  </div>
                </motion.div>)}
            </StaggerContainer>
          </ScrollReveal>

          {/* Stats highlight */}
          <ScrollReveal delay={0.2} className="bg-primary/20 rounded-2xl p-6 border border-gold/20">
            <p className="text-gold font-semibold text-lg mb-2">International Quality Standards</p>
            <p className="text-sage/80 text-sm">
              Our products meet the highest international quality certifications, 
              ensuring healthcare professionals worldwide receive reliable, 
              compliant medical supplies.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>;
}