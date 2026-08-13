import type { Metadata } from 'next';
import { MotionConfig } from 'framer-motion';
import './globals.css';

export const metadata: Metadata = {
  title: 'InvoiceKit | Invoice operations',
  description: 'create invoices that look premium, track risk, and get paid faster',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
