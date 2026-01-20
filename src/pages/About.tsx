import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Users, Award, Globe } from 'lucide-react';
import teamImage from '@/assets/about-team.jpg';

const values = [
  {
    icon: Heart,
    title: 'Commitment to Care',
    description: 'Every product we supply represents our dedication to improving patient outcomes and supporting healthcare professionals.',
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'We maintain the highest quality standards with rigorous testing and international certifications on all products.',
  },
  {
    icon: Users,
    title: 'Partnership Approach',
    description: 'We build lasting relationships with our customers, understanding their needs and growing together.',
  },
  {
    icon: Globe,
    title: 'Global Responsibility',
    description: 'We\'re committed to sustainable practices and making quality healthcare supplies accessible worldwide.',
  },
];

const milestones = [
  { year: '2003', event: 'Company founded with a vision to supply quality medical products' },
  { year: '2008', event: 'Achieved ISO 13485 certification for quality management' },
  { year: '2012', event: 'Expanded distribution to over 25 countries' },
  { year: '2016', event: 'Launched comprehensive PPE product line' },
  { year: '2020', event: 'Responded to global healthcare crisis with rapid supply solutions' },
  { year: '2024', event: 'Serving 10,000+ healthcare facilities worldwide' },
];

const About = () => {
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
            <span className="text-sage font-medium mb-3 block text-sm">About Rapha Med</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Committed to Care.<br />
              Built on Trust.
            </h1>
            <p className="text-lg text-sage/90 leading-relaxed">
              For over two decades, Rapha Med has been a trusted partner for healthcare facilities 
              worldwide, providing quality medical disposables and supplies that healthcare 
              professionals rely on every day.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <span className="text-coffee font-medium mb-2 block text-sm">Our Story</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Two Decades of Healthcare Excellence
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
                  Founded in 2003, Rapha Med began with a simple mission: to provide healthcare 
                  facilities with reliable, high-quality medical supplies at competitive prices. 
                  What started as a small distribution company has grown into a global partner 
                  for thousands of hospitals, clinics, and healthcare organizations.
                </p>
                <p>
                  Our name "Rapha" comes from the ancient word meaning "to heal" – a constant 
                  reminder of our purpose. Every product we supply plays a role in the healing 
                  process, and we take that responsibility seriously.
                </p>
                <p>
                  Today, we offer over 5,000 products across six major categories, serving 
                  healthcare facilities in more than 50 countries. Our commitment to quality, 
                  service, and innovation continues to drive everything we do.
                </p>
              </div>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2 mt-6 text-sm">
                Partner With Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={teamImage}
                alt="Rapha Med Team"
                className="rounded-xl shadow-card-hover"
              />
              <div className="absolute -bottom-4 -left-4 bg-coffee text-white p-4 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">20+</p>
                <p className="text-xs opacity-90">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-16 section-sage">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-card p-6 md:p-8 rounded-xl shadow-card">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To provide healthcare facilities with reliable, high-quality medical supplies 
                that enable better patient care. We are committed to being a trusted partner 
                that healthcare professionals can depend on for their essential medical product needs.
              </p>
            </div>
            <div className="bg-card p-6 md:p-8 rounded-xl shadow-card">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To be the global leader in medical supply distribution, recognized for our 
                unwavering commitment to quality, innovation, and customer service. We envision 
                a world where every healthcare facility has access to the supplies they need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-coffee font-medium mb-2 block text-sm">Our Values</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              What Drives Us Forward
            </h2>
            <p className="text-muted-foreground text-base">
              Our core values guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-sage rounded-full flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-16 section-khaki">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-coffee font-medium mb-2 block text-sm">Our Journey</span>
            <h2 className="text-2xl md:text-3xl font-bold">Company Milestones</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-4 pb-6 relative">
                {index !== milestones.length - 1 && (
                  <div className="absolute left-4 top-8 w-0.5 h-full bg-border" />
                )}
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 z-10">
                  <span className="text-white text-xs font-bold">{milestone.year.slice(2)}</span>
                </div>
                <div className="bg-card p-3 rounded-lg shadow-card flex-1">
                  <p className="font-semibold text-coffee mb-1 text-sm">{milestone.year}</p>
                  <p className="text-muted-foreground text-sm">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Work Together?</h2>
          <p className="text-muted-foreground text-base mb-6 max-w-2xl mx-auto">
            Join thousands of healthcare facilities that trust Rapha Med for their medical supply needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/products" className="btn-primary inline-flex items-center justify-center gap-2 text-sm">
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="px-5 py-3 font-medium rounded-md border-2 border-ebony text-ebony hover:bg-ebony hover:text-white transition-all duration-300 text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
