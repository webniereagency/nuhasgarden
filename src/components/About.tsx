import { Users, Shield, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';
import interior from '@/assets/interior.png';

export default function About() {
  const { t, isEthiopic } = useLanguage();
  const { ref, isInView } = useInView();

  const values = [
    { icon: Users, label: t('about.values.1') },
    { icon: Shield, label: t('about.values.2') },
    { icon: Heart, label: t('about.values.3') },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div 
            className={`gallery-item transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <img
              src={interior}
              alt="Nuhas Beauty Garden Salon Interior"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Content */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className={`text-3xl md:text-4xl font-display text-primary mb-6 ${isEthiopic ? 'font-ethiopic' : ''}`}>
              {t('about.title')}
            </h2>
            
            <p className={`text-foreground/85 leading-relaxed mb-8 ${isEthiopic ? 'font-ethiopic' : ''}`}>
              {t('about.story')}
            </p>

            <div className="grid grid-cols-3 gap-4">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-lg bg-card/50 border border-border/30"
                >
                  <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className={`text-sm text-foreground/80 ${isEthiopic ? 'font-ethiopic' : ''}`}>
                    {value.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
