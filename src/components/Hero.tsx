import { useLanguage } from '@/contexts/LanguageContext';
import interiorImage from '@/assets/interior.png';

export default function Hero() {
  const { t, isEthiopic } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={interiorImage}
          alt="Nuhas Beauty Garden Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gradient-gold mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Nuhas Beauty Garden
          </h1>
          
          <p 
            className={`text-foreground/90 text-lg md:text-xl lg:text-2xl leading-relaxed mb-10 opacity-0 animate-fade-in ${
              isEthiopic ? 'font-ethiopic' : 'font-display italic'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            {t('hero.tagline')}
          </p>

          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <a
              href="#booking"
              className={`btn-gold w-full sm:w-auto ${isEthiopic ? 'font-ethiopic' : ''}`}
            >
              {t('hero.cta.book')}
            </a>
            <a
              href="#services"
              className={`btn-outline w-full sm:w-auto ${isEthiopic ? 'font-ethiopic' : ''}`}
            >
              {t('hero.cta.services')}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
