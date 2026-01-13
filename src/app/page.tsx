'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import Link from 'next/link';

export default function Home() {
  const handleEmailClick = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const email = 'gosoftsolutions25@gmail.com';
    const subject = 'Consulta sobre servicios - Empezar con GoSoft';
    
    if (isMobile) {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    } else {
      window.open(`https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(subject)}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Header flotante */}
      <Header />
      
      {/* Fondo principal */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fondo_home.svg"
          alt="GoSoft Solutions Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen">
        
        {/* Título principal - Posicionado absolutamente */}
        <div className="absolute left-24 top-1/2 transform -translate-y-1/2 max-w-3xl mt-10">
          <h1 className="text-white text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <div className="flex items-center space-x-4">
              <span>CONSULTORÍA,</span>
              <span>DISEÑO,</span>
            </div>
            <span className="block">AUTOMATIZACIÓN</span>
            <span className="block">E INGENIERÍA DE</span>
            <span className="block">SOFTWARE</span>
          </h1>
          
          {/* Subtítulo */}
          <p className="text-white text-4xl font-light leading-relaxed mt-12">
            More than technology, an experience.
          </p>
        </div>

        {/* Iconos sociales - Parte superior derecha */}
        <div className="absolute right-12 top-70 flex flex-col space-y-4">
          
          {/* Teléfono */}
          <Link 
            href="https://wa.me/message/WAXOLDPJ7UTBA1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block hover:scale-110 transition-transform duration-200"
          >
            <Image 
              src="/icons/whatsapp_home.svg"
              alt="Teléfono"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </Link>
          
          {/* Email */}
          <button 
            onClick={handleEmailClick}
            className="block hover:scale-110 transition-transform duration-200"
          >
            <Image 
              src="/icons/email_home.svg"
              alt="Email"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </button>
          
          {/* Instagram */}
          <Link 
            href="https://www.instagram.com/gosoftmx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block hover:scale-110 transition-transform duration-200"
          >
            <Image 
              src="/icons/ig_home.svg"
              alt="Instagram"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </Link>
          
          {/* LinkedIn */}
          <Link 
            href="https://www.linkedin.com/company/gosoftmx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block hover:scale-110 transition-transform duration-200 ml-0.5"
          >
            <Image 
              src="/icons/linkedin_home.svg"
              alt="LinkedIn"
              width={28}
              height={28}
              className="w-6.5 h-7"
            />
          </Link>
          
        </div>

        {/* Texto inferior derecho */}
        <div className="absolute bottom-8 right-6">
          
          {/* Contenedor flex para texto e imagen lado a lado */}
          <div className="flex items-end space-x-2">
            
            {/* Texto descriptivo al lado izquierdo */}
            <div className="text-right mb-0">
              <h3 className="text-gray-800 text-lg font-bold mb-0">
                Descubre el poder de GoSoft
              </h3>
              <p className="text-gray-600 text-1xl leading-relaxed">
                Tecnología, diseño y desarrollo<br />
                pensados para escalar contigo
              </p>
            </div>
            
            {/* Imagen "Más" al lado derecho y más abajo */}
            <div className="flex items-end">
              <Image 
                src="/icons/more_home.svg"
                alt="Más información"
                width={70}
                height={160}
                className="w-24 h-62"
              />
            </div>
            
          </div>
          
        </div>

      </div>
    </div>
  );
}
