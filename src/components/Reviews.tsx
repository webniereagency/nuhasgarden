import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';

export default function Reviews() {
  const { t, isEthiopic } = useLanguage();
  const { ref, isInView } = useInView();

  const reviews = [
    { text: t('review.1'), author: t('review.1.author') },
    { text: t('review.2'), author: t('review.2.author') },
    { text: t('review.3'), author: t('review.3.author') },
  ];

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className={`text-3xl md:text-4xl font-display text-primary mb-4 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${isEthiopic ? 'font-ethiopic' : ''}`}
          >
            {t('reviews.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`service-card p-6 md:p-8 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className={`text-foreground/85 mb-6 leading-relaxed ${isEthiopic ? 'font-ethiopic' : ''}`}>
                "{review.text}"
              </p>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-primary fill-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">— {review.author}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://g.page/r/nuhas-beauty-garden/review"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 text-sm underline underline-offset-4 transition-colors"
          >
            Leave a review on Google
          </a>
        </div>
      </div>
    </section>
  );
}
