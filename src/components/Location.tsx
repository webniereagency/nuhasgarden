import { MapPin, Clock, Navigation } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';

export default function Location() {
  const { t, isEthiopic } = useLanguage();
  const { ref, isInView } = useInView();

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.2!2d38.79199249404405!3d8.992497678064732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTknMzMuMCJOIDM4wrA0NyczMS42IkU!5e0!3m2!1sen!2set!4v1640000000000!5m2!1sen!2set";

  return (
    <section ref={ref} className="relative py-20 bg-background">
      {/* Smooth curved top */}
      <div className="absolute top-0 left-0 right-0 h-16 -translate-y-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,120 C400,80 800,40 1200,120 L1200,120 L0,120 Z" fill="hsl(var(--background))" />
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className={`text-3xl md:text-4xl font-display text-primary mb-4 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${isEthiopic ? 'font-ethiopic' : ''}`}
          >
            {t('location.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Info */}
          <div 
            className={`space-y-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className={`text-foreground ${isEthiopic ? 'font-ethiopic' : ''}`}>
                  {t('location.address')}
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Bole Brass, Addis Ababa, Ethiopia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className={`text-foreground ${isEthiopic ? 'font-ethiopic' : ''}`}>
                  {t('location.hours')}
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=8.992497678064732,38.79199249404405"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-outline inline-flex items-center gap-2 mt-4 ${isEthiopic ? 'font-ethiopic' : ''}`}
            >
              <Navigation className="w-4 h-4" />
              {t('location.cta')}
            </a>
          </div>

          {/* Map */}
          <div 
            className={`rounded-lg overflow-hidden shadow-card h-64 lg:h-auto transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nuhas Beauty Garden Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
