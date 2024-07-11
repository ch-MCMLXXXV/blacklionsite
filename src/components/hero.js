'use client';

import React from 'react';
import {
  Navbar,
  Button,
  Collapse,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function NavItem({ children }) {
  return (
    <li>
      <Typography
        as='a'
        href='#'
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
          <Typography color='white' className='text-lg font-bold'>
            Material Tailwind
          </Typography>
          <ul className='items-center hidden gap-8 ml-10 lg:flex'>
            <NavItem>
              <RectangleStackIcon className='w-5 h-5' />
              Pages
            </NavItem>
            <NavItem>
              <UserCircleIcon className='w-5 h-5' />
              Account
            </NavItem>
            <NavItem>
              <Squares2X2Icon className='w-5 h-5' />
              Blocks
            </NavItem>
            <NavItem>
              <CommandLineIcon className='w-5 h-5' />
              Docs
            </NavItem>
          </ul>
          <div className='items-center hidden gap-4 lg:flex'>
            <Button variant='text' color='white'>
              Log in
            </Button>
            <Button color='white'>sign in</Button>
          </div>
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
              <NavItem>
                <RectangleStackIcon className='w-5 h-5' />
                Pages
              </NavItem>
              <NavItem>
                <UserCircleIcon className='w-5 h-5' />
                Account
              </NavItem>
              <NavItem>
                <Squares2X2Icon className='w-5 h-5' />
                Blocks
              </NavItem>
              <NavItem>
                <CommandLineIcon className='w-5 h-5' />
                Docs
              </NavItem>
            </ul>
            <div className='flex items-center gap-4 mt-6'>
              <Button variant='text'>Log in</Button>
              <Button color='gray'>sign in</Button>
            </div>
          </div>
        </Collapse>
      </Navbar>
      <div className="relative min-h-screen w-full bg-[url('https://www.material-tailwind.com/image/image-5.jpeg')] bg-cover bg-center bg-no-repeat">
        <div className='absolute inset-0 w-full h-full bg-black/50' />
        <div className='grid min-h-screen px-8'>
          <div className='container relative z-10 grid mx-auto my-auto text-center place-items-center'>
            <Typography
              variant='h3'
              color='white'
              className='text-lg !leading-snug lg:text-2xl'
            >
              Pricing Plans
            </Typography>
            <Typography
              variant='h1'
              color='white'
              className='my-4 text-3xl !leading-snug lg:text-5xl'
            >
              Work with the rockets
            </Typography>
            <Typography
              variant='lead'
              color='white'
              className='max-w-2xl mb-10'
            >
              Wealth creation is an evolutionarily recent positive-sum
              game. Status is an old zero-sum game. Those attacking
              wealth creation are often just seeking status.
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
