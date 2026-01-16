'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface PolicyNavigationProps {
  currentPage?: string;
}

export default function PolicyNavigation({ currentPage }: PolicyNavigationProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const policies = [
    { name: 'Aviso de Privacidad', href: '/politica-de-proteccion-de-datos-personales', key: 'privacy-policy' },
    { name: 'Términos de Servicio', href: '/terminos-del-servicio', key: 'terms-conditions' },
    { name: 'Política de Cookies', href: '/politica-de-cookies', key: 'cookie-policy' },
    { name: 'Política de Vulnerabilidad', href: '/politica-de-vulnerabilidad', key: 'vulnerability-policy' },
    { name: 'Política Ambiental', href: '/politica-ambiental', key: 'environmental-policy' },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const scrollAmount = 240; // Aproximadamente el ancho de 2 botones
    const newScrollLeft = direction === 'left' 
      ? scrollRef.current.scrollLeft - scrollAmount
      : scrollRef.current.scrollLeft + scrollAmount;
    
    scrollRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  // Check scroll state on mount and window resize
  useEffect(() => {
    if (scrollRef.current) {
      handleScroll();
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current) {
        handleScroll();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-4">
          
          {/* Título */}
          <div className="flex-shrink-0 mr-6">
            <h2 className="text-lg font-semibold text-gray-900">Políticas Legales</h2>
          </div>

          {/* Container con flechas */}
          <div className="flex items-center flex-1">
            
            {/* Flecha izquierda */}
            <button
              onClick={() => scroll('left')}
              className={`flex-shrink-0 p-2 rounded-full transition-all duration-200 mr-2 ${
                canScrollLeft 
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 cursor-pointer' 
                  : 'text-gray-300 cursor-not-allowed'
              }`}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>

            {/* Navegación scrolleable */}
            <div 
              ref={scrollRef}
              className="flex space-x-2 overflow-x-auto scrollbar-hide flex-1 py-1"
              onScroll={handleScroll}
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {policies.map((policy) => (
                <Link
                  key={policy.key}
                  href={policy.href}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    currentPage === policy.key
                      ? 'bg-orange-100 text-orange-700 border-2 border-orange-300'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 border-2 border-transparent hover:border-gray-300'
                  }`}
                >
                  {policy.name}
                </Link>
              ))}
              
              {/* Botón de volver al inicio */}
              <Link
                href="/"
                className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium bg-sky-100 text-sky-700 hover:bg-sky-200 hover:text-sky-800 border-2 border-sky-300 hover:border-sky-400 transition-all duration-200 whitespace-nowrap"
              >
                ← Volver al Inicio
              </Link>
            </div>

            {/* Flecha derecha */}
            <button
              onClick={() => scroll('right')}
              className={`flex-shrink-0 p-2 rounded-full transition-all duration-200 ml-2 ${
                canScrollRight 
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 cursor-pointer' 
                  : 'text-gray-300 cursor-not-allowed'
              }`}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* CSS para ocultar scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}