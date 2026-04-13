'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const currentYear = new Date().getFullYear();

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Store', href: 'https://shop.blackliontech.org/' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    icon: FaXTwitter,
    href: '#',
    label: 'Twitter/X',
  },
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/blacklion_tech/',
    label: 'Instagram',
  },
  {
    icon: FaFacebook,
    href: 'https://www.facebook.com/profile.php?id=61567353446045',
    label: 'Facebook',
  },
];

export function Footer15() {
  return (
    <footer className='bg-navy text-white'>
      {/* Main footer content */}
      <div className='container mx-auto px-8 py-16'>
        <div className='grid gap-12 lg:grid-cols-3'>
          {/* Brand */}
          <div>
            <Link href='/' className='inline-block mb-5'>
              <Image
                src='/BLT Icon White2.png'
                width={52}
                height={52}
                alt='Black Lion Technologies'
              />
            </Link>
            <p className='text-white/50 text-sm leading-relaxed max-w-xs'>
              Premier IT procurement, cybersecurity, and administrative staffing
              services for Federal, State, and Local government agencies
              nationwide.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className='text-gold font-semibold text-xs uppercase tracking-widest mb-6'>
              Quick Links
            </h4>
            <ul className='flex flex-col gap-3'>
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className='text-white/50 hover:text-gold text-sm transition-colors duration-200'
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='text-gold font-semibold text-xs uppercase tracking-widest mb-6'>
              Contact
            </h4>
            <div className='flex flex-col gap-3 text-sm text-white/50'>
              <p className='leading-relaxed'>
                7403 Colony Park Dr.
                <br />
                Birmingham, AL 35243
              </p>
              <a
                href='tel:+12057250690'
                className='hover:text-gold transition-colors duration-200'
              >
                +1 (205) 725-0690
              </a>
              <a
                href='mailto:info@blackliontech.org'
                className='hover:text-gold transition-colors duration-200'
              >
                info@blackliontech.org
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='border-t border-white/10' />

      {/* Bottom bar */}
      <div className='container mx-auto px-8 py-6'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <p className='text-white/35 text-sm'>
            &copy; {currentYear} Black Lion Technologies LLC. All rights
            reserved.
          </p>
          <div className='flex items-center gap-1'>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href !== '#' ? '_blank' : undefined}
                rel={href !== '#' ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className='p-2 rounded-lg text-white/40 hover:text-gold hover:bg-white/5 transition-all duration-200'
              >
                <Icon className='text-lg' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer15;
