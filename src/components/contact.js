'use client';

import React from 'react';
import {
  Typography,
  Input,
  Textarea,
  Checkbox,
  Button,
  Card,
  CardBody,
} from '@material-tailwind/react';
import {
  EnvelopeIcon,
  TicketIcon,
  PhoneIcon,
  HomeModernIcon,
} from '@heroicons/react/24/solid';

export function ContactSection13() {
  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   await fetch('/__forms.html', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: new URLSearchParams(formData).toString(),
  //   });
  //   alert('Form submitted successfully!');
  // };
  return (
    <section className='grid h-screen px-8 py-10'>
      <div className='container grid items-center grid-cols-1 mx-auto my-auto place-items-center gap-y-10 gap-x-28 lg:grid-cols-2'>
        <div className='w-full lg:max-w-lg'>
          <Card shadow={true} className='lg:p-6'>
            <CardBody>
              <Typography
                variant='h4'
                color='blue-gray'
                className='mb-6'
              >
                Contact us
              </Typography>
              <form
                name='contact'
                method='POST'
                data-netlify='true'
                className='flex flex-col gap-6'
              >
                <div className='grid grid-cols-2 gap-4'>
                  <Input
                    color='gray'
                    size='lg'
                    label='First Name'
                    name='first-name'
                    containerProps={{
                      className: '!min-w-full',
                    }}
                  />
                  <Input
                    color='gray'
                    size='lg'
                    label='Last Name'
                    name='last-name'
                    containerProps={{
                      className: '!min-w-full',
                    }}
                  />
                </div>
                <Input
                  color='gray'
                  size='lg'
                  label='Email'
                  name='email'
                />
                <Input
                  color='gray'
                  size='lg'
                  label='Phone Number'
                  name='phone'
                />
                <Textarea
                  color='gray'
                  size='lg'
                  rows={7}
                  label='Message'
                  name='message'
                />
                {/* <Checkbox
                  color='gray'
                  label={
                    <Typography className='font-normal text-base !text-gray-500 -mt-6'>
                      You agree to our{' '}
                      <a
                        href='#'
                        className='font-medium text-gray-700 hover:text-gray-900'
                      >
                        Privacy Policy
                      </a>
                      .
                    </Typography>
                  }
                  containerProps={{
                    className: '-ml-2.5 -mt-6',
                  }}
                /> */}
                <Button
                  size='lg'
                  color='gray'
                  className='mt-4'
                  fullWidth
                >
                  send message
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>
        <div className='w-full pb-2 lg:pb-0'>
          <Typography
            variant='h2'
            color='blue-gray'
            className='mb-4 !text-3xl lg:!text-4xl'
          >
            Get in Touch
          </Typography>
          <Typography className='mb-16 max-w-md !font-normal !text-gray-500'>
            You need more information? Feel free to contact us at any
            time.
          </Typography>
          <div className='flex items-center gap-5 mb-3'>
            <HomeModernIcon className='w-5 h-5' />
            <Typography variant='h6'>
              7403 Colony Park Dr. <br /> Birmingham, AL 35243 <br />{' '}
              USA
            </Typography>
          </div>
          <div className='flex items-center gap-5'>
            <PhoneIcon className='w-5 h-5' />
            <Typography variant='h6'>+1(205) 725 0690</Typography>
          </div>
          <div className='flex items-center gap-5 my-4'>
            <EnvelopeIcon className='w-5 h-5' />
            <Typography variant='h6'>
              info@blackliontech.org
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection13;
