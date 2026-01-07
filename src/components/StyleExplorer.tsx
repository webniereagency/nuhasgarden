import { useState } from 'react';
import { 
  Scissors, 
  Sparkles, 
  Eye, 
  Flower2, 
  Heart, 
  Hand,
  ChevronDown,
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

interface StyleService {
  id: string;
  nameKey: string;
  descKey: string;
  image: string;
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
      { id: 'ethiopian', nameKey: 'styles.hair.ethiopian.name', descKey: 'styles.hair.ethiopian.desc', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop' },
      { id: 'box', nameKey: 'styles.hair.box.name', descKey: 'styles.hair.box.desc', image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e1dab?w=600&h=600&fit=crop' },
      { id: 'cornrows', nameKey: 'styles.hair.cornrows.name', descKey: 'styles.hair.cornrows.desc', image: 'https://images.unsplash.com/photo-1626954079979-6d6d8e9b4f58?w=600&h=600&fit=crop' },
      { id: 'knotless', nameKey: 'styles.hair.knotless.name', descKey: 'styles.hair.knotless.desc', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=600&fit=crop' },
      { id: 'twists', nameKey: 'styles.hair.twists.name', descKey: 'styles.hair.twists.desc', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=600&fit=crop' },
      { id: 'bridal', nameKey: 'styles.hair.bridal.name', descKey: 'styles.hair.bridal.desc', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=600&fit=crop' },
    ],
  },
  {
    id: 'makeup',
    nameKey: 'styles.makeup.category',
    icon: Sparkles,
    services: [
      { id: 'pro', nameKey: 'styles.makeup.pro.name', descKey: 'styles.makeup.pro.desc', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=600&fit=crop' },
      { id: 'bridal', nameKey: 'styles.makeup.bridal.name', descKey: 'styles.makeup.bridal.desc', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=600&fit=crop' },
      { id: 'evening', nameKey: 'styles.makeup.evening.name', descKey: 'styles.makeup.evening.desc', image: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=600&h=600&fit=crop' },
      { id: 'natural', nameKey: 'styles.makeup.natural.name', descKey: 'styles.makeup.natural.desc', image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&h=600&fit=crop' },
      { id: 'trial', nameKey: 'styles.makeup.trial.name', descKey: 'styles.makeup.trial.desc', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=600&fit=crop' },
    ],
  },
  {
    id: 'brows',
    nameKey: 'styles.brows.category',
    icon: Eye,
    services: [
      { id: 'threading', nameKey: 'styles.brows.threading.name', descKey: 'styles.brows.threading.desc', image: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=600&h=600&fit=crop' },
      { id: 'tinting', nameKey: 'styles.brows.tinting.name', descKey: 'styles.brows.tinting.desc', image: 'https://images.unsplash.com/photo-1588123190131-1c3fac394f4b?w=600&h=600&fit=crop' },
      { id: 'extensions', nameKey: 'styles.brows.extensions.name', descKey: 'styles.brows.extensions.desc', image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&h=600&fit=crop' },
      { id: 'lift', nameKey: 'styles.brows.lift.name', descKey: 'styles.brows.lift.desc', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=600&fit=crop' },
    ],
  },
  {
    id: 'skin',
    nameKey: 'styles.skin.category',
    icon: Flower2,
    services: [
      { id: 'classic', nameKey: 'styles.skin.classic.name', descKey: 'styles.skin.classic.desc', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop' },
      { id: 'deep', nameKey: 'styles.skin.deep.name', descKey: 'styles.skin.deep.desc', image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&h=600&fit=crop' },
      { id: 'hydrating', nameKey: 'styles.skin.hydrating.name', descKey: 'styles.skin.hydrating.desc', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=600&fit=crop' },
      { id: 'acne', nameKey: 'styles.skin.acne.name', descKey: 'styles.skin.acne.desc', image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=600&fit=crop' },
      { id: 'brightening', nameKey: 'styles.skin.brightening.name', descKey: 'styles.skin.brightening.desc', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=600&fit=crop' },
    ],
  },
  {
    id: 'body',
    nameKey: 'styles.body.category',
    icon: Heart,
    services: [
      { id: 'scrub', nameKey: 'styles.body.scrub.name', descKey: 'styles.body.scrub.desc', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=600&fit=crop' },
      { id: 'massage', nameKey: 'styles.body.massage.name', descKey: 'styles.body.massage.desc', image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=600&fit=crop' },
      { id: 'aroma', nameKey: 'styles.body.aroma.name', descKey: 'styles.body.aroma.desc', image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=600&fit=crop' },
      { id: 'wrap', nameKey: 'styles.body.wrap.name', descKey: 'styles.body.wrap.desc', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=600&fit=crop' },
    ],
  },
  {
    id: 'nails',
    nameKey: 'styles.nails.category',
    icon: Hand,
    services: [
      { id: 'classic', nameKey: 'styles.nails.classic.name', descKey: 'styles.nails.classic.desc', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop' },
      { id: 'gel', nameKey: 'styles.nails.gel.name', descKey: 'styles.nails.gel.desc', image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&h=600&fit=crop' },
      { id: 'pedicure', nameKey: 'styles.nails.pedicure.name', descKey: 'styles.nails.pedicure.desc', image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&h=600&fit=crop' },
      { id: 'art', nameKey: 'styles.nails.art.name', descKey: 'styles.nails.art.desc', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop' },
    ],
  },
];

export default function StyleExplorer() {
  const { t, isEthiopic } = useLanguage();
  const { ref, isInView } = useInView();
  const [selectedService, setSelectedService] = useState<{
    nameKey: string;
    descKey: string;
    image: string;
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
                              <img
                                src={service.image}
                                alt={t(service.nameKey)}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={selectedService.image}
                  alt={t(selectedService.nameKey)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-hero" />
                <DialogClose className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
                  <X className="w-5 h-5 text-foreground" />
                </DialogClose>
              </div>
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
