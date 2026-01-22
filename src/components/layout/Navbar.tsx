import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Mail, Phone } from 'lucide-react';
import logo from '@/assets/rapha-logo.png';

const productCategories = [
  { name: 'Surgical Supplies & Instruments', href: '/products?category=surgical' },
  { name: 'Personal Protective Equipment', href: '/products?category=ppe' },
  { name: 'Wound Care & Dressings', href: '/products?category=wound-care' },
  { name: 'IV Therapy & Injection', href: '/products?category=iv-therapy' },
  { name: 'General Medical Consumables', href: '/products?category=consumables' },
  { name: 'Sterilization & Infection Control', href: '/products?category=sterilization' },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products', hasDropdown: true },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-charcoal text-sage py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:info@Raphamedinc.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              info@Raphamedinc.com
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              +1 (234) 567-890
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sage/80">Committed to Care. Built on Trust.</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-nav'
            : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Rapha Med" className="h-14 w-14 object-contain" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-ebony">Rapha Med</span>
                <span className="text-xs text-primary hidden sm:block">Medical Supplies</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`nav-link flex items-center gap-1 py-2 font-medium transition-colors ${
                      location.pathname === link.href
                        ? 'text-coffee'
                        : 'text-ebony hover:text-coffee'
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 pt-2 animate-fade-in">
                      <div className="bg-white rounded-lg shadow-card-hover py-2 min-w-[280px] border border-border">
                        {productCategories.map((category) => (
                          <Link
                            key={category.name}
                            to={category.href}
                            className="block px-4 py-3 text-sm text-ebony hover:bg-sage/30 hover:text-coffee transition-colors"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-ebony hover:text-coffee transition-colors hidden md:block">
                <Search className="w-5 h-5" />
              </button>
              <Link
                to="/contact"
                className="hidden md:block btn-primary text-sm"
              >
                Get Quote
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-ebony"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    className={`block py-3 font-medium border-b border-border/50 ${
                      location.pathname === link.href
                        ? 'text-coffee'
                        : 'text-ebony'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-4 pb-2">
                      {productCategories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.href}
                          className="block py-2 text-sm text-muted-foreground hover:text-coffee"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a href="mailto:info@Raphamedinc.com" className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  info@Raphamedinc.com
                </a>
                <Link to="/contact" className="btn-primary text-center">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
