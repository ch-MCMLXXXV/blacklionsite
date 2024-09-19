'use client';

import { Typography, IconButton } from '@material-tailwind/react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
const currentYear = new Date().getFullYear();

export function Footer15() {
  return (
    <footer className='px-8 py-28'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
          <Typography className='!text-sm font-medium text-gray-500 lg:text-left text-center'>
            All rights reserved. Copyright &copy; {currentYear} Black
            Lion Technologies LLC.
          </Typography>
          <div className='flex gap-2 lg:ml-auto place-content-center'>
            <a href='#buttons-with-link'>
              <IconButton variant='text'>
                <FaXTwitter className='text-xl text-gray-500 transition-colors hover:text-blue-gray-900' />
              </IconButton>
            </a>
            <a href='https://www.instagram.com/blacklion_tech/'>
              <IconButton variant='text'>
                <FaInstagram className='text-xl text-gray-500 transition-colors hover:text-blue-gray-900' />
              </IconButton>
            </a>
            <a href='#buttons-with-link'>
              <IconButton variant='text'>
                <FaFacebook className='text-xl text-gray-500 transition-colors hover:text-blue-gray-900' />
              </IconButton>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer15;
