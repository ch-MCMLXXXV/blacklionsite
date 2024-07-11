import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Black Lion Tech',
  description:
    'Black Lion Technologies is a pioneering tech company focused on innovating and delivering cutting-edge solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
