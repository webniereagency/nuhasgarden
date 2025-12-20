import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';

import nails from '@/assets/nails.png';
import hairBraids1 from '@/assets/hair-braids-1.png';
import hairBraids2 from '@/assets/hair-braids-2.png';
import hairBraids3 from '@/assets/hair-braids-3.png';
import hairBridal from '@/assets/hair-bridal.png';
import bride from '@/assets/bride.png';
import nailsGrass from '@/assets/nails-grass.png';
import nailsGold from '@/assets/nails-gold.png';
import nailsRedWhite from '@/assets/nails-red-white.png';
import hairCurly from '@/assets/hair-curly.png';
import braidsCurly from '@/assets/braids-curly.png';
import nailsRose from '@/assets/nails-rose.png';
import braidsBack from '@/assets/braids-back.png';
import hairSleek from '@/assets/hair-sleek.png';

export default function Gallery() {
  const { t, isEthiopic } = useLanguage();
  const { ref, isInView } = useInView();

  const images = [
    { src: hairBraids2, alt: 'Beautiful braids styling' },
    { src: nailsGold, alt: 'Gold crystal nail art' },
    { src: braidsCurly, alt: 'Curly braids with ombre' },
    { src: nailsGrass, alt: 'Floral pastel nails' },
    { src: hairCurly, alt: 'Elegant curly hairstyle' },
    { src: nailsRedWhite, alt: 'Red and white stiletto nails' },
    { src: hairBraids1, alt: 'Ombre braids' },
    { src: nailsRose, alt: 'Pastel nails with rose' },
    { src: braidsBack, alt: 'Intricate back braids' },
    { src: hairSleek, alt: 'Sleek smooth hair' },
    { src: nails, alt: 'Elegant nail art' },
    { src: hairBridal, alt: 'Bridal hair with flowers' },
    { src: hairBraids3, alt: 'Box braids styling' },
    { src: bride, alt: 'Happy bride' },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className={`gallery-item group relative overflow-hidden rounded-2xl transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="aspect-[3/4] w-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-xs font-medium truncate">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
