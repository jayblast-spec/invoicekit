import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'InvoiceKit | Invoice operations',
  description: 'create invoices that look premium, track risk, and get paid faster',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
