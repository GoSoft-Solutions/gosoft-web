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

      <main className="max-w-5xl mx-auto px-11 py-20">
        <div className="bg-transparent">
          
          <div className="text-gray-600 leading-relaxed">
            
            <h2 className="text-2xl font-semibold text-gray-550 mb-1 text-left">
              POLÍTICA DE CALIDAD
            </h2>
            
            <p className="text-gray-600 text-left mb-10 text-base">
              Última actualización: 01 de Enero de 2026
            </p>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-7">
              
              <p className="text-lg leading-6 text-justify">
                La organización, de cara a la mejora de los procesos y calidad de nuestros productos se responsabiliza y adquiere el firme compromiso 
                de establecer, desarrollar y mejorar continuamente un Sistema de Gestión de Calidad basado en las normas UNE-EN-ISO 9001:2015 
                con el fin de:
              </p>

              <ul className="list-disc pl-8 space-y-2 text-lg">
                <li className="text-justify">
                  Satisfacer las necesidades del cliente, proporcionándoles un servicio de calidad basado en la gestión eficaz de nuestros medios y recursos en los plazos establecidos.
                </li>
                <li className="text-justify">
                  Análisis continuo de la información, tanto propia como la aportada por nuestros clientes, de cara a la prevención de posibles fallos y mejora continua de los procesos.
                </li>
                <li className="text-justify">
                  Nuestra meta es lograr una metodología de trabajo basada en la anticipación, evitar fallos antes de que se produzcan.
                </li>
                <li className="text-justify">
                  Mejorar de forma continua la calidad de nuestros productos y servicios.
                </li>
                <li className="text-justify">
                  Compromiso de cumplir los requisitos legales, reglamentarios y de nuestros clientes que sean establecidos.
                </li>
                <li className="text-justify">
                  Servir como marco de referencia para el establecimiento de objetivos de calidad.
                </li>
              </ul>

              <p className="text-lg leading-6 text-justify">
                La dirección solicita la colaboración de todo el personal para que en el desempeño de sus actividades cumplan el compromiso de calidad participando todos y cada uno de acuerdo con la responsabilidad y autoridad que le corresponde.
              </p>

              <p className="text-lg leading-6 text-justify">
                Para ello, es comunicada a toda la empresa para su conocimiento, comprensión y cumplimiento y está a disposición de toda persona o entidad que lo solicite. Además, se revisa, analizándola y actualizándola para su continua adecuación.
              </p>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
