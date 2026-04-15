'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';

const highlights = [
  {
    icon: ComputerDesktopIcon,
    title: 'IT Procurement',
    desc: 'Top-tier equipment from HP, Dell, Netgear, Linksys, and more — delivered to all 48 contiguous states.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Cybersecurity',
    desc: 'Robust security solutions and custom web development to protect and modernize agency infrastructure.',
  },
  {
    icon: UserGroupIcon,
    title: 'Staffing',
    desc: 'Trained administrative professionals placed locally or remotely across Federal, State, and Local agencies.',
  },
];

const viewport = { once: true, margin: '-60px' };

export function ContentSection5() {
  return (
    <section className='py-24 px-6 bg-white'>
      <div className='max-w-7xl mx-auto'>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
          className='text-center mb-16'
        >
          <div className='flex items-center justify-center gap-3 mb-4'>
            <div className='h-px w-10 bg-gold/60' />
            <span className='text-gold text-xs font-semibold tracking-widest uppercase'>
              About Us
            </span>
            <div className='h-px w-10 bg-gold/60' />
          </div>
          <h2 className='text-4xl lg:text-5xl font-bold text-navy'>
            Who We Are
          </h2>
        </motion.div>

        {/* Main content */}
        <div className='grid items-center gap-16 lg:grid-cols-2 mb-20'>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8 }}
          >
            <p className='text-lg text-gray-600 leading-relaxed mb-6'>
              Black Lion Technologies LLC is a premier provider of IT equipment
              procurement, cybersecurity solutions, and specialized staffing
              services. With a deep understanding of the ever-evolving
              technology landscape, we deliver top-tier solutions that meet the
              unique needs of our government clients.
            </p>
            <p className='text-lg text-gray-600 leading-relaxed mb-10'>
              Located in Birmingham, AL, we proudly serve Federal, State, and
              local municipal governments across the nation. Our team ensures
              every project — from sourcing the latest technology to
              implementing robust cybersecurity measures — is handled with
              professionalism and meticulous attention to detail.
            </p>
            <a
              href='#contact'
              className='inline-flex items-center px-7 py-3.5 rounded-full bg-navy text-white font-semibold text-sm tracking-widest uppercase hover:bg-navy-light transition-all duration-200 shadow-lg shadow-navy/20'
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Logo graphic */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.15 }}
            className='flex justify-center'
          >
            <div className='relative'>
              <div className='w-72 h-72 rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center shadow-2xl shadow-navy/30'>
                <Image
                  src='/BLT Icon.png'
                  width={200}
                  height={200}
                  alt='Black Lion Technologies Logo'
                  className='object-contain'
                />
              </div>
              <div className='absolute -inset-3 rounded-full border-2 border-gold/25' />
              <div className='absolute -inset-6 rounded-full border border-gold/10' />
            </div>
          </motion.div>
        </div>

        {/* Highlights strip */}
        <div className='grid gap-6 lg:grid-cols-3'>
          {highlights.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className='flex flex-col items-start p-7 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300'
            >
              <div className='p-3 rounded-xl bg-navy mb-5'>
                <Icon className='w-6 h-6 text-gold' aria-hidden='true' />
              </div>
              <h3 className='text-base font-bold text-navy mb-2'>{title}</h3>
              <p className='text-gray-500 text-sm leading-relaxed'>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContentSection5;
