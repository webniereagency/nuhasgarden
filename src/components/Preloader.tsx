import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const { t, isEthiopic } = useLanguage();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 600);
    }, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`preloader ${isExiting ? 'preloader-exit' : ''}`}>
      <div className="flex flex-col items-center justify-center px-8">
        <img 
          src={logo} 
          alt="Nuhas Beauty Garden" 
          className="preloader-logo w-48 md:w-64 lg:w-72 mb-8"
        />
        <p 
          className={`preloader-tagline text-center text-primary/80 text-lg md:text-xl tracking-wide ${
            isEthiopic ? 'font-ethiopic' : 'font-display italic'
          }`}
        >
          {t('preloader.tagline')}
        </p>
      </div>
    </div>
  );
}
