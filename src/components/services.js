'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FingerPrintIcon,
  RectangleGroupIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/solid';

const services = [
  {
    id: 'it-procurement',
    icon: RectangleGroupIcon,
    title: 'Cybersecurity & IT Equipment Procurement',
    description:
      'We provide top-notch IT equipment solutions for all government agencies, from Federal down to local municipalities. We also provide cybersecurity solutions and custom web solutions.',
    bullets: [
      'IT equipment from major brands including HP, Dell, Netgear & Linksys',
      'Shipping to all 48 contiguous states',
      'Expert support team for all your technical needs',
    ],
    image: '/hardware.jpg',
    imageAlt: 'IT Hardware Equipment',
    imageLeft: true,
  },
  {
    id: 'staffing',
    icon: FingerPrintIcon,
    title: 'Administrative Staffing & Support',
    description:
      'Black Lion Tech provides top-tier administrative staffing and support for departments across federal, state, and local levels. We ensure your staff is well-trained, competent, and fully supported.',
    bullets: [
      'Well-trained and dependable administrative professionals',
      'Local and remote staffing options available',
      'Capable of filling Federal, State, and Local positions',
    ],
    image: '/staff.jpg',
    imageAlt: 'Professional Staffing Team',
    imageLeft: false,
  },
];

const viewport = { once: true, margin: '-80px' };

function ServiceItem({ service }) {
  const { icon: Icon, title, description, bullets, image, imageAlt, imageLeft } =
    service;

  return (
    <div className='grid items-center gap-12 lg:grid-cols-2'>
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.8 }}
        className={!imageLeft ? 'lg:order-2' : ''}
      >
        <div className='relative rounded-2xl overflow-hidden shadow-2xl shadow-navy/15'>
          <Image
            src={image}
            width={600}
            height={450}
            alt={imageAlt}
            className='w-full h-[300px] lg:h-[420px] object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-navy/25 to-transparent' />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.8, delay: 0.15 }}
        className={!imageLeft ? 'lg:order-1' : ''}
      >
        <div className='inline-flex p-3 rounded-xl bg-navy mb-5'>
          <Icon className='w-6 h-6 text-gold' aria-hidden='true' />
        </div>
        <h3 className='text-2xl lg:text-3xl font-bold text-navy mb-4 leading-snug'>
          {title}
        </h3>
        <p className='text-gray-500 leading-relaxed mb-7'>{description}</p>
        <ul className='flex flex-col gap-3'>
          {bullets.map((bullet) => (
            <li key={bullet} className='flex items-start gap-3'>
              <CheckCircleIcon
                className='w-5 h-5 text-gold shrink-0 mt-0.5'
                aria-hidden='true'
              />
              <span className='text-gray-600 text-sm leading-relaxed'>
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export function Services2() {
  return (
    <section className='py-24 px-6 bg-slate-50'>
      {/* Section header */}
      <div className='text-center mb-20 max-w-2xl mx-auto'>
        <div className='flex items-center justify-center gap-3 mb-4'>
          <div className='h-px w-10 bg-gold/60' />
          <span className='text-gold text-xs font-semibold tracking-widest uppercase'>
            What We Offer
          </span>
          <div className='h-px w-10 bg-gold/60' />
        </div>
        <h2 className='text-4xl lg:text-5xl font-bold text-navy mb-4'>
          Our Services
        </h2>
        <p className='text-gray-500 text-lg leading-relaxed'>
          Comprehensive technology solutions and staffing services tailored for
          government agencies at every level.
        </p>
      </div>

      {/* Service items */}
      <div className='max-w-7xl mx-auto flex flex-col gap-24'>
        {services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default Services2;
