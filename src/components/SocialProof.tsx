import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';

export default function SocialProof() {
  const { t, isEthiopic } = useLanguage();
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="relative py-16 bg-secondary/30">
      {/* Smooth curved top */}
      <div className="absolute top-0 left-0 right-0 h-16 -translate-y-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,120 C300,60 900,60 1200,120 L1200,120 L0,120 Z" fill="hsl(var(--secondary) / 0.3)" />
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div 
          className={`flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Rating */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${i < 4.8 ? 'text-primary fill-primary' : 'text-primary/30'}`} 
                />
              ))}
            </div>
            <span className="text-2xl font-display text-primary">4.8</span>
            <span className={`text-sm text-muted-foreground ${isEthiopic ? 'font-ethiopic' : ''}`}>
              {t('social.rating')}
            </span>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-16 bg-border" />

          {/* Clients */}
          <div className="text-center">
            <p className={`text-foreground/90 ${isEthiopic ? 'font-ethiopic' : 'font-display text-lg'}`}>
              {t('social.clients')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
