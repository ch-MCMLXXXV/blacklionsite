import './globals.css';
import { Inter } from 'next/font/google';
import Hero from '../components/hero';
import Footer from '../components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title:
    'Black Lion Tech | Affordable IT Solutions for Consumers,Businesses & Federal Institutions',
  description:
    'Offering IT procurement and cybersecurity solutions for both consumers, businesses & federal institutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='flex flex-col min-h-screen'>
        <Hero />
        <main className='flex-grow '>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
