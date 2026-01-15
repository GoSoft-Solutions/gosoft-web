import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Política de Cookies | GoSoft Solutions',
  description: 'Política de uso de cookies de GoSoft Solutions.',
  keywords: 'cookies, política, web, GoSoft Solutions',
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

export default function CookiePolicyPage() {
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
              Política de Cookies
            </h1>
          </div>
        </div>
      </div>

      <PolicyNavigation currentPage="politica-cookies" />

      <main className="max-w-5xl mx-auto px-11 py-20">
        <div className="bg-transparent">
          
          <div className="text-gray-600 leading-relaxed">
            
            <h2 className="text-2xl font-semibold text-gray-550 mb-1 text-left">
              POLÍTICA DE COOKIES
            </h2>
            
            <p className="text-gray-600 text-left mb-10 text-base">
              Última actualización: 01 de Enero de 2026
            </p>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-7">
              
              <p className="text-lg leading-6 text-justify">
                Esta política de cookies ("Política de Cookies") describe como Corporativo GoSoft S.A. de C.V. y sus filiales ("GoSoft") utilizan los tipos de cookies, píxeles, objetos de almacenamiento local y dispositivos similares (colectivamente, "cookies" a menos que se indique lo contrario) que utilizamos en el sitio Web de GoSoft y nuestros propósitos para usarlos. La Política de Cookies explica qué son las cookies, los tipos de cookies y por qué GoSoft las necesita, al igual que tu derecho para controlar la manera en como las utilizamos.
              </p>

              <p className="text-lg leading-6 text-justify">
                Si tienes preguntas sobre esta Política de Cookies, comunícate con nosotros al correo <a href="mailto:privacy@gosoftsolutions.com" className="text-sky-500 hover:text-sky-600 font-medium transition-colors">privacy@gosoftsolutions.com</a>.
              </p>

              <p className="text-lg leading-6 text-justify">
                Para obtener una descripción más completa y una lista de las cookies que utilizamos actualmente en el sitio Web de GoSoft, revisa nuestra Lista de Cookies.
              </p>

              <p className="text-lg leading-6 text-justify">
                Para obtener más información sobre nuestras prácticas de privacidad, revisa nuestra política de privacidad: <a href="/politica-de-confidencialidad" className="text-sky-500 hover:text-sky-600 font-medium transition-colors">https://www.gosoftsolutions.com/politica-de-confidencialidad</a>
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                ¿Qué es una Cookie?
              </h3>

              <p className="text-lg leading-6 text-justify">
                Una cookie ("Cookie" o "cookie") es un archivo de texto que se almacena y se recupera de tu ordenador, smartphone y tablet cuando visitas cualquiera de nuestros sitios web y aplicaciones. Estos archivos permiten almacenar y consultar tus preferencias de navegación, haciendo que la interacción con el Sitio Web sea más rápida y fácil.
              </p>

              <p className="text-lg leading-6 text-justify">
                La información recogida por las cookies es anónima y no contiene ninguna información sensible ya que no recogen datos que te puedan identificar personalmente. En cualquier caso, tu puedes acceder a la configuración de tu navegador para modificar y/o bloquear la instalación de las Cookies enviadas desde el Sitio Web, sin que ello impida al acceso a los contenidos.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                ¿Para qué utiliza GoSoft las cookies?
              </h3>

              <p className="text-lg leading-6 text-justify">
                El presente Sitio Web utiliza cookies y otras tecnologías para realizar un seguimiento de las interacciones de los Usuarios con los servicios ofrecidos en el Sitio Web. Las cookies permiten reconocer el navegador de un Usuario, así como el tipo de dispositivo desde el que se accede al Sitio Web, y se utilizan para facilitar la próxima visita del Usuario y hacer que el Sitio Web resulte más útil.
              </p>

              <p className="text-lg leading-6 text-justify">
                Por ejemplo, GoSoft utiliza las cookies para asegurar que el Sitio Web funcione correctamente y conocer su experiencia de navegación, entre otras. En definitiva, el uso de las cookies permite a GoSoft optimizar la navegación del Usuario, adaptando la información y los servicios ofrecidos a sus intereses y preferencias.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-2 mt-12">
                ¿Qué cookies utilizamos?
              </h3>

              <p className="text-lg leading-6 text-justify">
                GoSoft puede usar las siguientes cookies:
              </p>

              <h4 className="text-lg font-semibold text-gray-700 mb-5 mt-6">
                Tipos de cookies
              </h4>

              <ol className="list-decimal pl-10 space-y-2 text-lg">
                <li className="text-justify">
                  Cookies propias y de terceros: Si una cookie es "propia" o "de terceros" se refiere al dominio que coloca la cookie. Las cookies propias son aquellas establecidas por el sitio Web que está siendo visitado por el usuario en ese momento.
                </li>
                <li className="text-justify">
                  Las cookies de terceros son cookies configuradas por un dominio distinto del sitio Web que visita el usuario. Si un usuario visita un sitio Web y otra entidad establece una cookie a través de ese sitio Web, esta sería una cookie de terceros.
                </li>
              </ol>

              <h4 className="text-lg font-semibold text-gray-700 mb-5 mt-6">
                Duración de las cookies
              </h4>

              <ol className="list-decimal pl-10 space-y-2 text-lg">
                <li className="text-justify">
                  Cookies de sesión: Estas cookies permiten a los operadores de sitios Web vincular las acciones de un usuario durante una sesión del navegador. Una sesión del navegador comienza cuando un usuario abre la ventana del navegador y finaliza cuando cierra la ventana del navegador. Las cookies de sesión se crean temporalmente. Una vez que se cierra el navegador, se eliminan todas las cookies de sesión.
                </li>
                <li className="text-justify">
                  Cookies persistentes: Estas cookies permanecen en el dispositivo de un usuario durante el período de tiempo especificado en la cookie. Se activan cada vez que el usuario visita el sitio Web que creó esa cookie en particular.
                </li>
              </ol>

              <p className="text-lg leading-6 text-justify">
                Solo utilizamos los tipos de cookies descritos anteriormente. No utilizamos las llamadas "cookies especializadas". Además, GoSoft utiliza Google Analytics con el único propósito de obtener el informe de la actividad que le brindan.
              </p>

              <div className="text-left my-8">
                <button 
                  className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-5 rounded-full transition-colors duration-200 text-lg"
                  type="button"
                >
                  CONFIGURACIÓN DE COOKIES
                </button>
              </div>

              <p className="text-lg leading-6 text-justify mt-15">
                Aún cuando no mostremos una manera para cancelar las cookies necesarias para el sitio web, tienes la opción de bloquearlas o eliminarlas al cambiar la configuración de tu navegador (en la sección de preferencias del navegador, buscar "cómo cambiar las preferencias de cookies"); toma en cuenta que si deshabilitas las cookies perderás funcionalidades disponibles en los sitios de GoSoft.
              </p>

              <p className="text-lg leading-6 text-justify">
                GoSoft utiliza las cookies con fines de experiencia de usuario, mercadeo y analíticas. No se comparte con terceros sin tu previa autorización por escrito. Solo compartiremos información no identificable con terceros si aceptas las cookies de publicidad y rendimiento.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                ¿Cómo deshabilitar las cookies?
              </h3>

              <p className="text-lg leading-6 text-justify">
                Todos los navegadores permiten hacer cambios para desactivar la configuración de las cookies. Este es el motivo por el que la mayoría de los navegadores ofrecen la posibilidad de administrar las cookies, para obtener un control más preciso sobre la privacidad.
                Estos ajustes se encuentran ubicados en las «opciones» o «preferencias» del menú de su navegador.
              </p>

              <p className="text-lg leading-6 text-justify">
                A continuación, podrá encontrar los links de cada navegador para deshabilitar las cookies siguiendo las instrucciones:
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">Internet Explorer (<a href="https://goo.gl/iU2wh2" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 font-medium transition-colors">https://goo.gl/iU2wh2</a>)</h4> 
                  <ul className="list-disc pl-8 space-y-1 text-lg mb-6">
                    <li className="text-justify">
                      En el menú de herramientas, selecciones "Opciones de Internet".
                    </li>
                    <li className="text-justify">
                      Haga clic en la pestaña de privacidad.
                    </li>
                    <li className="text-justify">
                      Podrá configurar la privacidad con un cursor con seis posiciones que le permite controlar la cantidad de cookies que se instalarán: Bloquear todas las cookies, Alta, Media Alto, Media (nivel por defecto), Baja y Aceptar todas las cookies.
                    </li>  
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">Mozilla Firefox (<a href="https://goo.gl/QXWYmv" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 font-medium transition-colors">https://goo.gl/QXWYmv</a>)</h4>
                  <ul className="list-disc pl-8 space-y-1 text-lg mb-6">
                    <li className="text-justify">
                      En la parte superior de la venta de Firefox hacer clic en el menú Herramientas.
                    </li>
                    <li className="text-justify">
                      Seleccionar Opciones.
                    </li>
                    <li className="text-justify">
                      Seleccionar el panel Privacidad.
                    </li>  
                    <li className="text-justify">
                      En la opción Firefox podrá elegir Usar una configuración personalizada par el historial de para configurar las opciones.
                    </li>  
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">Google Chrome (<a href="http://goo.gl/fQnkSB" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 font-medium transition-colors">http://goo.gl/fQnkSB</a>)</h4>
                  <ul className="list-disc pl-8 space-y-1 text-lg mb-6">
                    <li className="text-justify">
                      Hacer clic en el menú situado en la barra de herramientas.
                    </li>
                    <li className="text-justify">
                      Seleccionar Configuración.
                    </li>
                    <li className="text-justify">
                      Hacer clic en Mostar opciones avanzadas.
                    </li>  
                    <li className="text-justify">
                      En la selección "Privacidad" hacer clic en el botón Configuración de contenido.
                    </li>  
                    <li className="text-justify">
                      En la selección de Cookies, se pueden configurar las opciones.
                    </li> 
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">Safari (<a href="https://goo.gl/dQywEo" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 font-medium transition-colors">https://goo.gl/dQywEo</a>)</h4>
                  <ul className="list-disc pl-8 space-y-1 text-lg">
                    <li className="text-justify">
                      En el menú de configuración seleccione la opción de "Preferencias".
                    </li>
                    <li className="text-justify">
                      Abra la pestaña de privacidad.
                    </li>
                    <li className="text-justify">
                      Seleccione la opción que quiera de la sección de "bloquear cookies".
                    </li>  
                    <li className="text-justify">
                      Recuerde que ciertas funciones y la plena funcionalidad del Sitio Web pueden no estar disponibles después de deshabilitar las cookies.
                    </li>  
                  </ul>
                </div>
              </div>

              <p className="text-lg leading-6 text-justify mt-6">
                Si no desea ser rastreado por las cookies, Google ha desarrollado un complemento para instalar en su navegador al que puede acceder en el siguiente enlace: <a href="http://goo.gl/up4ND" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 font-medium transition-colors">http://goo.gl/up4ND</a>.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                Cookies en los dispositivos móviles
              </h3>

              <p className="text-lg leading-6 text-justify">
                GoSoft también usa cookies y otras tecnologías en dispositivos móviles.
              </p>

              <p className="text-lg leading-6 text-justify">
                Al igual que sucede en los navegadores de ordenadores, los navegadores de los dispositivos móviles permiten realizar cambios en las opciones o ajustes de privacidad para desactivar o eliminar las cookies.
              </p>

              <p className="text-lg leading-6 text-justify">
                Si desea modificar las opciones de privacidad siga las instrucciones especificadas por el desarrollador de su navegador para dispositivo móvil.
              </p>

              <p className="text-lg leading-6 text-justify">
                A continuación, podrá encontrar algunos ejemplos de los links que le guiarán para modificar las opciones de privacidad en su dispositivo móvil:
              </p>

              <ul className="list-disc pl-8 space-y-1 text-lg">
                <li className="text-justify">
                  IOS: <a href="http://goo.gl/61xevS" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 font-medium transition-colors">(http://goo.gl/61xevS)</a>
                </li>
                <li className="text-justify">
                  Windows Phone: <a href="https://goo.gl/tKyb0y" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 font-medium transition-colors">(https://goo.gl/tKyb0y)</a>
                </li>
                <li className="text-justify">
                  Chrome Mobile: <a href="http://goo.gl/XJp7N" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 font-medium transition-colors">(http://goo.gl/XJp7N)</a>
                </li>
                <li className="text-justify">
                  Opera Mobile: <a href="http://goo.gl/Nzr8s7" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 font-medium transition-colors">(http://goo.gl/Nzr8s7)</a>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                Aceptación, configuración o rechazo de cookies
              </h3>

              <p className="text-lg leading-6 text-justify">
                Puede hacer clic en el botón "Configurar" para configurar o rechazar las cookies.
              </p>

              <p className="text-lg leading-6 text-justify">
                Puede hacer clic en el botón "Aceptar todas" para aceptar todas las cookies.
              </p>

              <p className="text-lg leading-6 text-justify">
                Puede hacer clic en el botón "Rechazar todas" para rechazar las cookies de analíticas / performance, funcionales y de publicidad. Solo quedan habilitadas las cookies estrictamente necesarias.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-6 mt-12">
                Más información sobre cookies
              </h3>

              <p className="text-lg leading-6 text-justify">
                Para obtener más información sobre cookies, incluido cómo ver qué cookies se han instalado y cómo administrarlas y eliminarlas, visita <a href="https://aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 font-medium transition-colors">aboutcookies.org</a> o <a href="https://allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 font-medium transition-colors">allaboutcookies.org</a>.
              </p>

              <p className="text-lg leading-6 text-justify">
                Esta política de cookies se modifica regularmente para el cumplimiento de aspectos legales, de regulación y requerimientos operativos.
              </p>

              <p className="text-lg leading-6 text-justify">
                Envíanos un email si hay dudas sobre el uso de las cookies: al correo <a href="mailto:privacy@gosoftsolutions.com" className="text-sky-500 hover:text-sky-600 font-medium transition-colors">privacy@gosoftsolutions.com</a>
              </p>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
