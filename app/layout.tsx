import { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Gem Commerce',
  description:
    'Gem Commerce is a leading provider of high-quality dog food products. We offer a wide range of dog food products that are made with the highest quality ingredients. Our products are made to meet the nutritional needs of our customers. We also offer a wide range of accessories to go with your dog food products. We are committed to providing our customers with the best possible products and services. We are also committed to providing our customers with the best possible products and services. We are also committed to providing our customers with the best possible products and services.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} antialiased`}>{children}</body>
    </html>
  );
}
