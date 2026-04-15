'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar, Collapse, IconButton } from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className='text-white/80 hover:text-gold font-medium text-sm tracking-widest uppercase transition-colors duration-200'
    >
      {children}
    </a>
  );
}

export function Hero() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <Navbar
        fullWidth
        shadow={false}
        color='transparent'
        className={`fixed z-50 border-0 transition-all duration-300 ${
          scrolled
            ? '!bg-navy/95 backdrop-blur-md shadow-xl shadow-navy/40'
            : '!bg-transparent'
        }`}
      >
        <div className='container flex items-center justify-between mx-auto py-2 px-4'>
          <Link href='/' aria-label='Black Lion Technologies — home'>
            <Image
              src='/BLT Icon White2.png'
              width={44}
              height={44}
              alt='Black Lion Technologies logo'
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className='items-center hidden gap-10 lg:flex'>
            <li>
              <NavLink href='/'>Home</NavLink>
            </li>
            <li>
              <NavLink href='#about'>About</NavLink>
            </li>
            <li>
              <NavLink href='#services'>Services</NavLink>
            </li>
            <li>
              <NavLink href='#contact'>Contact</NavLink>
            </li>
          </ul>

          <a
            href='#contact'
            className='hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-gold text-navy text-sm font-semibold tracking-wide hover:bg-gold-light transition-all duration-200'
          >
            Get In Touch
          </a>

          {/* Mobile hamburger */}
          <IconButton
            variant='text'
            color='white'
            onClick={() => setOpen((cur) => !cur)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className='inline-block ml-auto lg:hidden'
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className='w-6 h-6' />
            ) : (
              <Bars3Icon strokeWidth={2} className='w-6 h-6' />
            )}
          </IconButton>
        </div>

        {/* Mobile menu */}
        <Collapse open={open}>
          <nav
            aria-label='Mobile navigation'
            className='container mx-auto mt-2 px-6 py-6 bg-navy rounded-xl shadow-2xl'
          >
            <ul className='flex flex-col gap-5'>
              <li>
                <NavLink href='#about' onClick={closeMenu}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink href='#services' onClick={closeMenu}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink href='#contact' onClick={closeMenu}>
                  Contact
                </NavLink>
              </li>
              <li className='pt-2 border-t border-white/10'>
                <a
                  href='#contact'
                  onClick={closeMenu}
                  className='inline-flex items-center px-5 py-2.5 rounded-full bg-gold text-navy text-sm font-semibold'
                >
                  Get In Touch
                </a>
              </li>
            </ul>
          </nav>
        </Collapse>
      </Navbar>

      {/* Hero Section */}
      <div className='relative w-full min-h-screen bg-center bg-no-repeat bg-cover bg-bham'>
        {/* Gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/65 to-navy/90' />

        <div className='relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-20'>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className='mb-6'
          >
            <Image
              src='/BLT logo White2.png'
              width={260}
              height={260}
              alt='Black Lion Technologies'
              priority
              className='mx-auto drop-shadow-2xl'
            />
          </motion.div>

          {/* Eyebrow + Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
            className='max-w-3xl'
          >
            <div className='flex items-center justify-center gap-3 mb-5'>
              <div className='h-px w-10 bg-gold/60' />
              <span className='text-gold text-xs font-semibold tracking-widest uppercase'>
                Government Technology Solutions
              </span>
              <div className='h-px w-10 bg-gold/60' />
            </div>
            <h1 className='text-4xl lg:text-6xl font-bold text-white mb-5 leading-tight'>
              Trusted IT Solutions for{' '}
              <span className='text-gold'>Government Agencies</span>
            </h1>
            <p className='text-base lg:text-lg text-white/65 mb-10 max-w-2xl mx-auto leading-relaxed'>
              Comprehensive IT procurement, cybersecurity, and administrative
              staffing services for Federal, State, and Local agencies
              nationwide.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.9 }}
            className='flex flex-col sm:flex-row gap-4 justify-center'
          >
            <a
              href='#contact'
              className='px-8 py-4 rounded-full bg-gold text-navy font-bold text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-200 shadow-lg'
            >
              Contact Us
            </a>
            <a
              href='#services'
              className='px-8 py-4 rounded-full border-2 border-white/40 text-white font-bold text-sm tracking-widest uppercase hover:bg-white/10 hover:border-white/70 transition-all duration-200'
            >
              Our Services
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          aria-hidden='true'
          className='absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2'
        >
          <span className='text-white/40 text-xs tracking-widest uppercase'>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className='w-px h-10 bg-gradient-to-b from-white/40 to-transparent'
          />
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
