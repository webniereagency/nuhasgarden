import { useState, FormEvent } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';
import { toast } from 'sonner';

export default function BookingForm() {
  const { t, isEthiopic } = useLanguage();
  const { ref, isInView } = useInView();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    t('services.hair'),
    t('services.nails'),
    t('services.makeup'),
    t('services.lashes'),
    t('services.skincare'),
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // EmailJS integration placeholder
    // To enable: Install @emailjs/browser, add your credentials below
    // import emailjs from '@emailjs/browser';
    // await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.currentTarget, 'YOUR_PUBLIC_KEY');

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSuccess(true);
    toast.success(t('booking.success'));

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <section id="booking" ref={ref} className="py-20 bg-gradient-burgundy">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              className={`text-3xl md:text-4xl font-display text-primary mb-4 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${isEthiopic ? 'font-ethiopic' : ''}`}
            >
              {t('booking.title')}
            </h2>
            <p 
              className={`text-muted-foreground transition-all duration-700 delay-100 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${isEthiopic ? 'font-ethiopic' : 'font-display italic'}`}
            >
              {t('booking.subtitle')}
            </p>
          </div>

          <form 
            onSubmit={handleSubmit}
            className={`space-y-5 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={`block text-sm text-foreground/80 mb-2 ${isEthiopic ? 'font-ethiopic' : ''}`}>
                  {t('booking.name')} *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="form-input"
                  placeholder={isEthiopic ? 'ስምዎን ያስገቡ' : 'Enter your name'}
                />
              </div>
              <div>
                <label className={`block text-sm text-foreground/80 mb-2 ${isEthiopic ? 'font-ethiopic' : ''}`}>
                  {t('booking.phone')} *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="form-input"
                  placeholder="+251 9X XXX XXXX"
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm text-foreground/80 mb-2 ${isEthiopic ? 'font-ethiopic' : ''}`}>
                {t('booking.email')}
              </label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label className={`block text-sm text-foreground/80 mb-2 ${isEthiopic ? 'font-ethiopic' : ''}`}>
                {t('booking.service')} *
              </label>
              <select name="service" required className="form-input">
                <option value="">{t('booking.select')}</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={`block text-sm text-foreground/80 mb-2 ${isEthiopic ? 'font-ethiopic' : ''}`}>
                  {t('booking.date')} *
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  className="form-input"
                />
              </div>
              <div>
                <label className={`block text-sm text-foreground/80 mb-2 ${isEthiopic ? 'font-ethiopic' : ''}`}>
                  {t('booking.time')}
                </label>
                <input
                  type="time"
                  name="time"
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm text-foreground/80 mb-2 ${isEthiopic ? 'font-ethiopic' : ''}`}>
                {t('booking.notes')}
              </label>
              <textarea
                name="notes"
                rows={3}
                className="form-input resize-none"
                placeholder={isEthiopic ? 'ተጨማሪ መረጃ...' : 'Additional information...'}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || isSuccess}
              className={`btn-gold w-full flex items-center justify-center gap-2 ${isEthiopic ? 'font-ethiopic' : ''}`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{isEthiopic ? 'እየተላከ...' : 'Sending...'}</span>
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>{isEthiopic ? 'ተልኳል!' : 'Sent!'}</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>{t('booking.submit')}</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
