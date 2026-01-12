import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Política de Calidad | GoSoft Solutions',
  description: 'Política de calidad y mejora continua de GoSoft Solutions.',
  keywords: 'calidad, ISO 9001, mejora continua, GoSoft Solutions',
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

export default function QualityPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />
      
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
              Política de Calidad
            </h1>
          </div>
        </div>
      </div>

      <PolicyNavigation currentPage="calidad" />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-transparent">
          <header className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              POLÍTICA DE CALIDAD
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
            <p className="text-lg mb-6">
              En <strong>GoSoft Solutions</strong>, la calidad es el fundamento de todo lo que hacemos. 
              Nos comprometemos a entregar soluciones de software de la más alta calidad que superen 
              las expectativas de nuestros clientes.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Nuestro Compromiso
            </h2>
            <p className="mb-6">
              Implementar un sistema de gestión de calidad basado en estándares internacionales 
              y mejora continua para garantizar la excelencia en todos nuestros procesos y entregables.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Principios de Calidad
            </h2>
            <ul className="mb-6 space-y-2">
              <li>Enfoque en el cliente</li>
              <li>Liderazgo y compromiso</li>
              <li>Participación del personal</li>
              <li>Enfoque por procesos</li>
              <li>Mejora continua</li>
              <li>Toma de decisiones basada en evidencia</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Objetivos de Calidad
            </h2>
            <ul className="mb-6 space-y-2">
              <li>Satisfacción del cliente ≥95%</li>
              <li>Entrega a tiempo ≥98%</li>
              <li>Defectos &lt;1% en producción</li>
              <li>Tiempo de resolución &lt;24h</li>
              <li>Certificaciones actualizadas</li>
              <li>Capacitación continua del equipo</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Procesos de Calidad
            </h2>
            <p className="mb-6">
              Nuestro sistema de gestión de calidad incluye controles rigurosos en cada fase 
              del desarrollo, desde la planificación inicial hasta la entrega final y el soporte 
              post-implementación.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Contacto de Calidad
            </h2>
            <p className="mb-4">
              Para consultas sobre nuestros procesos de calidad:
            </p>
            <p>
              <strong>Email:</strong> quality@gosoftsolutions.com
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
