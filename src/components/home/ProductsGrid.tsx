import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, staggerItem } from '@/components/animation/ScrollReveal';
import surgicalImg from '@/assets/product-surgical.jpg';
import ppeImg from '@/assets/product-ppe.jpg';
import woundImg from '@/assets/product-wound.jpg';
import ivImg from '@/assets/product-iv.jpg';
import consumablesImg from '@/assets/product-consumables.jpg';
import sterilizationImg from '@/assets/product-sterilization.jpg';

const products = [
  {
    title: 'Surgical Supplies & Instruments',
    description: 'Precision surgical instruments and disposables engineered for excellence in the operating room.',
    image: surgicalImg,
    href: '/products?category=surgical',
  },
  {
    title: 'Personal Protective Equipment',
    description: 'Complete PPE protection—when healthcare professionals need it most, we deliver reliability.',
    image: ppeImg,
    href: '/products?category=ppe',
  },
  {
    title: 'Wound Care & Dressings',
    description: 'Advanced wound healing solutions trusted by healthcare teams.',
    image: woundImg,
    href: '/products?category=wound-care',
  },
  {
    title: 'IV Therapy & Injection',
    description: 'Reliable IV therapy solutions for patient care and comfort.',
    image: ivImg,
    href: '/products?category=iv-therapy',
  },
  {
    title: 'General Medical Consumables',
    description: 'Essential medical supplies that healthcare professionals rely on daily.',
    image: consumablesImg,
    href: '/products?category=consumables',
  },
  {
    title: 'Sterilization & Infection Control',
    description: 'Advanced infection control products that protect patients and staff.',
    image: sterilizationImg,
    href: '/products?category=sterilization',
  },
];

export function ProductsGrid() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-coffee font-medium mb-2 block text-sm">Our Products</span>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Comprehensive Solutions for Every Healthcare Challenge
          </h2>
          <p className="text-muted-foreground text-base">
            From emergency response to routine patient care, RaphaMed provides the medical supplies 
            your team depends on—every single day.
          </p>
        </ScrollReveal>

        {/* Products Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <motion.div key={product.title} variants={staggerItem}>
              <Link
                to={product.href}
                className="group product-card bg-card rounded-xl overflow-hidden border border-border shadow-card block h-full"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-coffee transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-coffee font-medium text-sm">
                    View Products
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal className="text-center mt-8" delay={0.3}>
          <Link to="/products" className="btn-primary inline-flex items-center gap-2 text-sm">
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
