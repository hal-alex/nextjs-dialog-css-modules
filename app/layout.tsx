import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { DialogProvider } from '@/contexts/DialogContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dialog Example',
  description: 'Simple dialog implementation in Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DialogProvider>{children}</DialogProvider>
      </body>
    </html>
  );
}