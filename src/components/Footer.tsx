'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap lg:flex-nowrap">
          {/* Logo y descripción - ANCHO: cambia w-X */}
          <div className="w-full lg:w-105 space-y-6 pr-20">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Image
                  src="/icons/gosftfooter_icon.svg"
                  alt="GoSoft Logo"
                  width={279}
                  height={40}
                  className="rounded"
                />
              </div>
            </div>

            <div style={{ maxWidth: '280px' }}>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creamos experiencias digitales para marcas y empresas, mediante el uso de la tecnología.
              </p>
            </div>

            {/* Iconos de contacto y redes sociales */}
            <div className="flex space-x-17 mt-9 items-start">
              {/* Sección Síguenos */}
              <div>
                <h5 className="text-gray-500 font-medium text-xs uppercase tracking-wider mb-2">Síguenos</h5>
                <div className="flex space-x-3 items-center">
                  <Link href="https://www.instagram.com/gosoftmx" className="block" target="_blank" rel="noopener noreferrer"
                        style={{ marginRight: '15px' }}>
                    <Image
                      src="/icons/ig_icon.svg"
                      alt="Instagram"
                      width={30.3}
                      height={30.3}
                      className="hover:opacity-80 transition-opacity"
                    />
                  </Link>
                  <Link href="https://www.linkedin.com/company/gosoftmx" className="block" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/icons/linkedin_icon.svg"
                      alt="LinkedIn"
                      width={28}
                      height={28}
                      className="hover:opacity-80 transition-opacity"
                    />
                  </Link>
                </div>
              </div>

              {/* Sección Contáctanos */}
              <div>
                <h5 className="text-gray-500 font-medium text-xs uppercase tracking-wider mb-2">Contáctanos</h5>
                <div className="flex">
                  {/* WhatsApp - POSICIÓN: cambia marginTop y marginRight */}
                  <Link href="https://wa.me/message/WAXOLDPJ7UTBA1" className="block" target="_blank" rel="noopener noreferrer"
                        style={{ marginTop: '-2.5px', marginRight: '9px' }}>
                    <Image
                      src="/icons/whatsapp_icon.svg"
                      alt="WhatsApp"
                      width={34}
                      height={34}
                      className="hover:opacity-80 transition-opacity"
                    />
                  </Link>
                  {/* Email - POSICIÓN: cambia marginTop independiente */}
                  <Link
                    href="#"
                    className="block"
                    style={{ marginTop: '-5.5px' }}
                    onClick={(e) => {
                      e.preventDefault();
                      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                      const email = 'gosoftsolutions25@gmail.com';
                      const subject = 'Consulta sobre servicios - Empezar con GoSoft';

                      if (isMobile) {
                        // En móvil: intentar abrir app nativa de Gmail
                        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
                      } else {
                        // En desktop: abrir Gmail web
                        window.open(`https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(subject)}`, '_blank');
                      }
                    }}
                  >
                    <Image
                      src="/icons/email_icon.svg"
                      alt="Email"
                      width={40}
                      height={40}
                      className="hover:opacity-80 transition-opacity"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Clientes - ESPACIO: cambia pr-X */}
          <div className="w-42 space-y-6 pr-0">
            <h4 className="text-gray-500 font-medium text-sm uppercase tracking-wider">Clientes</h4>
            <ul className="space-y-4 flex-1">
              <li>
                <Link href="https://portal.gosoftsolutions.com" className="text-gray-600 hover:text-sky-500 text-sm transition-colors" target="_blank" rel="noopener noreferrer">
                  Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-sky-500 text-sm transition-colors">
                  Soporte
                </Link>
              </li>
              <li>
                <Link href="/clientes" className="text-gray-600 hover:text-sky-500 text-sm transition-colors">
                  Clientes
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna Compañía - ESPACIO: cambia pr-X */}
          <div className="w-59 space-y-6 pr-12">
            <h4 className="text-gray-500 font-medium text-sm uppercase tracking-wider">GoSoft</h4>
            <ul className="space-y-4 flex-1">
              <li>
                <Link href="/nosotros" className="text-gray-600 hover:text-sky-500 text-sm transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/industrias" className="text-gray-600 hover:text-sky-500 text-sm transition-colors">
                  Industrias
                </Link>
              </li>
              <li>
                <Link href="https://gosoftsolutions.com/careers" className="text-gray-600 hover:text-sky-500 text-sm transition-colors" target="_blank" rel="noopener noreferrer">
                  Trabaja en GoSoft
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-600 hover:text-sky-500 text-sm transition-colors">
                  Servicios & Soluciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna Legal - ESPACIO: cambia pr-X */}
          <div className="w-69 space-y-6 pr-6">
            <h4 className="text-gray-500 font-medium text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4 flex-1">
              <li>
                <Link href="/politica-cookies" className="text-gray-600 hover:text-sky-500 text-sm transition-colors">
                  Política de cookies
                </Link>
              </li>
              <li>
                <Link href="/terminos-del-servicio" className="text-gray-600 hover:text-sky-500 text-sm transition-colors">
                  Términos del servicio
                </Link>
              </li>
              <li>
                <Link href="/politica-de-confidencialidad" className="text-gray-600 hover:text-sky-500 text-sm transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/politica-de-vulnerabilidad" className="text-gray-600 hover:text-sky-500 text-sm transition-colors">
                  Política de vulnerabilidad
                </Link>
              </li>
              <li>
                <Link href="/politica-de-proteccion-de-datos-personales" className="text-gray-600 hover:text-sky-500 text-sm transition-colors">
                  Política de datos personales
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna Adicional - SIN ESPACIO */}
          <div className="w-40 space-y-6">
            <h4 className="text-gray-500 font-medium text-sm uppercase tracking-wider">Adicional</h4>
            <ul className="space-y-4 flex-1">
              <li>
                <Link href="#" className="text-gray-600 hover:text-sky-500 text-sm transition-colors">
                  Sala de prensa
                </Link>
              </li>
              <li>
                <Link href="https://calendar.gosoftsolutions.com" className="text-gray-600 hover:text-sky-500 text-sm transition-colors" target="_blank" rel="noopener noreferrer">
                  Agenda una reunión
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-600 hover:text-sky-500 text-sm transition-colors">
                  Comienza con nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-sky-500 text-sm transition-colors">
                  Preferencias de cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisora y copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © 2026 GoSoft S.A. de C.V. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;