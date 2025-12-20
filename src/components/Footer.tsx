import { Instagram, Facebook, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

export default function Footer() {
  const { t, isEthiopic } = useLanguage();

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#services', label: t('nav.services') },
    { href: '#gallery', label: t('nav.gallery') },
    { href: '#about', label: t('nav.about') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <footer className="py-12 bg-burgundy-dark border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <img src={logo} alt="Nuhas Beauty Garden" className="h-16 mb-4" />
          
          {/* Tagline */}
          <p className={`text-foreground/70 mb-8 max-w-md ${isEthiopic ? 'font-ethiopic' : 'font-display italic'}`}>
            {t('footer.tagline')}
          </p>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm text-muted-foreground hover:text-primary transition-colors ${
                  isEthiopic ? 'font-ethiopic' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-8">
            <a
              href="https://www.instagram.com/nuhas_beauty_garden/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://web.facebook.com/p/Nuhas-Beauty-Garden-100086744814900/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="tel:+251930627822"
              className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Nuhas Beauty Garden. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
