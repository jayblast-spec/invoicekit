"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function IconBolt() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 2 4 11.5h5L9 18l7-9.5h-5L11 2Z" />
    </svg>
  );
}
function IconPrinter() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5.5 7V3h9v4M5.5 15h9v3h-9v-3Z" />
      <rect x="2.5" y="7" width="15" height="6.5" rx="1.2" />
      <path d="M14.5 10h1" />
    </svg>
  );
}
function IconGlobe() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="7.3" />
      <path d="M2.7 10h14.6M10 2.7c2.4 2 3.7 4.6 3.7 7.3s-1.3 5.3-3.7 7.3c-2.4-2-3.7-4.6-3.7-7.3S7.6 4.7 10 2.7Z" />
    </svg>
  );
}
function IconEdit() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.6 3.4 16.6 7.4 6.8 17.2 2.3 17.7l.5-4.5 9.8-9.8Z" />
      <path d="M10.9 5.1 14.9 9.1" />
    </svg>
  );
}
function IconList() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.5 5h9M7.5 10h9M7.5 15h9" />
      <path d="M3.5 5h.01M3.5 10h.01M3.5 15h.01" />
    </svg>
  );
}
function IconLock() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="9" width="12" height="8.5" rx="1.5" />
      <path d="M6.5 9V6a3.5 3.5 0 0 1 7 0v3" />
    </svg>
  );
}

const FEATURES = [
  {
    icon: IconBolt,
    title: "Instant — no signup",
    body: "Open the page, fill in your details, hit print. No account, no email required. Your data never leaves your browser.",
  },
  {
    icon: IconPrinter,
    title: "PDF in one click",
    body: "Your browser's native print dialog saves a perfect PDF every time. No dependencies, no file uploads, no download fees.",
  },
  {
    icon: IconGlobe,
    title: "All currencies",
    body: "USD, GBP, EUR, CAD, AUD, NGN — switch currencies in a single tap. Professional formatting via Intl.NumberFormat.",
  },
  {
    icon: IconEdit,
    title: "Live preview",
    body: "Every change you make updates the invoice preview in real time. What you see is exactly what your client receives.",
  },
  {
    icon: IconList,
    title: "Multi-line items",
    body: "Add any number of services, products, or phases. Each row calculates its own subtotal. Tax applies to the total.",
  },
  {
    icon: IconLock,
    title: "100% private",
    body: "No server, no database, no analytics tracking your client data. Everything stays local — always.",
  },
];

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="mx-auto max-w-4xl px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Everything you need,{" "}
          <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
            nothing you don&apos;t
          </span>
        </h2>
        <p className="mt-3 text-muted">
          Built for freelancers, consultants, and founders who value their time.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="rounded-2xl border border-border bg-surface p-5 hover:border-accent/40 transition-colors"
          >
            <div className="icon-3d mb-3">
              <f.icon />
            </div>
            <p className="mb-1 font-semibold text-foreground">{f.title}</p>
            <p className="text-sm text-muted leading-relaxed">{f.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
