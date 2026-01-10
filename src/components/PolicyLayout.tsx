import React from 'react';

interface PolicyLayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

export default function PolicyLayout({ children, currentPage }: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Navigation will be imported and used in individual pages */}
      <main className="flex-1 lg:ml-80">
        <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}