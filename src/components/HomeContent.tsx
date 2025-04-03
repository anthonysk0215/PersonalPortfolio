import React from 'react';

export default function HomeContent() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-200 mb-4">Welcome to My Personal Website</h1>
        <p className="text-xl text-gray-600 mb-8">
          I'm a software engineer...
        </p>
      </section>
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-blue-200 mb-4">Links and info?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{/* Add project cards here */}</div>
      </section>
    </main>
  );
} 