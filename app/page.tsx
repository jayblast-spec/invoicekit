'use client';

import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import InvoiceBuilder from './components/InvoiceBuilder';
import Footer from './components/Footer';

export default function Home() {
  function scrollToBuild() {
    document.getElementById('build')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection onBuildClick={scrollToBuild} />
      <FeaturesSection />
      <InvoiceBuilder />
      <Footer />
    </main>
  );
}
