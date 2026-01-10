'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon, Bars3Icon } from '@heroicons/react/24/outline';

interface PolicyNavigationProps {
  currentPage?: string;
}

export default function PolicyNavigation({ currentPage }: PolicyNavigationProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-white shadow-lg rounded-md p-2"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Navigation Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen bg-white shadow-lg z-40
          transition-all duration-300 ease-in-out
          ${isCollapsed ? 'lg:w-16' : 'lg:w-80'}
          ${isMobileOpen ? 'w-80' : 'w-0 lg:w-80 lg:w-16'}
          ${isMobileOpen ? '' : 'overflow-hidden lg:overflow-visible'}
        `}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className={`${isCollapsed ? 'lg:hidden' : ''}`}>
            <h2 className="text-lg font-semibold text-gray-900">Políticas y Términos</h2>
            <p className="text-sm text-gray-600">GoSoft Solutions</p>
          </div>
          
          {/* Collapse Button - Desktop Only */}
          <button
            className="hidden lg:block p-1 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <ChevronRightIcon className="h-5 w-5 text-gray-600" />
            ) : (
              <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-2 overflow-y-auto h-full pb-20">
          <Link
            href="/politicas/aviso-privacidad"
            className={`
              block p-3 rounded-md transition-colors relative
              ${currentPage === 'privacy-policy' 
                ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700' 
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }
            `}
            onClick={() => setIsMobileOpen(false)}
          >
            <span className={`${isCollapsed ? 'lg:hidden' : ''} text-sm font-medium`}>
              Aviso de Privacidad
            </span>
            {isCollapsed && (
              <div className="hidden lg:flex items-center justify-center h-full">
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
              </div>
            )}
          </Link>

          <Link
            href="/politicas/terminos-condiciones"
            className={`
              block p-3 rounded-md transition-colors relative
              ${currentPage === 'terms-conditions' 
                ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700' 
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }
            `}
            onClick={() => setIsMobileOpen(false)}
          >
            <span className={`${isCollapsed ? 'lg:hidden' : ''} text-sm font-medium`}>
              Términos y Condiciones
            </span>
            {isCollapsed && (
              <div className="hidden lg:flex items-center justify-center h-full">
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
              </div>
            )}
          </Link>

          <Link
            href="/politicas/politica-cookies"
            className={`
              block p-3 rounded-md transition-colors relative
              ${currentPage === 'cookie-policy' 
                ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-707' 
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }
            `}
            onClick={() => setIsMobileOpen(false)}
          >
            <span className={`${isCollapsed ? 'lg:hidden' : ''} text-sm font-medium`}>
              Política de Cookies
            </span>
            {isCollapsed && (
              <div className="hidden lg:flex items-center justify-center h-full">
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
              </div>
            )}
          </Link>
          
          {/* Back to Home */}
          <div className="mt-8 pt-4 border-t border-gray-200">
            <Link
              href="/"
              className={`
                block p-3 rounded-md transition-colors text-center
                bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900
              `}
              onClick={() => setIsMobileOpen(false)}
            >
              <span className={`${isCollapsed ? 'lg:hidden' : ''} text-sm font-medium`}>
                ← Volver al Inicio
              </span>
              {isCollapsed && (
                <div className="hidden lg:flex items-center justify-center h-full">
                  <div className="text-lg">←</div>
                </div>
              )}
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}