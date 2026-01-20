import { Shield, Award, CheckCircle, FileCheck, Building2, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, staggerItem } from '@/components/animation/ScrollReveal';

const certifications = [
  {
    icon: Shield,
    name: 'ISO 13485:2016',
    description: 'Quality Management Systems for medical devices—certified excellence in every product',
  },
  {
    icon: Award,
    name: 'CE Marked',
    description: 'EU MDR 2017/745 compliant—trusted across European markets',
  },
  {
    icon: FileCheck,
    name: 'FDA Registered',
    description: 'FDA registered facility—meeting the highest US regulatory standards',
  },
  {
    icon: CheckCircle,
    name: 'cGMP Certified',
    description: 'Current Good Manufacturing Practices—quality from production to delivery',
  },
];

const complianceLogos = [
  { name: 'ISO 13485:2016', subtitle: 'Certified' },
  { name: 'CE Marked', subtitle: 'Products' },
  { name: 'FDA Registered', subtitle: 'Facility' },
];

export function CertificationsSection() {
  return (
    <section className="py-16 md:py-20 section-khaki">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-12">
          <span className="text-coffee font-medium mb-3 block">Quality & Compliance</span>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Your Assurance of Excellence</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            All products meet applicable ASTM, AAMI, and ISO testing standards. Our manufacturing 
            partners maintain the highest quality certifications in the industry.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              variants={staggerItem}
              className="bg-card p-6 rounded-xl text-center hover:shadow-card transition-all duration-300 border border-border"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <cert.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{cert.name}</h3>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Compliance Logos Row */}
        <ScrollReveal delay={0.2}>
          <div className="bg-card rounded-xl p-8 border border-border">
            <p className="text-center text-muted-foreground mb-6">
              Our manufacturing partners maintain:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {complianceLogos.map((logo) => (
                <div key={logo.name} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <p className="font-semibold text-sm">{logo.name}</p>
                  <p className="text-xs text-muted-foreground">{logo.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
