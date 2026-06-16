"use client";

import { motion } from "framer-motion";

export default function HeroSection({ onBuildClick }: { onBuildClick: () => void }) {
  return (
    <section className="emerald-bg line-grid relative flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-accent/8 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex max-w-3xl flex-col items-center gap-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-4 py-1.5 text-xs font-semibold text-accent-2"
        >
          <span>◈</span> No signup · No backend · Instant PDF
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          Professional invoices
          <br />
          <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
            in 30 seconds
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="max-w-xl text-base text-muted sm:text-lg"
        >
          Fill in your details, add line items, apply tax. Get a client-ready invoice you can print
          or save as PDF — right in your browser. Zero data leaves your device.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-3 sm:flex-row"
        >
          <button
            onClick={onBuildClick}
            className="rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-background hover:opacity-90 active:scale-95 transition-all"
          >
            Build your invoice →
          </button>
          <span className="text-xs text-muted">Works offline · Data stays on your device</span>
        </motion.div>

        {/* Invoice preview chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-4 w-full max-w-xs rounded-2xl border border-border bg-surface p-4 text-left shadow-2xl"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold text-foreground">INVOICE</span>
            <span className="text-xs text-accent font-semibold">#INV-00001</span>
          </div>
          <div className="space-y-1 text-xs text-muted">
            <div className="flex justify-between"><span>Web Design</span><span>$2,400</span></div>
            <div className="flex justify-between"><span>Brand Strategy</span><span>$800</span></div>
            <div className="border-t border-border mt-2 pt-2 flex justify-between font-semibold text-foreground">
              <span>Total</span><span className="text-accent">$3,200.00</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted"
      >
        <span className="text-xs">Build yours</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.4 }} className="h-4 w-px bg-muted/50" />
      </motion.div>
    </section>
  );
}
