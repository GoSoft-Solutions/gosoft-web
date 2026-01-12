'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Funcionalidad de scroll hide/show
  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down & past threshold
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);
      return () => window.removeEventListener('scroll', controlHeader);
    }
  }, [lastScrollY]);

  const navigationItems = [
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Soluciones', href: '/soluciones' },
    { name: 'Industrias', href: '/industrias' },
    { name: 'Carreras', href: '/careers' },
    { name: 'Clientes', href: '/clientes' },
  ];

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English (US)', flag: '🇺🇸' },
  ];

  return (
    <header className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-6 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-32'
    }`}>
      {/* Contenedor ovalado flotante */}
      <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-gray-200/50 rounded-full px-8 py-6.5">
        <div className="flex items-center justify-center relative w-full">
          
          {/* Logo */}
          <div className="absolute left-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
              <Image 
                src="/icons/gosoftheader_icon.svg" 
                alt="GoSoft Logo" 
                width={200} 
                height={62}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation - Centrada */}
          <nav className="hidden lg:flex items-center space-x-2 -translate-x-0">
            {navigationItems.map((item, index) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 font-medium text-[16px] py-2 px-3 transition-colors duration-200 relative rounded-full hover:bg-gray-50"
                >
                  {item.name}
                  
                  {/* Animated underline - adapted for rounded container */}
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full transition-all duration-300 ease-out group-hover:w-3/4"></span>
                </Link>
              </div>
            ))}
          </nav>

          {/* Right side - CTA Button + Language Selector */}
          <div className="absolute right-0 flex items-center space-x-2">
            
            {/* CTA Button */}
            <Link 
              href="/contacto"
              className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-6 py-3 rounded-full font-semibold text-[16px] whitespace-nowrap shadow-md shadow-gray-400/20 hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-200"
            >
              Empieza con Nosotros
            </Link>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1.5 text-gray-700 hover:text-gray-900 font-medium text-[16px] py-2 px-3 rounded-full hover:bg-gray-50 transition-all duration-200"
              >
                <span>Español</span>
                <svg 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Language Dropdown */}
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-10 backdrop-blur-md"
                     style={{ transform: 'translateY(4px)' }}>
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        setIsLanguageOpen(false);
                        // Aquí irá la lógica de cambio de idioma
                      }}
                      className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-150 rounded-lg mx-1"
                    >
                      <span className="text-gray-700 text-[16px]">{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="text-gray-700 hover:text-gray-900 focus:outline-none p-2 rounded-full hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
      
      {/* Click outside to close language dropdown */}
      {isLanguageOpen && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setIsLanguageOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;