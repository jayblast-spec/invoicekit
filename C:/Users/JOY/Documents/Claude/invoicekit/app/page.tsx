"use client";

import { useRef } from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import InvoiceBuilder from "./components/InvoiceBuilder";
import Footer from "./components/Footer";

export default function Home() {
  const buildRef = useRef<HTMLDivElement>(null);

  function scrollToBuild() {
    buildRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main>
      <HeroSection onBuildClick={scrollToBuild} />
      <FeaturesSection />
      <div ref={buildRef} className="scroll-mt-8 pt-8">
        <div className="mx-auto max-w-4xl px-4 mb-10">
          <h2 className="text-xl font-bold text-foreground">
            Build your invoice
          </h2>
          <p className="text-sm text-muted mt-1">
            Fill in the form — the preview updates live. Click &ldquo;Download / Print PDF&rdquo; when ready.
          </p>
        </div>
        <InvoiceBuilder />
      </div>
      <Footer />
    </main>
  );
}
