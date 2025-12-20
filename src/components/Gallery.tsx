import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';

import nails from '@/assets/nails.png';
import hairBraids1 from '@/assets/hair-braids-1.png';
import hairBraids2 from '@/assets/hair-braids-2.png';
import hairBraids3 from '@/assets/hair-braids-3.png';
import hairBridal from '@/assets/hair-bridal.png';
import bride from '@/assets/bride.png';

export default function Gallery() {
  const { t, isEthiopic } = useLanguage();
  const { ref, isInView } = useInView();

  const images = [
    { src: hairBraids2, alt: 'Beautiful braids styling', span: 'md:col-span-2 md:row-span-2' },
    { src: nails, alt: 'Elegant nail art', span: '' },
    { src: hairBraids1, alt: 'Ombre braids', span: '' },
    { src: hairBridal, alt: 'Bridal hair with flowers', span: '' },
    { src: hairBraids3, alt: 'Box braids styling', span: '' },
    { src: bride, alt: 'Happy bride', span: 'md:col-span-2' },
  ];

  return (
    <section id="gallery" ref={ref} className="relative py-20 bg-background">
      {/* Smooth curved top */}
      <div className="absolute top-0 left-0 right-0 h-20 -translate-y-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,120 C300,80 900,40 1200,120 L1200,120 L0,120 Z" fill="hsl(var(--background))" />
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-display text-primary mb-4 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${isEthiopic ? 'font-ethiopic' : ''}`}
          >
            {t('gallery.title')}
          </h2>
          <p 
            className={`text-muted-foreground transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${isEthiopic ? 'font-ethiopic' : 'font-display italic'}`}
          >
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className={`gallery-item ${image.span} transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square md:aspect-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
