import { Scissors, Sparkles, Palette, Eye, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';

export default function Services() {
  const { t, isEthiopic } = useLanguage();
  const { ref, isInView } = useInView();

  const services = [
    {
      icon: Scissors,
      title: t('services.hair'),
      description: t('services.hair.desc'),
    },
    {
      icon: Sparkles,
      title: t('services.nails'),
      description: t('services.nails.desc'),
    },
    {
      icon: Palette,
      title: t('services.makeup'),
      description: t('services.makeup.desc'),
    },
    {
      icon: Eye,
      title: t('services.lashes'),
      description: t('services.lashes.desc'),
    },
    {
      icon: Heart,
      title: t('services.skincare'),
      description: t('services.skincare.desc'),
    },
  ];

  return (
    <section id="services" ref={ref} className="relative py-20 bg-gradient-burgundy">
      {/* Smooth curved top */}
      <div className="absolute top-0 left-0 right-0 h-20 -translate-y-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,120 C600,20 600,20 1200,120 L1200,120 L0,120 Z" fill="hsl(var(--burgundy-dark))" />
        </svg>
      </div>
      {/* Smooth curved bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 translate-y-full overflow-hidden rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,120 C600,20 600,20 1200,120 L1200,120 L0,120 Z" fill="hsl(var(--burgundy-dark))" />
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-display text-primary mb-4 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${isEthiopic ? 'font-ethiopic' : ''}`}
          >
            {t('services.title')}
          </h2>
          <p 
            className={`text-muted-foreground max-w-xl mx-auto transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${isEthiopic ? 'font-ethiopic' : 'font-display italic'}`}
          >
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card p-6 text-center group cursor-pointer transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className={`text-lg font-display text-foreground mb-2 ${isEthiopic ? 'font-ethiopic' : ''}`}>
                {service.title}
              </h3>
              <p className={`text-sm text-muted-foreground leading-relaxed ${isEthiopic ? 'font-ethiopic' : ''}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
