import { useState, useEffect } from 'react';
import { ChevronDown, Hand } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languages, Language } from '@/lib/translations';

export default function LanguageSwitcher() {
  const { language, setLanguage, isEthiopic } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showPointer, setShowPointer] = useState(true);

  const currentLang = languages.find(l => l.code === language);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPointer(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
    setShowPointer(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        {showPointer && (
          <div className="pointer-hint text-primary hidden md:block">
            <Hand className="w-5 h-5 rotate-90" />
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lang-switcher"
          aria-label="Select language"
        >
          <span className={`text-sm ${isEthiopic ? 'font-ethiopic' : ''}`}>
            {currentLang?.nativeName}
          </span>
          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-sm shadow-card z-50 overflow-hidden animate-fade-in">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full px-4 py-3 text-left text-sm hover:bg-secondary/50 transition-colors ${
                language === lang.code ? 'bg-secondary/30 text-primary' : 'text-foreground'
              } ${lang.code === 'am' || lang.code === 'ti' ? 'font-ethiopic' : ''}`}
            >
              <span className="block">{lang.nativeName}</span>
              <span className="block text-xs text-muted-foreground">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
