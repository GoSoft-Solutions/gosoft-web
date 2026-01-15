import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Términos del Servicio | GoSoft Solutions',
  description: 'Términos y condiciones de uso de los servicios de GoSoft Solutions.',
  keywords: 'términos, condiciones, servicio, GoSoft Solutions',
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

export default function TermsOfServicePage() {
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
              Términos del Servicio
            </h1>
          </div>
        </div>
      </div>

      <PolicyNavigation currentPage="terminos-del-servicio" />

      <main className="max-w-5xl mx-auto px-11 py-20">
        <div className="bg-transparent">
          
          <div className="text-gray-600 leading-relaxed">
            
            <h2 className="text-2xl font-semibold text-gray-550 mb-1 text-left">
              TÉRMINOS DEL SERVICIO
            </h2>
            
            <p className="text-gray-600 text-left mb-10 text-base">
              Última actualización: 01 de Enero de 2026
            </p>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-7">
              
              <p className="text-lg font-medium leading-6 text-justify">
                Los siguientes Términos y Condiciones rigen el uso de cada uno de los sitios Web ubicados o vinculados a las URLs https://www.gosoftsolutions.com y los servicios que se pudieran ofrecer en el sitio; la información proporcionada en los sitios y la posibilidad de registrarse en nuestra base de datos, recibir boletines y correos electrónicos promocionales; así como también cualquier enlace relacionado (colectivamente, nuestros "Sitios"). Se ruega leer con atención los siguientes Términos y Condiciones.
              </p>

              <p className="text-lg leading-6 text-justify">
                Al utilizar cualquiera de nuestros Sitios, usted comprende y acepta expresamente estar legalmente obligado por estos Términos y Condiciones y cumplir estos Términos y Condiciones y todas las leyes y regulaciones aplicables que rigen nuestros Sitios.
              </p>

              <p className="text-lg leading-6 text-justify">
                Los Términos y Condiciones sustituirán a los términos o condiciones posteriores incluidos en cualquier orden de compra, independientemente de que dichos términos o condiciones estén o no firmados por GoSoft ("GoSoft", "nosotros" ).
              </p>

              <p className="text-lg leading-6 text-justify">
                Nos reservamos el derecho de cambiar estos Términos y Condiciones en cualquier momento, con vigencia inmediata después de su publicación en nuestros Sitios. Si viola lo estipulado en estos Términos y Condiciones, podemos rescindir su uso de los Sitios, prohibirle el uso futuro de los Sitios y/o tomar las medidas legales apropiadas en su contra.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-8">
                AVISO DE DERECHOS DE AUTOR Y MARCA REGISTRADA
              </h3>

              <p className="text-lg leading-6 text-justify">
                GoSoft tiene los derechos de autor de todo el material disponible en nuestros Sitios, a menos que se indique lo contrario. Todos los derechos están reservados y el contenido no puede reproducirse, descargarse, difundirse ni transferirse, de ninguna forma ni por ningún medio, excepto con el previo consentimiento por escrito de GoSoft o como se indica a continuación.
              </p>

              <p className="text-lg leading-6 text-justify">
                <strong>Uso permitido:</strong> Los usuarios pueden descargar páginas u otro contenido para su propio uso personal en una sola computadora, pero ninguna parte de dicho contenido puede reproducirse, descargarse, difundirse o transferirse de ninguna forma ni por ningún medio, excepto con el acuerdo previo por escrito de GoSoft y con atribución expresa a este. Usted acepta que solo está autorizado para visitar, ver y retener una copia de las páginas de los Sitios para su uso personal, y que no deberá duplicar, descargar, publicar, modificar o distribuir el material de los Sitios para ningún otro propósito que no sea para uso personal, a menos que lo autoricemos específicamente a hacerlo. También acepta no hacer un enlace profundo al sitio para ningún propósito, a menos que lo autoricemos específicamente a hacerlo.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-8">
                AVISO LEGAL GENERAL Y EXONERACIÓN DE RESPONSABILIDAD
              </h3>

              <p className="text-lg leading-6 text-justify">
                Ponemos a disposición nuestros Sitios y la información y servicios contenidos en ellos "en el estado en que se encuentran", y si bien GoSoft hace todo lo posible para presentar información precisa y confiable en nuestros Sitios, GoSoft no respalda, aprueba ni certifica dicha información, ni garantiza la exactitud, integridad, eficacia u actualidad de dicha información. El uso de dicha información es voluntario, y solo se debe confiar en ella después de una revisión independiente realizada por expertos calificados.
              </p>

              <p className="text-lg leading-6 text-justify">
                La referencia contenida aquí a cualquier producto, proceso o servicio comercial específico no constituye ni implica respaldo, recomendación o favoritismo por parte de GoSoft.
              </p>

              <p className="text-lg leading-6 text-justify">
                En ciertos lugares de este sitio, se puede acceder a "enlaces" directos a otros sitios Web. Dichos sitios externos contienen información creada, publicada, mantenida o cargada por instituciones u organizaciones independientes de GoSoft. GoSoft no respalda, aprueba, certifica ni controla estos sitios externos y no garantiza la precisión, integridad, eficacia o actualidad de la información que se encuentra en dichos sitios. El uso de cualquier información obtenida en dichos sitios es voluntario, y solo se debe confiar en ella después de una revisión independiente realizada por expertos calificados.
              </p>

              <p className="text-lg leading-6 text-justify">
                GoSoft no asume ninguna responsabilidad por las consecuencias derivadas del uso de la información contenida aquí, o del uso de la información obtenida en sitios enlazados, o de cualquier aspecto del contenido de dicha información. GoSoft no se hace responsable y renuncia expresamente a toda responsabilidad por daños y perjuicios de cualquier tipo que surjan del uso, referencia, dependencia o confianza en dicha información.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-8">
                POLÍTICA DE PRIVACIDAD
              </h3>

              <p className="text-lg leading-6 text-justify">
                GoSoft valora la privacidad individual y queremos darles a los visitantes de nuestro Sitio la oportunidad de saber qué información recopilamos sobre ellos y cómo la tratamos. Si desea obtener más información, visite nuestra página de política de privacidad.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-8">
                DIVISIBILIDAD
              </h3>

              <p className="text-lg leading-6 text-justify">
                La invalidez o inaplicabilidad de cualquier disposición particular de esta Política no afectará las disposiciones restantes de la misma, y esta Política se interpretará en todos los aspectos como si se hubiera omitido dicha disposición inválida o inaplicable.
              </p>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
