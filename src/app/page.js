import Image from 'next/image';
import Hero from '../components/hero';
import Footer from '../components/footer';
import ContactSection13 from '../components/contact';

export default function Home() {
  return (
    <main className=''>
      <main>
        <section>
          <h1 className='text-5xl font-bold text-center text-gray-900'>
            TEST
          </h1>
        </section>
        <section>
          <ContactSection13 />
        </section>
      </main>
    </main>
  );
}
