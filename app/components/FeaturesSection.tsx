"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FEATURES = [
  {
    icon: "⚡",
    title: "Instant — no signup",
    body: "Open the page, fill in your details, hit print. No account, no email required. Your data never leaves your browser.",
  },
  {
    icon: "🖨",
    title: "PDF in one click",
    body: "Your browser's native print dialog saves a perfect PDF every time. No dependencies, no file uploads, no download fees.",
  },
  {
    icon: "🌍",
    title: "All currencies",
    body: "USD, GBP, EUR, CAD, AUD, NGN — switch currencies in a single tap. Professional formatting via Intl.NumberFormat.",
  },
  {
    icon: "✏️",
    title: "Live preview",
    body: "Every change you make updates the invoice preview in real time. What you see is exactly what your client receives.",
  },
  {
    icon: "📋",
    title: "Multi-line items",
    body: "Add any number of services, products, or phases. Each row calculates its own subtotal. Tax applies to the total.",
  },
  {
    icon: "🔒",
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
            <div className="mb-3 text-2xl">{f.icon}</div>
            <p className="mb-1 font-semibold text-foreground">{f.title}</p>
            <p className="text-sm text-muted leading-relaxed">{f.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
