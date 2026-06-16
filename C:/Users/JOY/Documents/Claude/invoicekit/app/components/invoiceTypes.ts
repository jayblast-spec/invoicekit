export type LineItem = {
  id: string;
  description: string;
  quantity: number;
  rate: number;
};

export type Invoice = {
  number: string;
  date: string;
  dueDate: string;
  fromName: string;
  fromEmail: string;
  fromAddress: string;
  toName: string;
  toEmail: string;
  toAddress: string;
  items: LineItem[];
  taxRate: number;
  notes: string;
  currency: string;
};

export const CURRENCIES = ["USD", "GBP", "EUR", "CAD", "AUD", "NGN"];

export function subtotal(items: LineItem[]): number {
  return items.reduce((s, i) => s + i.quantity * i.rate, 0);
}

export function taxAmount(items: LineItem[], taxRate: number): number {
  return subtotal(items) * (taxRate / 100);
}

export function total(items: LineItem[], taxRate: number): number {
  return subtotal(items) + taxAmount(items, taxRate);
}

export function fmt(amount: number, currency: string): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency, minimumFractionDigits: 2 }).format(amount);
}

export function defaultInvoice(): Invoice {
  return {
    number: `INV-${String(Date.now()).slice(-5)}`,
    date: new Date().toISOString().slice(0, 10),
    dueDate: new Date(Date.now() + 30 * 864e5).toISOString().slice(0, 10),
    fromName: "",
    fromEmail: "",
    fromAddress: "",
    toName: "",
    toEmail: "",
    toAddress: "",
    items: [{ id: "1", description: "", quantity: 1, rate: 0 }],
    taxRate: 0,
    notes: "Thank you for your business.",
    currency: "USD",
  };
}
