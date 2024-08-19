'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { delay, motion, stagger } from 'framer-motion';
import {
  Navbar,
  Collapse,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  HomeIcon,
  InboxStackIcon,
} from '@heroicons/react/24/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function NavItem({ href, children }) {
  return (
    <li>
      <Typography
        as='a'
        href={href}
        variant='paragraph'
        className='flex items-center gap-2 font-medium'
      >
        {children}
      </Typography>
    </li>
  );
}

export function Hero() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <>
      <Navbar
        fullWidth
        shadow={false}
        color='transparent'
        className='absolute z-50 border-0'
      >
        <div className='container flex items-center justify-between mx-auto'>
          <Link href='/'>
            <Image
              src='/BLT Icon White2.png'
              width={50}
              height={50}
              alt='Black Lion Technologies'
            />
          </Link>
          {/* <Typography color='white' className='text-lg font-bold'>
            Material Tailwind
          </Typography> */}
          <ul className='items-center hidden gap-8 ml-10 lg:flex'>
            <NavItem href='/'>
              <HomeIcon className='w-5 h-5' />
              Home
            </NavItem>
            <NavItem href='#about'>
              <UserCircleIcon className='w-5 h-5' />
              About Us
            </NavItem>
            <NavItem href='#services'>
              <CommandLineIcon className='w-5 h-5' />
              Services
            </NavItem>
            <NavItem href='#contact'>
              <InboxStackIcon className='w-5 h-5' />
              Contact
            </NavItem>
          </ul>

          <IconButton
            variant='text'
            color='white'
            onClick={handleOpen}
            className='inline-block ml-auto lg:hidden'
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className='w-6 h-6' />
            ) : (
              <Bars3Icon strokeWidth={2} className='w-6 h-6' />
            )}
          </IconButton>
        </div>
        <Collapse open={open}>
          <div className='container px-6 py-5 mx-auto mt-4 bg-white rounded-lg'>
            <ul className='flex flex-col gap-4 text-gray-900'>
              {/* <NavItem>
                <RectangleStackIcon className='w-5 h-5' />
                Pages
              </NavItem> */}
              <NavItem href='#about'>
                <UserCircleIcon className='w-5 h-5' />
                About Us
              </NavItem>
              <NavItem href='#services'>
                <CommandLineIcon className='w-5 h-5' />
                Services
              </NavItem>
              <NavItem href='#contact'>
                <InboxStackIcon className='w-5 h-5' />
                Contact
              </NavItem>
            </ul>
          </div>
        </Collapse>
      </Navbar>
      <div className='relative w-full min-h-screen bg-center bg-no-repeat bg-cover bg-bham'>
        <div className='absolute inset-0 w-full h-full bg-black/50' />
        <div className='grid min-h-screen px-8'>
          <div className='container relative z-10 grid mx-auto my-auto text-center place-items-center'>
            {/* <Typography
              variant='h3'
              color='white'
              className='text-lg !leading-snug lg:text-2xl'
            >
              Pricing Plans
            </Typography> */}
            {/* <Typography
              variant='h1'
              color='white'
              className='my-4 text-3xl !leading-snug lg:text-5xl italic'
            >
              Black Lion Technologies LLC
            </Typography> */}
            <motion.div
              animate={{ x: -25 }}
              transition={{ ease: 'easeOut', duration: 1.5 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <Image
                src='/BLT logo White2.png'
                width={750}
                height={750}
                alt='Black Lion Technologies'
              />
            </motion.div>
            <motion.div
              animate={{ x: [0, -50] }}
              transition={{
                ease: 'easeOut',
                duration: 4,
                delay: 1,
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <Typography
                variant='paragraph'
                color='white'
                className='max-w-2xl mb-10 italic'
              >
                &quot;Your Trusted Partner in Government Contracting:
                Comprehensive IT Solutions & Administrative Services
                for Federal, State and Local Agencies&quot;
              </Typography>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
