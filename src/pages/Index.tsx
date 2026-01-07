import { useState } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Reviews from '@/components/Reviews';
import Services from '@/components/Services';
import StyleExplorer from '@/components/StyleExplorer';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import BookingForm from '@/components/BookingForm';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LanguageProvider>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Header />
        <main>
          <Hero />
          <SocialProof />
          <Reviews />
          <Services />
          <StyleExplorer />
          <Gallery />
          <About />
          <BookingForm />
          <Location />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
