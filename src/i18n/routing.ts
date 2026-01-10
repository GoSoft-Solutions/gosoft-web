import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Los idiomas disponibles
  locales: ['es', 'en'],
  // El idioma predeterminado
  defaultLocale: 'es',
  // Configuración de rutas
  pathnames: {
    '/': '/',
    '/politicas': {
      es: '/politicas',
      en: '/policies'
    },
    '/politicas/aviso-privacidad': {
      es: '/politicas/aviso-privacidad',
      en: '/policies/privacy-policy'
    },
    '/politicas/terminos-condiciones': {
      es: '/politicas/terminos-condiciones',
      en: '/policies/terms-conditions'
    },
    '/politicas/politica-cookies': {
      es: '/politicas/politica-cookies',
      en: '/policies/cookie-policy'
    },
    '/politicas/aviso-legal': {
      es: '/politicas/aviso-legal',
      en: '/policies/legal-disclaimer'
    },
    '/politicas/divulgacion-vulnerabilidades': {
      es: '/politicas/divulgacion-vulnerabilidades',
      en: '/policies/vulnerability-disclosure'
    },
    '/politicas/proteccion-datos': {
      es: '/politicas/proteccion-datos',
      en: '/policies/data-protection'
    },
    '/politicas/politica-calidad': {
      es: '/politicas/politica-calidad',
      en: '/policies/quality-policy'
    },
    '/politicas/politica-ambiental': {
      es: '/politicas/politica-ambiental',
      en: '/policies/environmental-policy'
    }
  }
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);