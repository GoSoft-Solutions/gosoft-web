import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export const metadata: Metadata = {
  title: 'Política de Cookies | GoSoft Solutions',
  description: 'Política de uso de cookies y protección de privacidad del usuario en GoSoft Solutions.',
  keywords: 'cookies, privacidad, seguimiento, GoSoft Solutions',
};

function PolicyNavigation({ currentPage }: { currentPage?: string }) {
  const policies = [
    { id: 'politica-de-confidencialidad', title: 'Política de Privacidad', href: '/politica-de-confidencialidad' },
    { id: 'terminos-del-servicio', title: 'Términos del Servicio', href: '/terminos-del-servicio' },
    { id: 'proteccion-datos', title: 'Política de Datos Personales', href: '/politica-de-proteccion-de-datos-personales' },
    { id: 'politica-cookies', title: 'Política de Cookies', href: '/politica-cookies' },
    { id: 'vulnerabilidad', title: 'Política de Vulnerabilidad', href: '/politica-de-vulnerabilidad' },
    { id: 'calidad', title: 'Política de Calidad', href: '/politica-de-calidad' },
    { id: 'ambiental', title: 'Política Ambiental', href: '/politica-de-medio-ambiente' },
  ];

  return (
    <div className="bg-white border-t border-b border-gray-200 py-2">
      <div className="max-w-5xl mx-auto px-3">
        {/* Desktop - Mostrar todas */}
        <div className="hidden md:flex justify-center gap-1">
          {policies.map((policy, index) => (
            <div key={policy.id} className="flex items-center">
              <Link
                href={policy.href}
                className={`
                  text-xs lg:text-sm px-2 py-1 rounded text-center transition-none
                  ${
                    currentPage === policy.id
                      ? 'text-gray-600 cursor-default'
                      : 'text-gray-600 hover:text-blue-600'
                  }
                `}
              >
                {policy.title}
              </Link>
              {index < policies.length - 1 && (
                <div className="h-4 w-px bg-gray-300 mx-1"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Mobile - Con "Ver más" */}
        <div className="md:hidden">
          <div className="flex flex-wrap justify-center gap-1">
            {policies.slice(0, 3).map((policy, index) => (
              <div key={policy.id} className="flex items-center">
                <Link
                  href={policy.href}
                  className={`
                    text-xs px-2 py-1 rounded text-center transition-none
                    ${
                      currentPage === policy.id
                        ? 'text-gray-600 cursor-default'
                        : 'text-gray-600 hover:text-blue-600'
                    }
                  `}
                >
                  {policy.title}
                </Link>
                {index < 2 && (
                  <div className="h-3 w-px bg-gray-300 mx-1"></div>
                )}
              </div>
            ))}
            <div className="relative group">
              <div className="h-3 w-px bg-gray-300 mx-1"></div>
              <button className="text-xs px-2 py-1 rounded text-gray-600 hover:text-blue-600">
                Ver más +
              </button>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white shadow-lg rounded-md border border-gray-200 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible min-w-max">
                <div className="flex flex-col py-2">
                  {policies.slice(3).map((policy) => (
                    <Link
                      key={policy.id}
                      href={policy.href}
                      className={`
                        px-4 py-2 text-xs whitespace-nowrap text-center transition-none
                        ${
                          currentPage === policy.id
                            ? 'text-gray-600 cursor-default'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                        }
                      `}
                    >
                      {policy.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-[450px] bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <Image
          src="/images/image_policies.jpg"
          alt="GoSoft Solutions Office"
          fill
          className="object-cover"
          priority
        />
        
        <div className="relative z-10 flex items-end justify-end pb-24 h-full">
          <div className="text-right text-white px-6 md:px-14">
            <h1 className="text-5xl md:text-7xl font-bold mb-2 text-white">
              Política de Cookies
            </h1>
          </div>
        </div>
        
        <div className="absolute top-6 right-6 z-20">
          <LanguageSwitcher />
        </div>
      </div>

      <PolicyNavigation currentPage="politica-cookies" />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-transparent">
          <header className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              POLÍTICA DE COOKIES
            </h2>
            <p className="text-gray-600">
              Última actualización: {new Date().toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-800">
            <p className="text-lg text-gray-700 mb-6">
              Esta política explica cómo <strong>GoSoft Solutions</strong> utiliza cookies y tecnologías 
              similares en nuestro sitio web para mejorar su experiencia de usuario y proporcionar 
              servicios personalizados.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Cookies Esenciales</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Gestión de sesiones</li>
              <li>Preferencias de seguridad</li>
              <li>Configuración de idioma</li>
              <li>Funcionalidad básica</li>
            </ul>
              
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Cookies Analíticas</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Estadísticas de uso</li>
              <li>Monitoreo del rendimiento</li>
              <li>Seguimiento de errores</li>
              <li>Mejora del sitio</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Cookies de Marketing</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Contenido personalizado</li>
              <li>Optimización publicitaria</li>
              <li>Integración redes sociales</li>
              <li>Preferencias de usuario</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Gestión de Cookies
            </h2>
            <p className="text-gray-700 mb-6">
              Puede controlar y gestionar las cookies a través de la configuración de su navegador. 
              Tenga en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad de 
              nuestro sitio web.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Preferencias de Cookies
            </h2>
            <p className="text-gray-700 mb-4">
              Para gestionar sus preferencias de cookies o consultas:
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> privacy@gosoftsolutions.com
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
