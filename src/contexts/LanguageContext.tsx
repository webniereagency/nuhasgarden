import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, t as translate } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isEthiopic: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('am');
  const [showPointer, setShowPointer] = useState(true);

  const isEthiopic = language === 'am' || language === 'ti';

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPointer(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const t = (key: string) => translate(key, language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isEthiopic }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
