import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Política de Vulnerabilidad | GoSoft Solutions',
  description: 'Política de divulgación de vulnerabilidades de GoSoft Solutions.',
  keywords: 'vulnerabilidades, seguridad, divulgación responsable, GoSoft Solutions',
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
        <div className="flex md:hidden justify-center">
          <div className="flex items-center gap-1 max-w-full overflow-hidden">
            {policies.slice(0, 3).map((policy, index) => (
              <div key={policy.id} className="flex items-center">
                <Link
                  href={policy.href}
                  className={`
                    text-xs px-2 py-1 rounded text-center transition-none whitespace-nowrap
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

export default function VulnerabilityPolicyPage() {
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
              Política de Vulnerabilidades
            </h1>
          </div>
        </div>
      </div>

      <PolicyNavigation currentPage="vulnerabilidad" />

      <main className="max-w-5xl mx-auto px-11 py-20">
        <div className="bg-transparent">
          
          <div className="text-gray-600 leading-relaxed">
            
            <h2 className="text-2xl font-semibold text-gray-550 mb-1 text-left">
              POLÍTICA DE VULNERABILIDAD
            </h2>
            
            <p className="text-gray-600 text-left mb-10 text-base">
              Última actualización: 01 de Enero de 2026
            </p>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-7">
              
              <p className="text-lg leading-6 text-justify">
                Esta política aborda la divulgación de vulnerabilidades que los "Hackers Éticos", también conocidos como "Hackers de Sombrero Blanco", puedan identificar en los "sitios web" propiedad de GoSoft. Si usted identifica vulnerabilidades en nuestros sitios o aplicaciones, le agradecemos su ayuda informándonos al respecto. El equipo de ciberseguridad de Gosoft validará y corregirá cualquier vulnerabilidad de acuerdo con nuestras políticas. Gosoft se reserva todos sus derechos legales en caso de incumplimiento de las leyes y reglamentos aplicables.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                Compromiso
              </h3>

              <p className="text-lg leading-6 text-justify">
                Si usted hace un esfuerzo de buena fe para cumplir con esta política durante su investigación de seguridad, consideraremos que su investigación está autorizada. Trabajaremos con usted para entender y resolver rápidamente el problema, y Gosoft no recomendará ni emprenderá acciones legales relacionadas con su investigación. En caso de que un tercero inicie acciones legales contra usted por actividades que se llevaron a cabo de acuerdo con esta política, daremos a conocer esta autorización.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                Programa Bug Bounty
              </h3>

              <p className="text-lg leading-6 text-justify">
                Gosoft no cuenta actualmente con un programa de bug bounty.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                Reglas para encontrar vulnerabilidades de seguridad
              </h3>

              <ol className="list-decimal pl-10 space-y-1 text-lg">
                <li className="text-justify">
                  Utilizar únicamente técnicas pertinentes para encontrar o demostrar vulnerabilidades en nuestros sitios web.
                </li>
                <li className="text-justify">
                  No utilice las debilidades descubiertas para otros fines que no sean su propia investigación específica.
                </li>
                <li className="text-justify">
                  Evite la ingeniería social para obtener acceso a un sistema.
                </li>
                <li className="text-justify">
                  No instale backdoors, ni siquiera para demostrar la vulnerabilidad de un sistema. Los backdoors debilitarán la seguridad del sistema.
                </li>
                <li className="text-justify">
                  No modifique ni borre información del sistema. Si necesita copiar información para su investigación, copie sólo lo que necesite.
                </li>
                <li className="text-justify">
                  No manipule el sistema de ninguna manera.
                </li>
                <li className="text-justify">
                  Se puede infiltrar en un sistema sólo si es necesario. No comparta el acceso con otras personas.
                </li>
                <li className="text-justify">
                  Evite las técnicas de fuerza bruta, como la introducción repetida de contraseñas, para acceder a los sistemas.
                </li>
                <li className="text-justify">
                  Evite los ataques de denegación de servicio (DoS) para obtener acceso.
                </li>
                <li className="text-justify">
                  Informe las vulnerabilidades únicamente a Gosoft.
                </li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                Notificación de vulnerabilidades
              </h3>

              <p className="text-lg leading-6 text-justify">
                En el caso de que detecte una vulnerabilidad de seguridad válida para el cumplimiento de este VDP, Gosoft acusará de recibido su informe de vulnerabilidad y, si es necesario, trabajará con usted para entender y validar el problema. Gosoft revisará el envío para determinar si el hallazgo es válido y no ha sido reportado previamente. La divulgación pública de los detalles de la presentación de cualquier vulnerabilidad identificada o supuesta sin el consentimiento expreso por escrito de Gosoft, se considerará que su envío no cumple con este VDP.
              </p>

              <p className="text-lg leading-6 text-justify">
                Por favor, infórmenos sobre sus hallazgos enviando un correo electrónico a <a href="mailto:security@gosoftsolutions.com" className="text-sky-500 hover:text-sky-600 font-medium transition-colors">security@gosoftsolutions.com</a> e incluya el/los sitio(s)/aplicaciones afectadas.
              </p>

              <p className="text-lg leading-6 text-justify">
                Si desea que nos pongamos en contacto con usted, por favor especifique la mejor manera de hacerlo, ya sea por teléfono o por correo electrónico. Gosoft no compartirá su información con nadie ajeno al personal de ciberseguridad que revisará su informe.
              </p>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
