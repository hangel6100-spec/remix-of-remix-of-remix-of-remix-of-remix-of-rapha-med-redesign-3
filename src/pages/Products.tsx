import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, ArrowRight, CheckCircle } from 'lucide-react';

// Import HD product images
import surgicalGlovesImg from '@/assets/product-nitrile-gloves-box.jpg';
import n95MasksImg from '@/assets/product-n95-masks.jpg';
import nitrileGlovesImg from '@/assets/product-nitrile-gloves.jpg';
import ivSuppliesImg from '@/assets/product-iv-supplies.jpg';
import labTestingImg from '@/assets/product-lab-testing.jpg';
import vaccineVialImg from '@/assets/product-vaccine-vial.jpg';
import sterilizationImg from '@/assets/product-sterilization.jpg';
import woundImg from '@/assets/product-wound.jpg';
import bandagesImg from '@/assets/product-bandages.jpg';
import gownsImg from '@/assets/product-gowns.jpg';
import scalpelImg from '@/assets/product-scalpel.jpg';
import dentalBibImg from '@/assets/product-dental-bib.jpg';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'surgical', name: 'Surgical Supplies' },
  { id: 'ppe', name: 'PPE' },
  { id: 'wound-care', name: 'Wound Care' },
  { id: 'iv-therapy', name: 'IV Therapy' },
  { id: 'consumables', name: 'Consumables' },
  { id: 'sterilization', name: 'Sterilization' },
];

const products = [
  {
    id: 1,
    name: 'Surgical Gloves - Latex Free',
    category: 'surgical',
    description: 'Powder-free, latex-free surgical gloves for sensitive procedures.',
    image: surgicalGlovesImg,
    featured: true,
    certifications: ['FDA 510(k) Cleared', 'ASTM D3577 Compliant', 'EN 455 (CE Marked)', 'Sterile', 'AQL 1.5'],
    sizes: 'Sizes: 5.5 - 9.0',
  },
  {
    id: 2,
    name: 'N95 Respirator Masks',
    category: 'ppe',
    description: 'NIOSH-approved N95 masks for maximum respiratory protection.',
    image: n95MasksImg,
    featured: true,
    certifications: ['NIOSH Approved (42 CFR Part 84)', 'Filtration Efficiency: ≥95%', 'FDA 510(k) Cleared (Surgical N95)', 'ASTM F2100 Level 1/2/3'],
    sizes: null,
  },
  {
    id: 3,
    name: 'Examination Gloves - Nitrile',
    category: 'consumables',
    description: 'High-quality nitrile examination gloves for general medical use.',
    image: nitrileGlovesImg,
    featured: true,
    certifications: ['FDA 510(k) Cleared', 'ASTM D6319 Compliant', 'EN 455 (CE Marked)', 'Powder-Free', 'Latex-Free', 'AQL 1.5'],
    sizes: 'Sizes: XS, S, M, L, XL',
  },
  {
    id: 4,
    name: 'IV Catheter Set',
    category: 'iv-therapy',
    description: 'Sterile IV catheter sets with integrated safety features.',
    image: ivSuppliesImg,
    featured: false,
    certifications: ['FDA 510(k) Cleared', 'ISO 13485 Certified Manufacturing', 'CE Marked (Class IIa)', 'Sterile (EO Sterilized)'],
    sizes: 'Gauges: 14G - 24G',
  },
  {
    id: 5,
    name: 'Syringes - Luer Lock',
    category: 'iv-therapy',
    description: 'Sterile disposable syringes with secure luer lock connection.',
    image: vaccineVialImg,
    featured: true,
    certifications: ['FDA 510(k) Cleared', 'ISO 7886-1 Compliant', 'CE Marked', 'Sterile', 'Single Use', 'Latex-Free'],
    sizes: 'Sizes: 1mL, 3mL, 5mL, 10mL, 20mL, 60mL',
  },
  {
    id: 6,
    name: 'Surgical Scalpel Blades',
    category: 'surgical',
    description: 'Precision carbon steel/stainless steel scalpel blades.',
    image: scalpelImg,
    featured: false,
    certifications: ['FDA 510(k) Cleared', 'CE Marked', 'ISO 13485 Certified Manufacturing', 'Sterile (Gamma Irradiated)'],
    sizes: 'Blade Numbers: #10, #11, #12, #15, #20, #21, #22, #23',
  },
  {
    id: 7,
    name: 'Isolation Gowns - Level 3',
    category: 'ppe',
    description: 'AAMI Level 3 isolation gowns for fluid resistance.',
    image: gownsImg,
    featured: false,
    certifications: ['FDA Registered', 'AAMI PB70 Level 3', 'ASTM F1671 (Viral Penetration Tested)', 'EN 13795 (CE Marked)'],
    sizes: 'Sizes: M, L, XL, XXL',
  },
  {
    id: 8,
    name: 'Advanced Wound Dressing Kit',
    category: 'wound-care',
    description: 'Complete wound care kit with antimicrobial dressings.',
    image: woundImg,
    featured: true,
    certifications: ['FDA 510(k) Cleared', 'CE Marked', 'ISO 13485 Certified Manufacturing', 'Sterile'],
    sizes: null,
  },
  {
    id: 9,
    name: 'Adhesive Bandages',
    category: 'wound-care',
    description: 'Flexible fabric bandages for minor wound care.',
    image: bandagesImg,
    featured: false,
    certifications: ['FDA Registered (Class I)', 'Hypoallergenic Adhesive', 'Latex-Free', 'Sterile'],
    sizes: 'Sizes: Various',
  },
  {
    id: 10,
    name: 'Sterilization Pouches',
    category: 'sterilization',
    description: 'Self-sealing pouches for steam and EO sterilization.',
    image: sterilizationImg,
    featured: false,
    certifications: ['FDA Registered', 'ISO 11607 Compliant', 'ASTM F2638 Tested', 'CE Marked', 'Clear Sterilization Indicators'],
    sizes: 'Sizes: Various',
  },
  {
    id: 11,
    name: 'Dental Bibs',
    category: 'consumables',
    description: 'Disposable patient bibs for dental and medical procedures.',
    image: dentalBibImg,
    featured: false,
    certifications: ['FDA Registered', 'Waterproof (Poly-Backed)', '2-Ply Tissue + 1-Ply Poly', 'Latex-Free', 'Individually Wrapped'],
    sizes: 'Sizes: 13"x18" (Standard), 17"x18" (Large), 18"x25" (XL), 29"x35" (Full)',
  },
  {
    id: 12,
    name: 'Gauze Pads - Sterile',
    category: 'wound-care',
    description: 'Medical-grade gauze pads for wound care and absorption.',
    image: labTestingImg,
    featured: false,
    certifications: ['FDA 510(k) Cleared', 'USP Type VII Compliant', '100% Cotton', 'Sterile (Individually Wrapped)', 'Latex-Free'],
    sizes: 'Sizes: 2"x2", 3"x3", 4"x4", 4"x8", 8"x10" | Ply: 8, 12, 16',
  },
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  const activeCategory = searchParams.get('category') || 'all';

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-gold font-medium mb-2 block text-sm">Our Solutions</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Comprehensive Medical Supply Solutions
            </h1>
            <p className="text-lg text-sage/90">
              From emergency response to routine patient care, RaphaMed provides the medical
              supplies your team depends on—every single day.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Search & Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-10">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-sage/30 text-ebony hover:bg-sage/50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground mb-8">
            Showing {filteredProducts.length} products
            {activeCategory !== 'all' &&
              ` in ${categories.find((c) => c.id === activeCategory)?.name}`}
          </p>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group product-card bg-card rounded-xl overflow-hidden border border-border shadow-card flex flex-col"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.featured && (
                    <span className="absolute top-3 left-3 bg-coffee text-white text-xs font-medium px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs text-coffee font-medium uppercase tracking-wide">
                    {categories.find((c) => c.id === product.category)?.name}
                  </span>
                  <h3 className="text-lg font-semibold mt-1 mb-2 group-hover:text-coffee transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{product.description}</p>

                  {/* Certifications */}
                  <div className="mb-3 flex-1">
                    <ul className="space-y-1">
                      {product.certifications.slice(0, 3).map((cert) => (
                        <li
                          key={cert}
                          className="text-xs text-muted-foreground flex items-center gap-1"
                        >
                          <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                          {cert}
                        </li>
                      ))}
                      {product.certifications.length > 3 && (
                        <li className="text-xs text-coffee font-medium">
                          +{product.certifications.length - 3} more certifications
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Sizes */}
                  {product.sizes && (
                    <p className="text-xs text-muted-foreground mb-3 bg-sage/20 px-2 py-1 rounded">
                      {product.sizes}
                    </p>
                  )}

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-1 text-sm font-medium text-white bg-coffee hover:bg-camel px-4 py-2 rounded-lg transition-all mt-auto"
                  >
                    Request Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  handleCategoryChange('all');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 section-sage">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Ready to Experience the RaphaMed Difference?
          </h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-2xl mx-auto">
            Let our team help you find the perfect medical supply solutions for your facility. We
            offer dedicated support and customized solutions.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-sm">
            Request a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
