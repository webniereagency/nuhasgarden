import { useState, useEffect } from 'react';
import { 
  Scissors, 
  Sparkles, 
  Eye, 
  Flower2, 
  Heart, 
  Hand,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Dialog,
  DialogContent,
  DialogClose,
} from '@/components/ui/dialog';

// Import images
import boxBraids1 from '@/assets/styles/box-braids-1.png';
import boxBraids2 from '@/assets/styles/box-braids-2.png';
import boxBraids3 from '@/assets/styles/box-braids-3.png';
import ethiopianBraids1 from '@/assets/styles/ethiopian-braids-1.png';
import ethiopianBraids2 from '@/assets/styles/ethiopian-braids-2.png';
import ethiopianBraids3 from '@/assets/styles/ethiopian-braids-3.png';
import ethiopianBraids4 from '@/assets/styles/ethiopian-braids-4.png';
import ethiopianBraids5 from '@/assets/styles/ethiopian-braids-5.png';
import cornrows1 from '@/assets/styles/cornrows-1.png';
import knotlessBraids1 from '@/assets/styles/knotless-braids-1.png';
import knotlessBraids2 from '@/assets/styles/knotless-braids-2.png';
import twistBraids1 from '@/assets/styles/twist-braids-1.png';
import twistBraids2 from '@/assets/styles/twist-braids-2.png';
import bridal1 from '@/assets/styles/bridal-1.png';
import bridal2 from '@/assets/styles/bridal-2.png';
import bridal3 from '@/assets/styles/bridal-3.png';
import bridal4 from '@/assets/styles/bridal-4.png';
import bridal5 from '@/assets/styles/bridal-5.png';
// Makeup images
import proMakeup1 from '@/assets/styles/pro-makeup-1.png';
import proMakeup2 from '@/assets/styles/pro-makeup-2.png';
import proMakeup3 from '@/assets/styles/pro-makeup-3.png';
import bridalMakeup1 from '@/assets/styles/bridal-makeup-1.png';
import bridalMakeup2 from '@/assets/styles/bridal-makeup-2.png';
import bridalMakeup3 from '@/assets/styles/bridal-makeup-3.png';
import naturalMakeup1 from '@/assets/styles/natural-makeup-1.png';
import naturalMakeup2 from '@/assets/styles/natural-makeup-2.png';
import naturalMakeup3 from '@/assets/styles/natural-makeup-3.png';
import naturalMakeup4 from '@/assets/styles/natural-makeup-4.png';
// Eyebrow & Lash images
import eyebrowThreading1 from '@/assets/styles/eyebrow-threading-1.png';
import eyebrowThreading2 from '@/assets/styles/eyebrow-threading-2.png';
import eyebrowThreading3 from '@/assets/styles/eyebrow-threading-3.png';
import eyebrowTinting1 from '@/assets/styles/eyebrow-tinting-1.png';
import eyebrowTinting2 from '@/assets/styles/eyebrow-tinting-2.png';
import eyebrowTinting3 from '@/assets/styles/eyebrow-tinting-3.png';
import eyelashExtensions1 from '@/assets/styles/eyelash-extensions-1.png';
import eyelashExtensions2 from '@/assets/styles/eyelash-extensions-2.png';
import lashLift1 from '@/assets/styles/lash-lift-1.png';
import lashLift2 from '@/assets/styles/lash-lift-2.png';
// Skin care images
import classicFacial1 from '@/assets/styles/classic-facial-1.png';
import classicFacial2 from '@/assets/styles/classic-facial-2.png';
import classicFacial3 from '@/assets/styles/classic-facial-3.png';
import deepCleansing1 from '@/assets/styles/deep-cleansing-1.png';
import deepCleansing2 from '@/assets/styles/deep-cleansing-2.png';
import deepCleansing3 from '@/assets/styles/deep-cleansing-3.png';
import hydratingFacial1 from '@/assets/styles/hydrating-facial-1.png';
import hydratingFacial2 from '@/assets/styles/hydrating-facial-2.png';
import acneTreatment1 from '@/assets/styles/acne-treatment-1.png';
import acneTreatment2 from '@/assets/styles/acne-treatment-2.png';

interface StyleService {
  id: string;
  nameKey: string;
  descKey: string;
  images: string[]; // Changed to array for multiple images
}

interface StyleCategory {
  id: string;
  nameKey: string;
  icon: React.ElementType;
  services: StyleService[];
}

const categories: StyleCategory[] = [
  {
    id: 'hair',
    nameKey: 'styles.hair.category',
    icon: Scissors,
    services: [
      { 
        id: 'box', 
        nameKey: 'styles.hair.box.name', 
        descKey: 'styles.hair.box.desc', 
        images: [boxBraids1, boxBraids2, boxBraids3] 
      },
      { 
        id: 'ethiopian', 
        nameKey: 'styles.hair.ethiopian.name', 
        descKey: 'styles.hair.ethiopian.desc', 
        images: [ethiopianBraids1, ethiopianBraids2, ethiopianBraids3, ethiopianBraids4, ethiopianBraids5] 
      },
      { 
        id: 'cornrows', 
        nameKey: 'styles.hair.cornrows.name', 
        descKey: 'styles.hair.cornrows.desc', 
        images: [cornrows1] 
      },
      { id: 'knotless', nameKey: 'styles.hair.knotless.name', descKey: 'styles.hair.knotless.desc', images: [knotlessBraids1, knotlessBraids2] },
      { id: 'twists', nameKey: 'styles.hair.twists.name', descKey: 'styles.hair.twists.desc', images: [twistBraids1, twistBraids2] },
      { id: 'bridal', nameKey: 'styles.hair.bridal.name', descKey: 'styles.hair.bridal.desc', images: [bridal1, bridal2, bridal3, bridal4, bridal5] },
    ],
  },
  {
    id: 'makeup',
    nameKey: 'styles.makeup.category',
    icon: Sparkles,
    services: [
      { id: 'pro', nameKey: 'styles.makeup.pro.name', descKey: 'styles.makeup.pro.desc', images: [proMakeup1, proMakeup2, proMakeup3] },
      { id: 'bridal', nameKey: 'styles.makeup.bridal.name', descKey: 'styles.makeup.bridal.desc', images: [bridalMakeup1, bridalMakeup2, bridalMakeup3] },
      { id: 'natural', nameKey: 'styles.makeup.natural.name', descKey: 'styles.makeup.natural.desc', images: [naturalMakeup1, naturalMakeup2, naturalMakeup3, naturalMakeup4] },
    ],
  },
  {
    id: 'brows',
    nameKey: 'styles.brows.category',
    icon: Eye,
    services: [
      { id: 'threading', nameKey: 'styles.brows.threading.name', descKey: 'styles.brows.threading.desc', images: [eyebrowThreading1, eyebrowThreading2, eyebrowThreading3] },
      { id: 'tinting', nameKey: 'styles.brows.tinting.name', descKey: 'styles.brows.tinting.desc', images: [eyebrowTinting1, eyebrowTinting2, eyebrowTinting3] },
      { id: 'extensions', nameKey: 'styles.brows.extensions.name', descKey: 'styles.brows.extensions.desc', images: [eyelashExtensions1, eyelashExtensions2] },
      { id: 'lift', nameKey: 'styles.brows.lift.name', descKey: 'styles.brows.lift.desc', images: [lashLift1, lashLift2] },
    ],
  },
  {
    id: 'skin',
    nameKey: 'styles.skin.category',
    icon: Flower2,
    services: [
      { id: 'classic', nameKey: 'styles.skin.classic.name', descKey: 'styles.skin.classic.desc', images: [classicFacial1, classicFacial2, classicFacial3] },
      { id: 'deep', nameKey: 'styles.skin.deep.name', descKey: 'styles.skin.deep.desc', images: [deepCleansing1, deepCleansing2, deepCleansing3] },
      { id: 'hydrating', nameKey: 'styles.skin.hydrating.name', descKey: 'styles.skin.hydrating.desc', images: [hydratingFacial1, hydratingFacial2] },
      { id: 'acne', nameKey: 'styles.skin.acne.name', descKey: 'styles.skin.acne.desc', images: [acneTreatment1, acneTreatment2] },
      { id: 'brightening', nameKey: 'styles.skin.brightening.name', descKey: 'styles.skin.brightening.desc', images: ['https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=600&fit=crop'] },
    ],
  },
  {
    id: 'body',
    nameKey: 'styles.body.category',
    icon: Heart,
    services: [
      { id: 'scrub', nameKey: 'styles.body.scrub.name', descKey: 'styles.body.scrub.desc', images: ['https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=600&fit=crop'] },
      { id: 'massage', nameKey: 'styles.body.massage.name', descKey: 'styles.body.massage.desc', images: ['https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=600&fit=crop'] },
      { id: 'aroma', nameKey: 'styles.body.aroma.name', descKey: 'styles.body.aroma.desc', images: ['https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=600&fit=crop'] },
      { id: 'wrap', nameKey: 'styles.body.wrap.name', descKey: 'styles.body.wrap.desc', images: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=600&fit=crop'] },
    ],
  },
  {
    id: 'nails',
    nameKey: 'styles.nails.category',
    icon: Hand,
    services: [
      { id: 'classic', nameKey: 'styles.nails.classic.name', descKey: 'styles.nails.classic.desc', images: ['https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop'] },
      { id: 'gel', nameKey: 'styles.nails.gel.name', descKey: 'styles.nails.gel.desc', images: ['https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&h=600&fit=crop'] },
      { id: 'pedicure', nameKey: 'styles.nails.pedicure.name', descKey: 'styles.nails.pedicure.desc', images: ['https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&h=600&fit=crop'] },
      { id: 'art', nameKey: 'styles.nails.art.name', descKey: 'styles.nails.art.desc', images: ['https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop'] },
    ],
  },
];

// Image Carousel Component
function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiple = images.length > 1;

  // Auto-advance every 3 seconds
  useEffect(() => {
    if (!hasMultiple) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, hasMultiple]);

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Images */}
      <div 
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${alt} ${idx + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
            loading="lazy"
          />
        ))}
      </div>

      {/* Navigation Arrows - Only show if multiple images */}
      {hasMultiple && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>
        </>
      )}

      {/* Dots Indicator - Only show if multiple images */}
      {hasMultiple && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex 
                  ? 'bg-primary w-4' 
                  : 'bg-foreground/50 hover:bg-foreground/70'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* "Scroll for more" hint on mobile - Only show if multiple images */}
      {hasMultiple && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden">
          <span className="text-xs text-foreground/70 bg-background/60 backdrop-blur-sm px-2 py-1 rounded-full">
            Swipe for more
          </span>
        </div>
      )}
    </div>
  );
}

// Dialog Image Carousel with larger arrows
function DialogImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full aspect-video overflow-hidden">
      {/* Images */}
      <div 
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${alt} ${idx + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

      {/* Navigation Arrows */}
      {hasMultiple && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {hasMultiple && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentIndex 
                  ? 'bg-primary w-6' 
                  : 'bg-foreground/50 hover:bg-foreground/70'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image counter */}
      {hasMultiple && (
        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-foreground z-10">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

export default function StyleExplorer() {
  const { t, isEthiopic } = useLanguage();
  const { ref, isInView } = useInView();
  const [selectedService, setSelectedService] = useState<{
    nameKey: string;
    descKey: string;
    images: string[];
  } | null>(null);

  const handleBookStyle = (serviceName: string) => {
    setSelectedService(null);
    
    // Scroll to booking form
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
      
      // Wait for scroll and pre-select service category
      setTimeout(() => {
        const serviceSelect = bookingSection.querySelector('select[name="service"]') as HTMLSelectElement;
        if (serviceSelect) {
          // Find the matching service option
          const options = Array.from(serviceSelect.options);
          const matchingOption = options.find(opt => 
            serviceName.toLowerCase().includes(opt.value.toLowerCase()) ||
            opt.value.toLowerCase().includes(serviceName.toLowerCase().split(' ')[0])
          );
          if (matchingOption) {
            serviceSelect.value = matchingOption.value;
          }
        }
      }, 800);
    }
  };

  return (
    <section id="styles" ref={ref} className="relative py-20 bg-gradient-burgundy overflow-hidden">
      {/* Smooth curved top */}
      <div className="absolute top-0 left-0 right-0 h-20 -translate-y-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,120 C300,60 900,60 1200,120 L1200,120 L0,120 Z" fill="hsl(var(--burgundy-dark))" />
        </svg>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-display text-primary mb-4 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${isEthiopic ? 'font-ethiopic' : ''}`}
          >
            {t('styles.title')}
          </h2>
          <p 
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${isEthiopic ? 'font-ethiopic' : 'font-display italic'}`}
          >
            {t('styles.subtitle')}
          </p>
        </div>

        {/* Accordion Categories */}
        <div 
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {categories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <AccordionItem 
                  key={category.id} 
                  value={category.id}
                  className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm"
                >
                  <AccordionTrigger 
                    className={`px-6 py-5 hover:no-underline hover:bg-secondary/30 transition-colors ${isEthiopic ? 'font-ethiopic' : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xl font-display text-foreground">
                        {t(category.nameKey)}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                      {category.services.map((service, serviceIndex) => (
                        <div
                          key={service.id}
                          onClick={() => setSelectedService(service)}
                          className="group cursor-pointer"
                          style={{
                            animationDelay: `${serviceIndex * 100}ms`,
                          }}
                        >
                          <div className="service-card h-full">
                            <div className="relative aspect-square overflow-hidden">
                              <ImageCarousel 
                                images={service.images} 
                                alt={t(service.nameKey)} 
                              />
                              <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                <span className={`text-foreground font-medium ${isEthiopic ? 'font-ethiopic' : ''}`}>
                                  {t('styles.view')}
                                </span>
                              </div>
                            </div>
                            <div className="p-4">
                              <h4 className={`text-lg font-display text-foreground mb-1 group-hover:text-primary transition-colors ${isEthiopic ? 'font-ethiopic' : ''}`}>
                                {t(service.nameKey)}
                              </h4>
                              <p className={`text-sm text-muted-foreground line-clamp-2 ${isEthiopic ? 'font-ethiopic' : ''}`}>
                                {t(service.descKey)}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>

      {/* Smooth curved bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 translate-y-full overflow-hidden rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,120 C300,60 900,60 1200,120 L1200,120 L0,120 Z" fill="hsl(var(--burgundy-dark))" />
        </svg>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden bg-card border-border/50">
          {selectedService && (
            <>
              <DialogImageCarousel 
                images={selectedService.images} 
                alt={t(selectedService.nameKey)} 
              />
              <DialogClose className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors z-20">
                <X className="w-5 h-5 text-foreground" />
              </DialogClose>
              <div className="p-6">
                <h3 className={`text-2xl font-display text-primary mb-2 ${isEthiopic ? 'font-ethiopic' : ''}`}>
                  {t(selectedService.nameKey)}
                </h3>
                <p className={`text-muted-foreground mb-6 ${isEthiopic ? 'font-ethiopic' : ''}`}>
                  {t(selectedService.descKey)}
                </p>
                <button
                  onClick={() => handleBookStyle(t(selectedService.nameKey))}
                  className={`btn-gold w-full ${isEthiopic ? 'font-ethiopic' : ''}`}
                >
                  {t('styles.book')}
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
