import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, ExternalLink, Globe, Heart, Newspaper, Shield } from 'lucide-react';
import { ScrollReveal, StaggerContainer, staggerItem } from '@/components/animation/ScrollReveal';
import { motion } from 'framer-motion';

const healthCanadaUpdates = [
  {
    title: 'Medical Device Regulations Update 2024',
    date: 'January 15, 2024',
    summary: 'Health Canada announces new guidelines for Class II medical device registration and compliance requirements.',
    link: 'https://www.canada.ca/en/health-canada.html',
  },
  {
    title: 'PPE Quality Standards Enhancement',
    date: 'December 8, 2023',
    summary: 'Updated standards for personal protective equipment to ensure higher safety benchmarks in healthcare settings.',
    link: 'https://www.canada.ca/en/health-canada.html',
  },
  {
    title: 'Supply Chain Resilience Guidelines',
    date: 'November 22, 2023',
    summary: 'New recommendations for healthcare facilities to strengthen medical supply chain resilience.',
    link: 'https://www.canada.ca/en/health-canada.html',
  },
];

const whoUpdates = [
  {
    title: 'Global Health Security Framework 2024',
    date: 'January 10, 2024',
    summary: 'WHO releases comprehensive framework for pandemic preparedness and medical supply stockpiling.',
    link: 'https://www.who.int/',
  },
  {
    title: 'Infection Prevention Best Practices',
    date: 'December 15, 2023',
    summary: 'Updated global guidelines for infection prevention and control in healthcare facilities.',
    link: 'https://www.who.int/',
  },
  {
    title: 'Medical Device Access Initiative',
    date: 'November 30, 2023',
    summary: 'New WHO initiative to improve access to essential medical devices in developing countries.',
    link: 'https://www.who.int/',
  },
];

const industryNews = [
  {
    title: 'Sustainable Medical Supplies: The Future of Healthcare',
    date: 'January 18, 2024',
    summary: 'How eco-friendly medical products are transforming the healthcare industry while maintaining quality standards.',
    category: 'Sustainability',
  },
  {
    title: 'Innovation in Wound Care Technology',
    date: 'January 5, 2024',
    summary: 'Latest advancements in wound care products and their impact on patient recovery times.',
    category: 'Innovation',
  },
  {
    title: 'Healthcare Supply Chain Trends for 2024',
    date: 'December 28, 2023',
    summary: 'Key trends shaping the medical supply industry and what healthcare facilities should prepare for.',
    category: 'Industry Trends',
  },
  {
    title: 'The Importance of Quality Certifications',
    date: 'December 12, 2023',
    summary: 'Understanding ISO 13485 and other certifications that ensure medical product safety and reliability.',
    category: 'Quality Assurance',
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-14 md:py-18 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-charcoal rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <span className="text-sage font-medium mb-3 block text-sm">News & Updates</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Healthcare Industry<br />
              News & Insights
            </h1>
            <p className="text-lg text-sage/90 leading-relaxed">
              Stay informed with the latest updates from Health Canada, World Health Organization, 
              and industry news that matters to healthcare professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-8 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold text-white mb-3">Subscribe to Our Newsletter</h3>
            <p className="text-sage/80 mb-4 text-base">
              Get the latest healthcare news and updates delivered directly to your inbox.
            </p>
            <form action="mailto:info@Raphamedinc.com" method="post" encType="text/plain" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md bg-white/10 border border-sage/30 text-white placeholder:text-sage/60 focus:outline-none focus:border-coffee"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-sage/60 text-sm mt-3">
              All newsletter updates sent to: <a href="mailto:info@Raphamedinc.com" className="text-gold hover:text-coffee transition-colors">info@Raphamedinc.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Health Canada Updates */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <span className="text-coffee font-medium text-sm block">Official Updates</span>
                <h2 className="text-2xl md:text-3xl font-bold">Health Canada</h2>
              </div>
            </div>
            <p className="text-muted-foreground text-base max-w-2xl">
              Stay compliant with the latest regulatory updates and guidelines from Health Canada 
              for medical devices and healthcare supplies.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {healthCanadaUpdates.map((update) => (
              <motion.div
                key={update.title}
                variants={staggerItem}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
              >
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {update.date}
                </div>
                <h3 className="text-lg font-semibold mb-2">{update.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{update.summary}</p>
                <a 
                  href={update.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-coffee font-medium text-sm hover:text-primary transition-colors"
                >
                  Read More
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* WHO Updates */}
      <section className="py-12 md:py-16 section-sage">
        <div className="container mx-auto px-4">
          <ScrollReveal className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <span className="text-coffee font-medium text-sm block">Global Health</span>
                <h2 className="text-2xl md:text-3xl font-bold">World Health Organization</h2>
              </div>
            </div>
            <p className="text-muted-foreground text-base max-w-2xl">
              Important updates from the WHO on global health initiatives, standards, 
              and recommendations for healthcare facilities worldwide.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {whoUpdates.map((update) => (
              <motion.div
                key={update.title}
                variants={staggerItem}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
              >
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {update.date}
                </div>
                <h3 className="text-lg font-semibold mb-2">{update.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{update.summary}</p>
                <a 
                  href={update.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-coffee font-medium text-sm hover:text-primary transition-colors"
                >
                  Read More
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Industry News */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Newspaper className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-coffee font-medium text-sm block">Industry Insights</span>
                <h2 className="text-2xl md:text-3xl font-bold">Healthcare Industry News</h2>
              </div>
            </div>
            <p className="text-muted-foreground text-base max-w-2xl">
              Insights and trends from the medical supply industry to help you stay ahead 
              and make informed decisions for your healthcare facility.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {industryNews.map((news) => (
              <motion.div
                key={news.title}
                variants={staggerItem}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {news.category}
                  </span>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    {news.date}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
                <p className="text-muted-foreground text-sm">{news.summary}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
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
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2 text-sm">
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
    </Layout>
  );
};

export default Blog;
