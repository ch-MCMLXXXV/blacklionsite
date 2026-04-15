import './globals.css';
import { Inter } from 'next/font/google';
import Hero from '../components/hero';
import Footer from '../components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Black Lion Technologies | IT Solutions for Government Agencies',
  description:
    'Premier IT equipment procurement, cybersecurity solutions, and administrative staffing services for Federal, State, and Local government agencies. Based in Birmingham, AL.',
  openGraph: {
    title: 'Black Lion Technologies | IT Solutions for Government Agencies',
    description:
      'Premier IT equipment procurement, cybersecurity solutions, and administrative staffing services for Federal, State, and Local government agencies.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Black Lion Technologies',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Hero />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
