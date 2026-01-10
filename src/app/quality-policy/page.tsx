import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export const metadata: Metadata = {
  title: 'Quality Policy | GoSoft Solutions',
  description: 'Quality policy and continuous improvement at GoSoft Solutions.',
  keywords: 'quality, ISO 9001, continuous improvement, GoSoft Solutions',
};

function PolicyNavigation({ currentPage }: { currentPage?: string }) {
  const policies = [
    { id: 'privacy-policy', title: 'Privacy Policy', href: '/privacy-policy' },
    { id: 'terms-and-conditions', title: 'Terms of Service', href: '/terms-and-conditions' },
    { id: 'personal-data-protection-policy', title: 'Personal Data Policy', href: '/personal-data-protection-policy' },
    { id: 'cookie-policy', title: 'Cookie Policy', href: '/cookie-policy' },
    { id: 'vulnerability-disclosure-policy', title: 'Vulnerability Policy', href: '/vulnerability-disclosure-policy' },
    { id: 'quality-policy', title: 'Quality Policy', href: '/quality-policy' },
    { id: 'environmental-policy', title: 'Environmental Policy', href: '/environmental-policy' },
  ];

  return (
    <div className="bg-white border-t border-b border-gray-200 py-2">
      <div className="max-w-5xl mx-auto px-3">
        {/* Desktop - Show all */}
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
        
        {/* Mobile - With "See more" */}
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
                More +
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

export default function QualityPolicyPageEN() {
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
              Quality Policy
            </h1>
          </div>
        </div>
        
        <div className="absolute top-6 right-6 z-20">
          <LanguageSwitcher />
        </div>
      </div>

      <PolicyNavigation currentPage="quality-policy" />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-transparent">
          <header className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              QUALITY POLICY
            </h2>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-800">
            <p className="text-lg text-gray-700 mb-6">
              At <strong>GoSoft Solutions</strong>, quality is the foundation of everything we do. 
              We are committed to delivering software solutions of the highest quality that exceed 
              our clients' expectations.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Our Commitment
            </h2>
            <p className="text-gray-700 mb-8">
              Implement a quality management system based on international standards and 
              continuous improvement to ensure excellence in all our processes and deliverables.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Quality Principles</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Customer focus</li>
              <li>Leadership and commitment</li>
              <li>Personnel engagement</li>
              <li>Process approach</li>
              <li>Continuous improvement</li>
              <li>Evidence-based decision making</li>
            </ul>
              
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Quality Objectives</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Customer satisfaction ≥95%</li>
              <li>On-time delivery ≥98%</li>
              <li>Production defects &lt;1%</li>
              <li>Resolution time &lt;24h</li>
              <li>Updated certifications</li>
              <li>Continuous team training</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Quality Processes
            </h2>
            <div className="space-y-4 text-gray-700 mb-6">
              <p>
                Our quality management system includes rigorous controls at every phase 
                of development, from initial planning to final delivery and post-implementation support.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Quality Contact
            </h2>
            <p className="text-gray-700 mb-4">
              For inquiries about our quality processes:
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> quality@gosoftsolutions.com
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
