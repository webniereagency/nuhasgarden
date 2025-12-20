import { Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';

export default function Contact() {
  const { t, isEthiopic } = useLanguage();
  const { ref, isInView } = useInView();

  const phoneNumber = '+251930627822';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}`;

  return (
    <section id="contact" ref={ref} className="relative py-20 bg-secondary/30">
      {/* Smooth curved top */}
      <div className="absolute top-0 left-0 right-0 h-16 -translate-y-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,120 C600,40 600,40 1200,120 L1200,120 L0,120 Z" fill="hsl(var(--secondary) / 0.3)" />
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className={`text-3xl md:text-4xl font-display text-primary mb-4 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${isEthiopic ? 'font-ethiopic' : ''}`}
          >
            {t('contact.title')}
          </h2>
        </div>

        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-100 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-gold flex items-center gap-3 w-full sm:w-auto ${isEthiopic ? 'font-ethiopic' : ''}`}
          >
            <MessageCircle className="w-5 h-5" />
            {t('contact.whatsapp')}
          </a>

          <a
            href={`tel:${phoneNumber}`}
            className={`btn-outline flex items-center gap-3 w-full sm:w-auto ${isEthiopic ? 'font-ethiopic' : ''}`}
          >
            <Phone className="w-5 h-5" />
            {t('contact.call')}
          </a>
        </div>

        <p className="text-center text-muted-foreground mt-6">
          +251 93 062 7822
        </p>
      </div>
    </section>
  );
}
