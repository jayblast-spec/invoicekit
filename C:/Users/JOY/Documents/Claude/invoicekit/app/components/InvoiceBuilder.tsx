"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Invoice, LineItem, defaultInvoice, subtotal, taxAmount, total, fmt, CURRENCIES,
} from "./invoiceTypes";

const INPUT = "w-full rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</label>
      {children}
    </div>
  );
}

export default function InvoiceBuilder() {
  const [inv, setInv] = useState<Invoice>(defaultInvoice);
  const [preview, setPreview] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  const upd = (key: keyof Invoice, val: string | number) =>
    setInv((p) => ({ ...p, [key]: val }));

  function addItem() {
    setInv((p) => ({
      ...p,
      items: [...p.items, { id: String(Date.now()), description: "", quantity: 1, rate: 0 }],
    }));
  }

  function updateItem(id: string, key: keyof LineItem, val: string | number) {
    setInv((p) => ({ ...p, items: p.items.map((i) => i.id === id ? { ...i, [key]: val } : i) }));
  }

  function removeItem(id: string) {
    if (inv.items.length === 1) return;
    setInv((p) => ({ ...p, items: p.items.filter((i) => i.id !== id) }));
  }

  function printInvoice() {
    window.print();
  }

  const sub = subtotal(inv.items);
  const tax = taxAmount(inv.items, inv.taxRate);
  const tot = total(inv.items, inv.taxRate);

  return (
    <section id="build" className="mx-auto w-full max-w-4xl px-4 pb-32">
      <div className="grid gap-8 lg:grid-cols-[1fr_1px_1fr]">
        {/* LEFT — Builder form */}
        <div className="flex flex-col gap-6 no-print">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-foreground">Invoice details</h2>
            <div className="flex gap-2">
              <select
                value={inv.currency}
                onChange={(e) => upd("currency", e.target.value)}
                className="rounded-lg border border-border bg-surface px-2 py-1.5 text-xs text-foreground focus:outline-none"
              >
                {CURRENCIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>

          {/* Invoice meta */}
          <div className="grid grid-cols-2 gap-3">
            <Field label="Invoice #">
              <input className={INPUT} value={inv.number} onChange={(e) => upd("number", e.target.value)} />
            </Field>
            <Field label="Date">
              <input className={INPUT} type="date" value={inv.date} onChange={(e) => upd("date", e.target.value)} />
            </Field>
            <Field label="Due date">
              <input className={INPUT} type="date" value={inv.dueDate} onChange={(e) => upd("dueDate", e.target.value)} />
            </Field>
            <Field label="Tax rate %">
              <input className={INPUT} type="number" min={0} max={100} step={0.5} value={inv.taxRate} onChange={(e) => upd("taxRate", parseFloat(e.target.value) || 0)} />
            </Field>
          </div>

          {/* From / To */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">From</p>
              <Field label="Name / Company">
                <input className={INPUT} placeholder="ArkNet Digital" value={inv.fromName} onChange={(e) => upd("fromName", e.target.value)} />
              </Field>
              <Field label="Email">
                <input className={INPUT} type="email" placeholder="you@email.com" value={inv.fromEmail} onChange={(e) => upd("fromEmail", e.target.value)} />
              </Field>
              <Field label="Address">
                <textarea className={INPUT + " resize-none"} rows={2} placeholder="123 Street, City" value={inv.fromAddress} onChange={(e) => upd("fromAddress", e.target.value)} />
              </Field>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Bill To</p>
              <Field label="Name / Company">
                <input className={INPUT} placeholder="Client Name" value={inv.toName} onChange={(e) => upd("toName", e.target.value)} />
              </Field>
              <Field label="Email">
                <input className={INPUT} type="email" placeholder="client@email.com" value={inv.toEmail} onChange={(e) => upd("toEmail", e.target.value)} />
              </Field>
              <Field label="Address">
                <textarea className={INPUT + " resize-none"} rows={2} placeholder="Client address" value={inv.toAddress} onChange={(e) => upd("toAddress", e.target.value)} />
              </Field>
            </div>
          </div>

          {/* Line items */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Line Items</p>
            <div className="grid grid-cols-[1fr_60px_80px_28px] gap-2 text-xs text-muted">
              <span>Description</span><span className="text-center">Qty</span><span className="text-right">Rate</span><span />
            </div>
            <AnimatePresence>
              {inv.items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid grid-cols-[1fr_60px_80px_28px] items-center gap-2"
                >
                  <input className={INPUT} placeholder="Service or product description" value={item.description} onChange={(e) => updateItem(item.id, "description", e.target.value)} />
                  <input className={INPUT + " text-center"} type="number" min={0} step={1} value={item.quantity} onChange={(e) => updateItem(item.id, "quantity", parseFloat(e.target.value) || 0)} />
                  <input className={INPUT + " text-right"} type="number" min={0} step={0.01} value={item.rate} onChange={(e) => updateItem(item.id, "rate", parseFloat(e.target.value) || 0)} />
                  <button onClick={() => removeItem(item.id)} className="flex h-7 w-7 items-center justify-center rounded-lg text-muted hover:text-danger transition-colors text-xs">✕</button>
                </motion.div>
              ))}
            </AnimatePresence>
            <button onClick={addItem} className="mt-1 flex items-center gap-1 text-sm text-accent hover:underline">
              + Add line item
            </button>
          </div>

          {/* Notes */}
          <Field label="Notes / Payment terms">
            <textarea className={INPUT + " resize-none"} rows={2} value={inv.notes} onChange={(e) => upd("notes", e.target.value)} />
          </Field>

          {/* Totals summary */}
          <div className="rounded-xl border border-border bg-surface p-4 text-sm">
            <div className="flex justify-between text-muted"><span>Subtotal</span><span className="font-mono">{fmt(sub, inv.currency)}</span></div>
            {inv.taxRate > 0 && <div className="flex justify-between text-muted mt-1"><span>Tax ({inv.taxRate}%)</span><span className="font-mono">{fmt(tax, inv.currency)}</span></div>}
            <div className="mt-2 flex justify-between border-t border-border pt-2 font-bold text-foreground"><span>Total</span><span className="font-mono text-accent">{fmt(tot, inv.currency)}</span></div>
          </div>

          <button
            onClick={printInvoice}
            className="flex items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-semibold text-background hover:opacity-90 active:scale-[0.99] transition-all"
          >
            ⬇ Download / Print PDF
          </button>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-border" />

        {/* RIGHT — Live preview (also what prints) */}
        <div ref={printRef} className="invoice-print rounded-2xl border border-border bg-white p-8 text-[#111] shadow-xl print:shadow-none print:border-0 print:rounded-none">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <p className="text-2xl font-bold text-[#111]">{inv.fromName || "Your Company"}</p>
              <p className="text-sm text-gray-500 mt-0.5">{inv.fromEmail}</p>
              <p className="text-xs text-gray-400 mt-0.5 whitespace-pre-wrap">{inv.fromAddress}</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-black text-[#00c896] tracking-tight">INVOICE</p>
              <p className="text-sm font-mono text-gray-500 mt-1">{inv.number}</p>
            </div>
          </div>

          {/* Dates + bill to */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Bill To</p>
              <p className="text-sm font-semibold text-[#111]">{inv.toName || "Client Name"}</p>
              <p className="text-xs text-gray-500">{inv.toEmail}</p>
              <p className="text-xs text-gray-400 whitespace-pre-wrap">{inv.toAddress}</p>
            </div>
            <div className="text-right">
              <div className="mb-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Date</p>
                <p className="text-sm text-[#111]">{inv.date}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Due Date</p>
                <p className="text-sm text-[#111]">{inv.dueDate}</p>
              </div>
            </div>
          </div>

          {/* Items table */}
          <table className="w-full text-sm mb-6">
            <thead>
              <tr className="border-b-2 border-[#00c896]">
                <th className="pb-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Description</th>
                <th className="pb-2 text-center text-xs font-semibold uppercase tracking-wide text-gray-500 w-16">Qty</th>
                <th className="pb-2 text-right text-xs font-semibold uppercase tracking-wide text-gray-500 w-24">Rate</th>
                <th className="pb-2 text-right text-xs font-semibold uppercase tracking-wide text-gray-500 w-24">Amount</th>
              </tr>
            </thead>
            <tbody>
              {inv.items.map((item, i) => (
                <tr key={item.id} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="py-2 px-1 text-[#111]">{item.description || "—"}</td>
                  <td className="py-2 px-1 text-center text-gray-600">{item.quantity}</td>
                  <td className="py-2 px-1 text-right font-mono text-gray-600">{fmt(item.rate, inv.currency)}</td>
                  <td className="py-2 px-1 text-right font-mono font-semibold text-[#111]">{fmt(item.quantity * item.rate, inv.currency)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <div className="ml-auto w-56">
            <div className="flex justify-between text-sm text-gray-500 mb-1"><span>Subtotal</span><span className="font-mono">{fmt(sub, inv.currency)}</span></div>
            {inv.taxRate > 0 && <div className="flex justify-between text-sm text-gray-500 mb-1"><span>Tax ({inv.taxRate}%)</span><span className="font-mono">{fmt(tax, inv.currency)}</span></div>}
            <div className="flex justify-between border-t-2 border-[#00c896] pt-2 font-bold text-lg text-[#111]">
              <span>Total</span>
              <span className="font-mono text-[#00c896]">{fmt(tot, inv.currency)}</span>
            </div>
          </div>

          {/* Notes */}
          {inv.notes && (
            <div className="mt-8 rounded-lg bg-gray-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Notes</p>
              <p className="text-xs text-gray-600">{inv.notes}</p>
            </div>
          )}

          <p className="mt-8 text-center text-[10px] text-gray-300">Created with InvoiceKit · arknetdigital.com</p>
        </div>
      </div>
    </section>
  );
}
