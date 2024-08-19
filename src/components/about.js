'use client';
import React, { useRef, useEffect } from 'react';
import { Typography, Button } from '@material-tailwind/react';
import Image from 'next/image';
import {
  motion,
  useInView,
  useAnimation,
  easeIn,
} from 'framer-motion';

export function ContentSection5({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, mainControls]);
  return (
    <section className='grid min-h-screen px-8 py-10'>
      <div
        ref={ref}
        className='grid items-center gap-10 mx-auto my-auto max-w-7xl place-items-center lg:grid-cols-2'
      >
        <motion.div
          animate={mainControls}
          transition={{ duration: 1, delay: 0.75 }}
          initial={{ y: 75, opacity: 0 }}
          className='lg:max-w-md'
        >
          <Typography
            variant='h2'
            color='blue-gray'
            className='mb-6 lg:text-3xl !text-2xl !leading-snug lg:max-w-sm'
          >
            Who Are We?
          </Typography>
          <Typography className='text-base !font-normal mb-12 !text-gray-500'>
            Black Lion Technologies LLC is a premier provider of IT
            equipment procurement, cybersecurity solutions, and
            specialized staffing services. With a deep understanding
            of the ever-evolving technology landscape, we are
            committed to delivering top-tier solutions that meet the
            unique needs of our clients. Our team of experts ensures
            that every project, from sourcing the latest technology to
            implementing robust cybersecurity measures, is handled
            with the utmost professionalism and attention to detail.
            <br />
            <br />
            Located in Birmingham, AL, we proudly serve Federal,
            State, and local municipal governments across the nation.
            Our strategic location allows us to efficiently meet the
            demands of our clients, providing tailored solutions that
            enhance operational efficiency and security. At Black Lion
            Technologies LLC, we are dedicated to building long-term
            partnerships by delivering reliable, innovative, and
            cost-effective services that empower government agencies
            to achieve their goals.
          </Typography>
          {/* <Typography className='text-base !font-normal !text-gray-500'>
            The Arctic Ocean freezes every winter and much of the
            sea-ice then thaws every summer, and that process will
            continue whatever happens with climate change. Even if the
            Arctic continues to be one of the fastest-warming regions
            of the world, it will always be plunged into bitterly cold
            polar dark every winter. And year-by-year, for all kinds
            of natural reasons, there&apos;s huge variety of the state
            of the ice.
          </Typography> */}
        </motion.div>
        <div>
          <Image
            src='/BLT Icon.png'
            width={300}
            height={300}
            alt='logo'
            className='object-cover object-center w-full h-full mb-6 lg:h-full'
          />
          {/* <Image
            src='/gold.jpg'
            width={300}
            height={300}
            alt='team work'
            className='h-full lg:h-[370px] w-full shadow-lg rounded-xl object-cover object-center'
          /> */}
        </div>
      </div>
    </section>
  );
}

export default ContentSection5;
