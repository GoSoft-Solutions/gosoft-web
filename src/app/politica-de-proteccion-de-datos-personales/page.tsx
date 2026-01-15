import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Política de Protección de Datos Personales | GoSoft Solutions',
  description: 'Política de protección de datos personales de GoSoft Solutions.',
  keywords: 'protección, datos personales, política, GoSoft Solutions, LOPD',
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

export default function PrivacyPolicyPage() {
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
              Política de Datos Personales
            </h1>
          </div>
        </div>
      </div>

      <PolicyNavigation currentPage="proteccion-datos" />

      <main className="max-w-5xl mx-auto px-11 py-20">
        <div className="bg-transparent">
          
          <div className="text-gray-600 leading-relaxed">
            
            <h2 className="text-2xl font-semibold text-gray-550 mb-1 text-left">
              POLÍTICA CORPORATIVA DE PROTECCIÓN DE DATOS PERSONALES
            </h2>
            
            <p className="text-gray-600 text-left mb-10 text-base">
              Última actualización: 01 de Enero de 2026
            </p>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-7">
              
              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-10">
                1. Introducción.
              </h3>

              <p className="text-lg leading-6 text-justify">
                GoSoft respeta los derechos y las libertades fundamentales de las personas, entre los que se encuentra el derecho a la protección de sus datos personales, y se compromete a proteger la privacidad de sus clientes, empleados y socios comerciales, y el tratamiento de sus datos personales. Con este fin y como parte de su responsabilidad corporativa, GoSoft llevará a cabo todas sus actividades de acuerdo con las normativas de protección de datos de carácter personal en todos los puntos en los que opera.
              </p>

              <p className="text-lg leading-6 text-justify">
                Como organización global que opera en numerosos proyectos, GoSoft necesita garantizar que la información, incluidos los datos personales, son tratados de forma segura en todas las sociedades, grupos, filiales y/o subsidiarias de GoSoft, con un nivel de protección adecuado y uniforme, para lo cual establece pautas comunes de comportamiento que se definen en esta política.
              </p>

              <p className="text-lg leading-6 text-justify">
                La finalidad de esta Política Corporativa de Protección de Datos Personales es establecer los principios y pautas comunes y generales de actuación que deben regir en todas las entidades relacionadas con GoSoft en materia de protección de datos personales, garantizando, en todo caso, el cumplimiento de la legislación aplicable.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                2. Alcance.
              </h3>

              <p className="text-lg leading-6 text-justify">
                Esta Política es de aplicación, en todas las sociedades que integran GoSoft, en las sociedades participadas no integradas en el grupo sobre las que GoSoft tiene un control efectivo, dentro de los límites legalmente establecidos, así como a todas las personas que se relacionen con las entidades pertenecientes al grupo. En aquellas sociedades participadas en las que esta Política no sea de aplicación, GoSoft promoverá, el alineamiento de esta política con las de dichas sociedades. Además, esta Política es también aplicable, en lo que proceda, a las "joint ventures", uniones temporales de empresas y otras asociaciones equivalentes, cuando GoSoft asuma su gestión.
              </p>

              <p className="text-lg leading-6 text-justify">
                Sin perjuicio de lo dispuesto en el párrafo anterior, las sociedades de GoSoft, al amparo de su propio marco de autonomía, podrán establecer una política equivalente, que deberá ser conforme con los principios recopilados en esta Política.
              </p>

              <p className="text-lg leading-6 text-justify">
                La Política de Protección de Datos Personales aplica a todos los departamentos, áreas operacionales, así como a sus administradores, directivos, empleados, y a todas las personas que se relacionen con las entidades pertenecientes a GoSoft, y debe ser conocida y cumplida por todos los miembros del grupo.
              </p>

              <p className="text-lg leading-6 text-justify">
                Esta política de protección de datos personales se aplica a todos los tratamientos de datos realizados por GoSoft en sus relaciones con sus empleados, exempleados, contactos, solicitantes de empleo, clientes, potenciales clientes, proveedores, así como en las prestaciones de los servicios que GoSoft facilita a terceras empresas y organizaciones y que suponen un acceso y tratamiento de datos por cuenta de terceros.
              </p>

              <p className="text-lg leading-6 text-justify">
                Todas las personas vinculadas con GoSoft promoverán que los principios recopilados en esta política sean tenidos en cuenta (i) en el diseño e implementación de todos los procedimientos que impliquen el tratamiento de datos personales, (ii) en los productos y servicios ofrecidos por estas, (iii) en todos los contratos y obligaciones que formalicen con personas físicas y (iv) en la implantación de cuantos sistemas y plataformas permitan el acceso por parte de los profesionales de GoSoft o de terceros a datos personales y a su recopilación o tratamiento.
              </p>

              <p className="text-lg leading-6 text-justify">
                 Esta política abarca todo el ciclo de vida de los datos personales: Generación o captura, recolección de datos, mantenimiento y procesamiento de datos, uso de los datos, intercambio de datos, archivo de datos y destrucción de los datos. Esta Política no se aplica al procesamiento de datos anónimos (por ejemplo, información que incluye nombres aleatorios sin identificar directa o indirectamente a una persona real).
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                3. Referencias.
              </h3>

              <ul className="list-disc pl-8 space-y-2 text-lg">
                <li className="text-justify">
                  <strong>LFPDPPP (MX):</strong> La 'Ley Federal de Protección de Datos Personales en Posesión de Particulares', es un cuerpo normativo de México, aprobado por el Congreso de la Unión el 27 de abril de 2010, mismo que tiene como objetivo regular el derecho a la autodeterminación informativa.
                </li>
                <li className="text-justify">
                  <strong>Política de Seguridad de la Información:</strong> Es el documento aprobado por la dirección, en la que se recoge el compromiso de esta con garantizar la seguridad de la información y se establecen las medidas y controles que adoptará la empresa para asegurar la confidencialidad, integridad, disponibilidad y privacidad de la información.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                4. Aplicación de la Política.
              </h3>

              <p className="text-lg leading-6 text-justify">
                La Oficina de Seguridad de la Información, en conjunto con los Servicios Jurídicos, desarrollarán y mantendrán actualizada la Política Corporativa de Protección de Datos Personales, que se implementará por la citada Oficina.
              </p>

              <p className="text-lg leading-6 text-justify">
                Igualmente, la Oficina de Seguridad de la Información y los Servicios Jurídicos establecerán procedimientos internos de carácter local que desarrollen los principios recopilados en esta Política y que concreten su contenido en función de la ley aplicable en sus respectivas jurisdicciones.
              </p>

              <p className="text-lg leading-6 text-justify">
                Igualmente, la Oficina de Seguridad de la Información y los Servicios Jurídicos establecerán procedimientos internos de carácter local que desarrollen los principios recopilados en esta Política y que concreten su contenido en función de la ley aplicable en sus respectivas jurisdicciones.
              </p>

              <p className="text-lg leading-6 text-justify">
                La Dirección de Servicios Jurídicos será responsable de reportar a la Oficina de Seguridad de la Información los desarrollos y novedades normativas que se produzcan en el ámbito de la protección de datos personales.
              </p>

              <p className="text-lg leading-6 text-justify">
                Los Comités de Seguridad Locales u órganos equivalentes junto con los responsables de Infraestructura Tecnológica (TI) serán los encargados de implementar en los sistemas de información de las sociedades del grupo, los controles y desarrollos informáticos que sean adecuados para garantizar el cumplimiento de la normativa interna de gestión global de la protección de datos y velará por que dichos desarrollos estén actualizados en cada momento.
              </p>

              <p className="text-lg leading-6 text-justify">
                Adicionalmente, las sociedades de GoSoft deberán: (i) designar, a las personas responsables de los datos (Responsable Local de Privacidad de Datos Personales), que actuarán coordinadamente con la Oficina de Seguridad de la Información; y (ii) coordinar con la Oficina de Seguridad de la Información cualquier actividad que implique o conlleve la gestión de datos personales, respetando en todo caso el marco de autonomía de las sociedades.
              </p>

              <p className="text-lg leading-6 text-justify">
                Corresponde al área de Auditorías supervisar el cumplimiento y la eficacia de lo dispuesto en esta Política por parte de cada Sociedad del Grupo. Lo anterior se entenderá, en todo caso, sin perjuicio de las responsabilidades que correspondan a otros órganos y direcciones de la Sociedad y, en su caso, a los órganos de administración y de dirección de las sociedades de GoSoft. Para verificar el cumplimiento de esta Política se realizarán auditorías de seguridad de la información, con auditores internos y/o externos, y otros controles.
              </p>

              <p className="text-lg leading-6 text-justify">
                La Oficina de Seguridad de la Información revisará y evaluará, al menos una vez al año, esta Política y mantendrá informados a los Comités de Seguridad Locales u órganos equivalentes acerca de riesgos eventos o incidentes que se puedan llegar a presentar relacionados con la privacidad de la información o algún incumplimiento relacionado a esta Política, asimismo impartirá contenidos de educación y conciencia en materia de Protección de Datos Personales.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                5. Responsables de Privacidad de Datos Personales.
              </h3>

              <p className="text-lg leading-6 text-justify">
                El Responsable Corporativo de Privacidad de Datos Personales tiene la responsabilidad de garantizar que GoSoft cumpla con todas las normas de protección de datos locales e internacionales aplicables. Es además el responsable de definir y actualizar la Política Corporativa de Protección de Datos Personales y de velar por su cumplimiento.
              </p>

              <p className="text-lg leading-6 text-justify">
                El Responsable Corporativo de Privacidad de Datos, según ha sido designado por el Comité Ejecutivo de Seguridad, es el director de la Oficina de Seguridad de la Información.
              </p>

              <p className="text-lg leading-6 text-justify">
                Cada sociedad del grupo GoSoft deberá designar, a personas responsables de la seguridad de los datos de carácter personal en su sociedad o localización (Responsables Locales de Privacidad de Datos Personales), que actuarán coordinadamente con la Oficina de Seguridad de la Información y definirán los canales de comunicación con las sociedades a su cargo, según la normativa local, para que los titulares de los datos que lo requieran puedan contactar con ellos para ejercer sus derechos.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                6. Principios del tratamiento de Datos Personales.
              </h3>

              <p className="text-lg leading-6 text-justify">
                Cualquier actividad dentro del ciclo de vida de los datos de carácter personal que pueda ser realizada por GoSoft, tanto para actividades de tratamiento dentro de los diferentes procesos de negocio, para la administración y gestión de personal, la gestión económica, contable y fiscal, acciones comerciales y de marketing y comunicación, así como la gestión de clientes, proveedores y potenciales clientes que se realiza en GoSoft, serán realizadas conforme a los siguientes principios generales de tratamiento de los datos personales:
              </p>

              <ul className="list-disc pl-8 space-y-3 text-lg">
                <li className="text-justify">
                  <strong>Principio de licitud, equidad y transparencia:</strong> Los datos personales recopilados serán tratados de manera lícita, justa y transparente. Solo se solicitará la información que se requiera, indicando claramente los usos y finalidades del tratamiento que se planea realizar, durante el tratamiento dichos datos personales solo se utilizarán para los fines para los que se han recopilado.
                </li>
                <li className="text-justify">
                  <strong>Principio de limitación de finalidad:</strong> Los datos personales recopilados serán únicamente utilizados para fines específicos, explícitos y legítimos, y no serán tratados posteriormente de forma incompatible con dichos fines.
                </li>
                <li className="text-justify">
                  <strong>Principio de minimización de datos:</strong> Los datos recopilados serán aquellos estrictamente necesarios en el cumplimiento de las finalidades para las que se requieran.
                </li>
                <li className="text-justify">
                  <strong>Principio de precisión:</strong> Los datos personales recopilados deben mantenerse completos, correctos y actualizados. Los datos serán actualizados cada vez que el titular lo solicite o por tener conocimiento directo de la desactualización de un dato específico.
                </li>
                <li className="text-justify">
                  <strong>Principio de limitación de almacenamiento:</strong> Los datos personales se almacenarán durante los plazos legales aplicables a cada actividad de tratamiento realizada.
                </li>
                <li className="text-justify">
                  <strong>Principio de integridad y confidencialidad:</strong> Los datos personales recopilados deben estar sujetos a medidas técnicas, organizativas y de seguridad para garantizar que nuestras actividades comerciales, información, documentación y procesos en los que se utilicen estén protegidos contra el acceso no autorizado o ilegal, pérdida, destrucción o daño accidental.
                </li>
                <li className="text-justify">
                  <strong>Principio de legitimidad de la fuente:</strong> Los datos personales recopilados no deberán ser obtenidos de fuentes ilegítimas, de fuentes que no garanticen su procedencia o de fuentes cuyos datos hayan sido recabados o cedidos contraviniendo la ley.
                </li>
                <li className="text-justify">
                  <strong>Principio de responsabilidad proactiva:</strong> Se establecerán las medidas técnicas y organizativas de privacidad desde el diseño y por defecto, adecuadas para velar por el cumplimiento de la legislación de datos personales y se asegurará la trazabilidad de los procesos de toma de decisiones relativos a sus tratamientos.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                7. Derechos de los titulares de los datos.
              </h3>

              <p className="text-lg leading-6 text-justify">
                Las sociedades del Grupo deberán permitir que los interesados puedan ejercitar los derechos que se apliquen en cada localización, estableciendo, a tal efecto, los procedimientos internos que resulten necesarios para satisfacer, al menos, los requisitos legales aplicables en cada caso. GoSoft se compromete a respetar además al menos los siguientes derechos:
              </p>

              <ul className="list-disc pl-8 space-y-3 text-lg">
                <li className="text-justify">
                  <strong>Derecho de acceso:</strong> Derecho del titular de los datos a obtener información sobre si se están procesando sus propios datos personales, las categorías de datos que se procesan, la finalidad del tratamiento, información disponible sobre el origen de los datos cuando los datos no hayan sido recibidos originalmente del interesado, plazo de conservación de los datos y cualesquiera comunicaciones realizadas o previstas de realizar.
                </li>
                <li className="text-justify">
                  <strong>Derecho de Rectificación:</strong> Derecho del titular de los datos a corregir o modificar cualquier dato personal que se compruebe que es inexacto o incompleto. La solicitud del solicitante deberá indicar a qué datos se refiere y la corrección que debe realizarse. Deberá incluir, cuando sea necesario, la documentación que justifique la inexactitud o incompletitud de los datos objeto de tratamiento.
                </li>
                <li className="text-justify">
                  <strong>Derecho de supresión:</strong> Derecho del titular a suprimir sus datos cuando los datos personales no son necesarios para el tratamiento que se realiza o cuando los datos personales de los titulares hayan sido tratados ilícitamente por GoSoft.
                </li>
                <li className="text-justify">
                  <strong>Derecho a la limitación del tratamiento:</strong> Derecho del titular de los datos a limitar el tratamiento de los datos de GoSoft cuando el titular impugna la exactitud de sus datos personales o cuando el tratamiento sea ilícito.
                </li>
                <li className="text-justify">
                  <strong>Derecho a la portabilidad de los datos:</strong> Derecho del titular de los datos a recibir los datos facilitados, en un formato estructurado y de uso común, datos que se han obtenido con consentimiento expreso o en un contrato, y de los que se realiza el tratamiento por medios automatizados. Además, el titular podrá autorizar que los datos sean transmitidos directamente a otra parte, si ello fuera técnicamente posible.
                </li>
                <li className="text-justify">
                  <strong>Derecho a no ser objeto de una decisión basada únicamente en un tratamiento automatizado:</strong> Derecho del titular de los datos a no ser objeto de una decisión, con efectos jurídicos, basada únicamente en el tratamiento automatizado, incluida la elaboración de perfiles.
                </li>
                <li className="text-justify">
                  <strong>Derecho a oponerse al tratamiento de datos:</strong> Derecho del titular a evitar el tratamiento de sus datos personales o a cesar en el supuesto de que no será necesario el consentimiento para el tratamiento por ser la base legitimadora el interés legítimo, o cuando los datos se utilicen para marketing directo.
                </li>
                <li className="text-justify">
                  <strong>Derecho al olvido:</strong> Derecho del titular de los datos a solicitar la supresión de sus datos hechos públicos por GoSoft y a borrar cualquier enlace a los mismos. Este derecho supone que los datos han sido publicados en internet, redes sociales, blogs y/o comentarios.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                8. Finalidades del tratamiento de datos personales.
              </h3>

              <p className="text-lg leading-6 text-justify">
                La recopilación, procesamiento y uso de datos personales dentro de GoSoft sólo está permitido para las siguientes finalidades:
              </p>

              <h4 className="text-lg font-semibold text-gray-700 mb-6 mt-10 pl-8">
                8.1 Tratamiento de datos de clientes para una relación contractual.
              </h4>

              <p className="text-lg leading-6 text-justify pl-8">
                Los datos personales de nuestros potenciales clientes, clientes, socios y proveedores pueden ser tratados únicamente para establecer una relación comercial o contractual, gestionarla en el tiempo, ejecutar o cumplir obligaciones contractuales, fiscales y/o contables, así como resolver un contrato.
              </p>

              <p className="text-lg leading-6 text-justify pl-8">
                Así, los datos personales podrán ser tratados para:
              </p>

              <ul className="list-disc pl-18 space-y-3 text-lg">
                <li className="text-justify">
                  <strong>Realizar un seguimiento de las actividades de preventa y venta:</strong> Con el fin de mejorar los procedimientos de atención de los usuarios y actualizar el catálogo de productos y servicios, entendiendo la forma en que el usuario interactúa con GoSoft, así como detectando su grado de satisfacción.
                </li>
                <li className="text-justify">
                  <strong>Para preparar ofertas o pedidos:</strong> Para remitir información comercial, sobre las actividades, productos y servicios, así como para tener una comunicación fluida con nuestros clientes y poder dar la mejor oferta o servicio.
                </li>
                <li className="text-justify">
                  <strong>Para enviar información comercial:</strong> Identificar a las personas que representan al cliente o que intervienen como contacto a los efectos de la contratación. Este tratamiento solo es aplicable en el caso del que el cliente sea una persona jurídica.
                </li>
                <li className="text-justify">
                  <strong>Para la ejecución de contratos con proveedores y clientes:</strong> Existen una serie de tratamientos que son necesarios para la ejecución y desarrollo de las relaciones contractuales. Sin estos tratamientos de datos personales para estas finalidades, no serían posibles la existencia de dichas relaciones contractual porque es inherente a la misma. Desarrollar, controlar y mantener la relación contractual, gestionar la firma incluso a través de plataformas de firma electrónica incluyendo la emisión de certificado de firma electrónica, realizar y gestionar las transacciones que se hayan contratado, contacto, facturación, gestión de cobros y deudas, servicios de atención al cliente (incluso con la posibilidad de grabar las llamadas telefónicas), enviar información no comercial relacionada con el contrato y gestionar las reclamaciones, solicitudes, sugerencias y atención ante posibles incidentes.
                </li>
                <li className="text-justify">
                  <strong>Para el cumplimiento de obligaciones legales:</strong> Los datos de los clientes pueden ser tratados según la base legítima del tratamiento. En ocasiones, la base que legitima el tratamiento es el cumplimiento de obligaciones contractuales o el cumplimiento de una obligación legal, como es el caso del tratamiento de datos con fines contables y fiscales; en otros casos, el tratamiento estará legitimado únicamente en base al consentimiento. En tales casos antes de que el cliente o potencial cliente consienta, deberá ser informado según la política de privacidad y protección de datos. La declaración de consentimiento deberá obtenerse electrónicamente o por escrito a efectos de gestión, conservación y trazabilidad del consentimiento. En algunas circunstancias, como en las conversaciones telefónicas, el consentimiento se puede dar verbalmente. En estos casos GoSoft recomienda el uso de sistemas de grabación de llamadas.
                </li>
                <li className="text-justify">
                  <strong>Tratamientos de interés general:</strong> Estos Tratamientos son necesarios para cumplir con una misión realizada en interés público. En concreto, son Tratamientos dirigidos a garantizar condiciones de seguridad y evitar la comisión de actos ilícitos. Como pueden ser: Captar imágenes a través de cámaras de seguridad para fines de seguridad de las instalaciones y otras acciones de seguridad o Gestionar denuncias o investigaciones internas por vulneración por el Interesado de la normativa interna o el Código de Ética, lo que implica la gestión del expediente y la consulta a las áreas que sean precisas para ello.
                </li>
                <li className="text-justify">
                  <strong>Para fines publicitarios y de marketing/comunicación:</strong> Con el fin de en mantener la relación con el cliente dando de alta nuevos productos, mejorando las condiciones de los productos y / o servicios que ha contratado y ofreciéndole información sobre productos y/o servicios análogos que pueden ser interesantes para el cliente.
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-700 mb-6 mt-10 pl-8">
                8.2 Tratamiento de datos de clientes para la satisfacción de intereses legítimos de GoSoft.
              </h4>

              <ul className="list-disc pl-18 space-y-3 text-lg">
                <li className="text-justify">
                  Los Datos Personales también pueden ser objeto de procesamiento si es necesario para satisfacer los intereses legítimos de GoSoft. Los intereses legítimos son generalmente de naturaleza jurídica (es decir, cobro o recuperación de cantidades adeudadas) o de encuestas de satisfacción para la mejora de productos y servicios.
                </li>
                <li className="text-justify">
                  Archivo Histórico: conservar un archivo de las actividades de cara a posibles responsabilidades o cómo memoria histórica durante el tiempo que defina la ley.
                </li>
                <li className="text-justify">
                  Decisiones individuales automatizadas. Se trata del procesamiento de datos realizado de forma automatizada, utilizado para evaluar ciertos aspectos (por ejemplo, la solvencia), este tipo de procesamiento de datos debe ser comunicado al interesado.
                </li>
                <li className="text-justify">
                  Tratamiento de datos derivados de los accesos y visitas a un Sitio Web. Si en sitios web o aplicaciones se recopilan, procesan y utilizan datos personales, los interesados deberán ser informados de estas finalidades en una declaración de privacidad y, en su caso, en una política de uso de cookies. Esta información debe ser fácilmente identificable, directamente accesible y constantemente disponible para los interesados.
                </li>
              </ul>

              <p className="text-lg leading-6 text-justify pl-8">
                Si se crean perfiles de seguimiento para evaluar el uso de sitios web y aplicaciones, siempre se debe informar a los interesados. El seguimiento sólo podrá realizarse si lo permite la legislación del país o el consentimiento del interesado.
              </p>

              <h4 className="text-lg font-semibold text-gray-700 mb-6 mt-10 pl-8">
                8.3 Tratamiento de datos de empleados, ex-empleados y candidatos.
              </h4>

              <p className="text-lg leading-6 text-justify pl-8">
                En GoSoft realizamos diversos tratamientos de datos derivados de la relación con nuestros empleados, así, utilizamos datos personales para:
              </p>

              <ul className="list-disc pl-18 space-y-3 text-lg">
                <li className="text-justify">
                  Gestión de contratación y “onboarding”.
                </li>
                <li className="text-justify">
                  Identificación dentro de la organización y otorgamiento de acceso a instalaciones y sistemas de información.
                </li>
                <li className="text-justify">
                  La asignación de recursos de trabajo, tales como equipos de cómputo, correo electrónico, aplicaciones, teléfonos, otros recursos.
                </li>
                <li className="text-justify">
                  Gestión y seguimiento de relaciones laborales por parte del departamento de recursos humanos, tales como vacaciones y permisos.
                </li>
                <li className="text-justify">
                  Pago de sueldos y compensaciones, anticipos de nómina, gastos, retenciones, subvenciones, prestaciones y otras retribuciones en especie.
                </li>
              </ul>

              <p className="text-lg leading-6 text-justify pl-8">
                También podemos procesar datos de empleados dentro de la dirección corporativa de GoSoft, de acuerdo con las autorizaciones otorgadas por las autoridades nacionales en materia de transferencias internacionales y protección de datos personales.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                9. Tratamiento de datos por cuenta del cliente en la prestación de servicios de GoSoft.
              </h3>

              <p className="text-lg leading-6 text-justify">
                El tratamiento de datos en nombre y por cuenta del CLIENTE significa que GoSoft ha sido contratado para la prestación de un servicio que puede implicar el acceso y tratamiento de datos personales. En estos casos, el acceso a los datos deberá limitarse al servicio prestado al CLIENTE, siguiendo las instrucciones proporcionadas por el mismo CLIENTE y suscribiendo previamente al inicio del servicio el modelo de contrato de acceso a datos para terceros, definido por el Servicio Jurídico y validado por el Responsable Local de Privacidad de Datos.
              </p>

              <p className="text-lg leading-6 text-justify">
                Durante la prestación de los servicios que impliquen o puedan implicar acceso a datos que son responsabilidad del cliente, todo el personal de GoSoft encargado de esta prestación de servicios y los recursos de GoSoft que sean utilizados para la misma mencionada prestación de servicios, estarán sujetos a los siguientes principios:
              </p>

              <ul className="list-disc pl-8 space-y-3 text-lg">
                <li className="text-justify">
                  Los datos no se sacarán del entorno del CLIENTE salvo que esté estipulado en el contrato o se notifique por escrito por parte del CLIENTE, en cuyo caso prevalecerá lo definido por el mismo.
                </li>
                <li className="text-justify">
                  Los datos únicamente serán tratados según las instrucciones dadas por el CLIENTE y para la correcta prestación de los servicios contratados por el CLIENTE a GoSoft.
                </li>
                <li className="text-justify">
                  Los datos personales no serán utilizados para ninguna otra finalidad que la de prestar el servicio.
                </li>
                <li className="text-justify">
                  En el caso de subcontratación de servicios, la subcontratación se regulará de conformidad con las autorizaciones otorgadas por el CLIENTE.
                </li>
                <li className="text-justify">
                  Se implementarán medidas de seguridad en los dispositivos y recursos para garantizar la seguridad de los datos personales para evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos de exposición, ya sean de origen humano, acción o de riesgos ambientales.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                10. Tratamiento de datos personales responsabilidad de GoSoft por parte de proveedores de servicios.
              </h3>

              <p className="text-lg leading-6 text-justify">
                En caso de contratar proveedores externos para el tratamiento de datos personales responsabilidad de GoSoft, se deberán seguir los lineamientos establecidos en la presente Política, así como cualesquiera instrucciones o directivas que para tal efecto proporcione el Servicio Jurídico o por el Responsable Local de Privacidad de Datos.
              </p>

              <ul className="list-disc pl-8 space-y-3 text-lg">
                <li className="text-justify">
                  El área o departamento responsable de cualquier dato que pueda incluir datos personales, enviados para su procesamiento a un proveedor externo, notificará a la Oficina se Seguridad de la Información (security@gosoftsolutions.com) o al área que determine la Oficina de Seguridad de la Información, la identidad del proveedor del servicio, tipo de servicio, categorías de datos o información a las que el proveedor tener acceso, tecnología y cualquier otra consideración.
                </li>
                <li className="text-justify">
                  Se suscribirá un contrato/anexo/anexo que regula el acceso y tratamiento de datos para la prestación del servicio entre GoSoft y el prestador.
                </li>
                <li className="text-justify">
                  El prestador de Tratamiento de Datos únicamente podrá acceder y tratar los datos, siguiendo las instrucciones de GoSoft.
                </li>
                <li className="text-justify">
                  El proveedor del tratamiento de datos estará obligado a presentar información sobre su capacidad para cubrir las necesidades técnicas y organizativas requeridas por el servicio contratado. Se debe considerar la protección.
                </li>
                <li className="text-justify">
                  Antes de iniciar cualquier tratamiento de datos, el Proveedor de Servicios deberá compartir cualquier documentación que acredite la adopción de medidas de seguridad, técnicas y organizativas, sobre los procesos, procedimientos, aplicaciones y personas que accederán y procesarán la información de GoSoft.
                </li>
                <li className="text-justify">
                  En el caso de que el tratamiento de datos sea realizado por subcontratistas, el prestador está obligado a suscribir contratos de tratamiento de datos con dichos subcontratistas basados en cláusulas contractuales estándar definidas por el área legal de GoSoft para el tratamiento de datos personales.
                </li>
                <li className="text-justify">
                  Al finalizar los servicios contratados, el proveedor deberá seguir las instrucciones de GoSoft para la devolución de los datos que aún se encuentren en las instalaciones del proveedor, certificando por escrito la devolución total de los datos.
                </li>
                <li className="text-justify">
                  Se establecerán obligaciones contractuales y responsabilidades por violaciones de datos por parte del proveedor, asumiendo expresamente toda responsabilidad ante los titulares de los datos y ante las Autoridades de Control.
                </li>
                <li className="text-justify">
                  GoSoft podrá solicitar evidencias al proveedor de cumplimiento de las políticas de protección de datos personales.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                11. Obligaciones generales de los empleados en relación con el tratamiento de datos personales.
              </h3>

              <p className="text-lg leading-6 text-justify">
                Los datos personales se clasifican como restringidos. Queda prohibida cualquier recopilación, tratamiento o uso no autorizado de los datos por parte de los empleados. Queda prohibido cualquier tratamiento de datos realizado por un empleado, que no haya sido autorizado a ejercer como parte de sus deberes y funciones laborales.
              </p>

              <p className="text-lg leading-6 text-justify">
                Los empleados autorizados podrán tener acceso a la información, datos y documentación necesarios para el cumplimiento y desarrollo de sus funciones laborales dentro de GoSoft. Por ello, nuestra organización ha implementado medidas y recursos para la implementación de roles y responsabilidades de los usuarios.
              </p>

              <p className="text-lg leading-6 text-justify">
                Los empleados tienen prohibido utilizar datos personales para fines particulares o comerciales, revelarlos a personas no autorizadas o ponerlos a disposición de cualquier otra manera.
              </p>

              <p className="text-lg leading-6 text-justify">
                La Política Corporativa de Protección de Datos Personales de GoSoft debe estar publicada y disponible para todos los empleados y debe informarse a todos los empleados de la obligación de proteger el secreto de los datos, obligación que permanecerá vigente incluso después de que el empleado haya terminado su relación con GoSoft si las leyes locales lo permiten.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                12. Transmisión de Datos Personales.
              </h3>

              <p className="text-lg leading-6 text-justify">
                Con carácter general, GoSoft no cederá los datos de los Interesados, salvo en los siguientes supuestos:
              </p>

              <ul className="list-disc pl-8 space-y-3 text-lg">
                <li className="text-justify">
                  A autoridades y organismos competentes, juzgados, tribunales o cualesquiera otros terceros legitimados conforme a la normativa aplicable. Si la transmisión de datos es necesaria para el cumplimiento de una obligación legal o contractual, la unidad organizativa que realiza el tratamiento real de los datos solicitará asistencia al Responsable Local de Privacidad de Datos Personales para apoyo para llevar a cabo las acciones y adoptar los procedimientos adecuados.
                </li>
                <li className="text-justify">
                  A terceros titulares de documentos comunes para el cumplimiento de obligaciones dinerarias, cuando el cliente incurra en un impago, y concurran intereses legítimos.
                </li>
                <li className="text-justify">
                  Asimismo, también es posible que terceros, proveedores de GoSoft, tengan acceso a los datos personales de los interesados para prestar servicios a GoSoft, (empresas que operan en los siguientes sectores: tecnológico, asesoramiento jurídico, agencias de marketing, servicios informáticos, realización de pagos, gestores administrativos para control de solvencia, etc.). Estos proveedores sólo accederán a los Datos personales para llevar a cabo sus servicios en nombre y por cuenta de GoSoft, bajo obligación de confidencialidad y siguiendo siempre sus instrucciones y sin que en ningún momento puedan utilizar dichos datos para fines propios y/o finalidades no autorizadas.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                13. Seguridad.
              </h3>

              <p className="text-lg leading-6 text-justify">
                Los datos personales deben protegerse contra todo acceso no autorizado, tratamiento ilícito o divulgación no autorizada, así como contra pérdida, modificación o destrucción accidental. Esto se aplica independientemente de si los datos se procesan electrónicamente o en medios físicos.
              </p>

              <p className="text-lg leading-6 text-justify">
                Ante la introducción de nuevos métodos de procesamiento de datos en GoSoft, el Responsable Local de Privacidad de Datos, junto con la Oficina de Seguridad de la Información y el área de Tecnologías de la Información, definirán y documentarán el proceso a realizar, sus características y medidas de seguridad para proteger los datos personales. Estas medidas deben basarse en la tecnología actual, los posibles riesgos de procesamiento y los requisitos de protección de datos (según lo definido por el estándar de clasificación de datos de GoSoft).
              </p>

              <p className="text-lg leading-6 text-justify">
                Las medidas técnicas y organizativas para proteger los datos personales forman parte de la Oficina de Seguridad de la Información de GoSoft y deben ajustarse continuamente a los desarrollos tecnológicos y cambios organizativos.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                14. Incidencias en materia de protección de datos.
              </h3>

              <p className="text-lg leading-6 text-justify">
                Todos los empleados deben informar inmediatamente a su líder y al Responsable Local de Privacidad de Datos sobre los casos de violación de la presente política, así como dar de alta el incidente o evento de seguridad, dependiendo del caso, en la herramienta corporativa HELP.
              </p>

              <p className="text-lg leading-6 text-justify">
                Los incidentes relacionados con Privacidad de Datos deben ser comunicados y documentados inmediatamente, siguiendo la Gestión de Incidentes de Seguridad de la Información de GoSoft, para que se puedan cumplir las obligaciones de reporte bajo la legislación local a la Autoridad de Control en el plazo estipulado por las leyes aplicables.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                15. Responsabilidades.
              </h3>

              <p className="text-lg leading-6 text-justify">
                La Dirección de GoSoft es responsable de los tratamientos de datos realizados en su área de responsabilidad, por lo que está obligada a garantizar que se cumplen los requisitos legales y los contenidos definidos en la Política Corporativa de Protección de Datos Personales.
              </p>

              <p className="text-lg leading-6 text-justify">
                El equipo directivo es responsable de garantizar que la organización, los recursos humanos y técnicos, disponen de los controles adecuados para garantizar que el tratamiento de los datos se realiza de conformidad con esta Política Corporativa de Protección de Datos Personales.
              </p>

              <p className="text-lg leading-6 text-justify">
                Cualquier departamento o área responsable del desarrollo de procesos y proyectos que involucren la recolección de datos personales, deberá compartir este proceso con el Responsable Local de Privacidad de Datos para su revisión y aprobación. Para que se procese cualquier dato personal, se debe considerar la privacidad y cualquier otra obligación para con GoSoft desde el diseño inicial, incluida una evaluación inicial de los riesgos para los derechos de los propietarios de datos individuales antes de que se procese cualquier dato.
              </p>

              <p className="text-lg leading-6 text-justify">
                Si las operaciones de tratamiento de la información conllevan la recopilación y tratamiento de datos especialmente sensibles, se realizará una evaluación de riesgos adicional por parte del Responsable Local de Privacidad de Datos, donde se analizarán: los riesgos derivados del tratamiento y cumplimiento de los datos y las medidas de seguridad que deben adoptarse para minimizar los riesgos que puedan derivarse del tratamiento de estas categorías de datos.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                16. Contacto para ejercicio de derechos.
              </h3>

              <p className="text-lg leading-6 text-justify">
                Para ejercer cualquiera de los derechos mencionados en esta política o realizar consultas sobre el tratamiento de sus datos personales, puede contactarnos en: <a href="mailto:privacy@gosoftsolutions.com" className="text-sky-500 hover:text-sky-600 font-medium transition-colors">privacy@gosoftsolutions.com</a>
              </p>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
