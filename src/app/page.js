import ContactSection13 from '../components/contact';
import Services2 from '../components/services';
import ContentSection5 from '../components/about';

export default function Home() {
  return (
    <main>
      <section id='about'>
        <ContentSection5 />
      </section>
      <section id='services'>
        <Services2 />
      </section>
      <section id='contact'>
        <ContactSection13 />
      </section>
    </main>
  );
}
