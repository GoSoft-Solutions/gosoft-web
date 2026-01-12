import Image from 'next/image';
import { Metadata } from 'next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export const metadata: Metadata = {
  title: 'GoSoft Solutions',
  description: 'Sitio web próximamente. GoSoft Solutions - Empresa líder en desarrollo de software y soluciones tecnológicas.',
  keywords: 'desarrollo software, tecnología, GoSoft Solutions, aplicaciones web, aplicaciones móviles',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="absolute top-6 right-6 z-20">
        <LanguageSwitcher />
      </div>
      
      <div className="relative h-screen w-full">
        <Image
          src="/images/image_careers.jpg"
          alt="GoSoft Solutions"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              GoSoft
              <span className="text-blue-400"> Solutions</span>
            </h1>
            <p className="text-2xl md:text-3xl font-light">
              Próximamente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
