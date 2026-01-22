import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import logo from '@/assets/rapha-logo.png';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];

const productLinks = [
  { name: 'Surgical Supplies', href: '/products?category=surgical' },
  { name: 'PPE', href: '/products?category=ppe' },
  { name: 'Wound Care', href: '/products?category=wound-care' },
  { name: 'IV Therapy', href: '/products?category=iv-therapy' },
  { name: 'Consumables', href: '/products?category=consumables' },
  { name: 'Sterilization', href: '/products?category=sterilization' },
];

const certifications = ['ISO 13485', 'CE Marked', 'FDA Registered', 'GMP Certified'];

export function Footer() {
  return (
    <footer className="section-charcoal -mt-36">
      {/* Newsletter Section */}
      <div className="border-b border-primary/30">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-3">Stay Updated</h3>
            <p className="text-sage/80 mb-4 text-lg">
              Subscribe to our newsletter for the latest product updates and healthcare insights.
            </p>
            <p className="text-sage/70 mb-6 text-base">
              All inquiries and newsletter updates will be sent to: <a href="mailto:info@Raphamedinc.com" className="text-gold hover:text-coffee transition-colors">info@Raphamedinc.com</a>
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
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Rapha Med" className="h-12 w-12 object-contain" />
              <span className="text-xl font-bold text-white">Rapha Med</span>
            </Link>
            <p className="text-sage/80 mb-6 leading-relaxed">
              Committed to Care. Built on Trust. Providing high-quality medical disposables and supplies to healthcare facilities worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-coffee transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-coffee transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-coffee transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-coffee transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sage/80 hover:text-coffee transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sage/80 hover:text-coffee transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@Raphamedinc.com" className="flex items-start gap-3 text-sage/80 hover:text-coffee transition-colors">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  info@Raphamedinc.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-start gap-3 text-sage/80 hover:text-coffee transition-colors">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3 text-sage/80">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>179 Enterprise Blvd<br />Unionville, ON L6G 0A2</span>
              </li>
            </ul>

            {/* Certifications */}
            <div className="mt-6">
              <h5 className="text-sm font-medium text-white mb-3">Certifications</h5>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="text-xs px-2 py-1 bg-white/10 text-sage/80 rounded"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-sage/60">
            <p>© {new Date().getFullYear()} Rapha Med. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-coffee transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-coffee transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-coffee transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
