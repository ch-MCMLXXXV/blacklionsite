import Image from 'next/image';
import Hero from '../components/hero';
import Footer from '../components/footer';
import ContactSection13 from '../components/contact';
import Services2 from '../components/services';
import ContentSection3 from '../components/about';
import Link from 'next/link';

export default function Home() {
  return (
    <main className=''>
      <section className=''>
        <a id='about'>
          <h1 className='p-8 text-5xl font-bold text-center text-gray-900 bg-blue-gray-50'>
            About Us
          </h1>
        </a>

        <ContentSection3 />
      </section>
      <section className='mt-4 '>
        <a id='services'>
          <h1 className='p-8 text-5xl font-bold text-center text-gray-900 bg-blue-gray-50'>
            What We Offer
          </h1>
        </a>

        <Services2 />
      </section>
      <section>
        <a id='contact'>
          <h1 className='p-8 text-5xl font-bold text-center text-gray-900 bg-blue-gray-50'>
            {' '}
            Contact
          </h1>
        </a>

        <ContactSection13 />
      </section>
    </main>
  );
}
