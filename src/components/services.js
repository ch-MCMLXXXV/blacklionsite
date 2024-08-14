'use client';

import React from 'react';
import Image from 'next/image';
import { Typography } from '@material-tailwind/react';
import {
  FingerPrintIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/solid';

function Icon({ children }) {
  return (
    <div className='mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white'>
      {children}
    </div>
  );
}

export function Services2() {
  return (
    <section className='p-12'>
      <div className='container grid items-start mx-auto mb-20 gap-y-8 lg:grid-cols-2'>
        <Image
          src='/hardware.jpg'
          width={300}
          height={300}
          alt='delive instant answers'
          className='h-full max-h-[450px] w-full rounded-xl object-cover'
        />
        <div className='grid items-center w-full lg:px-8'>
          <Icon>
            <RectangleGroupIcon className='w-6 h-6' />
          </Icon>
          <Typography
            variant='h3'
            color='blue-gray'
            className='mb-4 !text-2xl font-bold lg:!text-3xl'
          >
            Cybersecurity & IT Equipment Procurement
          </Typography>
          <Typography
            variant='lead'
            className='mb-10 font-normal !text-gray-500'
          >
            We provide top-notch IT equipment solutions for all
            Government agencies, from Federal all the way down to your
            local municipalities. We aslo provide Cybersecurity
            solutions as well as custom web solutions too.
          </Typography>
          <ul className='flex flex-col gap-6 pl-4 font-normal text-gray-500 list-disc'>
            <li>
              Provide IT equipment from major brands such as HP, Dell
              Netgear & Linksys{' '}
            </li>
            <li>Shipping to all contigious states</li>
            <li>Super friendly support team</li>
          </ul>
        </div>
      </div>
      <div className='container grid items-start mx-auto gap-y-8 lg:grid-cols-2'>
        <div className='grid items-center w-full row-start-2 lg:row-auto lg:pr-10'>
          <Icon>
            <FingerPrintIcon className='w-6 h-6' />
          </Icon>
          <Typography
            variant='h3'
            color='blue-gray'
            className='mb-4 !text-2xl font-bold lg:!text-3xl'
          >
            Administrative Staffing and Support
          </Typography>
          <Typography
            variant='lead'
            className='mb-10 font-normal !text-gray-500'
          >
            Black Lion Tech also provides top-tier administrative
            staffing and support for all departments across the
            federal, state and local levels. We ensure that your
            employees are well-trained, competent, and well-supported.
          </Typography>
          <ul className='flex list-disc flex-col gap-6 pl-4 !font-normal text-gray-500'>
            <li>Well trained and dependable staff</li>
            <li>Staff locally and remotely</li>
            <li>
              Capable of filling Federal, State and Local positions
            </li>
          </ul>
        </div>
        <Image
          src='/staff.jpg'
          width={300}
          height={300}
          alt='manage your team with reports'
          className='h-full w-full rounded-xl lg:min-h-[450px] object-cover'
        />
      </div>
    </section>
  );
}

export default Services2;
