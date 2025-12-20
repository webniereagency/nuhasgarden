import { useState, FormEvent } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

// ============================================
// EMAILJS CONFIGURATION - REPLACE THESE VALUES
// ============================================
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';      // Replace with your EmailJS service ID
const EMAILJS_ADMIN_TEMPLATE_ID = 'YOUR_ADMIN_TEMPLATE_ID';  // Template for spa notification
const EMAILJS_CUSTOMER_TEMPLATE_ID = 'YOUR_CUSTOMER_TEMPLATE_ID';  // Template for customer confirmation
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // Replace with your EmailJS public key
// ============================================

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

  const formatDate = (dateString: string): string => {
    if (!dateString) return 'Not specified';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string): string => {
    if (!timeString) return 'Flexible';
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Extract form values
    const customerName = formData.get('name') as string;
    const customerPhone = formData.get('phone') as string;
    const customerEmail = formData.get('email') as string || 'Not provided';
    const service = formData.get('service') as string;
    const date = formData.get('date') as string;
    const time = formData.get('time') as string;
    const notes = formData.get('notes') as string || 'No special requests';

    // Format booking date and time
    const bookingDate = formatDate(date);
    const bookingTime = formatTime(time);
    const submissionDate = new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'short'
    });

    // Template parameters for both emails
    const templateParams = {
      customer_name: customerName,
      customer_phone: customerPhone,
      customer_email: customerEmail,
      service_type: service,
      booking_date: bookingDate,
      booking_time: bookingTime,
      special_notes: notes,
      submission_date: submissionDate,
    };

    try {
      // Send notification to spa (penguinnico5@gmail.com)
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_ADMIN_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Send confirmation to customer (only if email provided)
      if (customerEmail && customerEmail !== 'Not provided') {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_CUSTOMER_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );
      }

      setIsLoading(false);
      setIsSuccess(true);
      toast.success(t('booking.success'));

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        form.reset();
      }, 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setIsLoading(false);
      toast.error(isEthiopic ? 'ስህተት ተከስቷል። እባክዎ ደግመው ይሞክሩ።' : 'Something went wrong. Please try again.');
    }
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
