import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '@/assets/logo.png';

export default function Header() {
  const { t, isEthiopic } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#services', label: t('nav.services') },
    { href: '#gallery', label: t('nav.gallery') },
    { href: '#about', label: t('nav.about') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-soft py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex-shrink-0 group">
          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-primary/40 shadow-glow group-hover:border-primary/70 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <img 
              src={logo} 
              alt="Nuhas Beauty Garden" 
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm text-foreground/80 hover:text-primary transition-colors ${
                isEthiopic ? 'font-ethiopic' : 'tracking-wide'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="#booking"
            className={`btn-gold text-sm ${isEthiopic ? 'font-ethiopic' : ''}`}
          >
            {t('nav.book')}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-sm border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg text-foreground/80 hover:text-primary transition-colors py-2 ${
                  isEthiopic ? 'font-ethiopic' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`btn-gold text-center mt-4 ${isEthiopic ? 'font-ethiopic' : ''}`}
            >
              {t('nav.book')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
