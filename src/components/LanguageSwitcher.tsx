'use client';

import { useState, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const [language, setLanguage] = useState<Language>('es');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Get language from localStorage on mount
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    setIsDropdownOpen(false);
    
    // Trigger a custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('languageChange', { detail: newLanguage }));
  };

  const languages = {
    es: { flag: '🇪🇸', name: 'Español' },
    en: { flag: '🇺🇸', name: 'English' }
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-shadow flex items-center gap-2"
      >
        <span className="text-lg">{languages[language].flag}</span>
        <span className="text-sm font-medium text-gray-700">{languages[language].name}</span>
        <svg 
          className={`w-4 h-4 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-full">
          {Object.entries(languages).map(([code, lang]) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code as Language)}
              className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-3 ${
                language === code ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
              } ${code === 'es' ? 'rounded-t-lg' : 'rounded-b-lg'}`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Hook to use current language in other components
export function useLanguage() {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    // Get initial language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }

    // Listen for language changes
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail as Language);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  return language;
}