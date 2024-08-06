import './globals.css';
import { Inter } from 'next/font/google';
import Hero from '../components/hero';
import Footer from '../components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Black Lion Tech',
  description:
    'Black Lion Technologies is a pioneering tech company focused on innovating and delivering cutting-edge solutions',
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
