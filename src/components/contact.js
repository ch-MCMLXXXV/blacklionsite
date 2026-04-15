'use client';

import { useState } from 'react';
import { Input, Textarea } from '@material-tailwind/react';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/solid';

const contactInfo = [
  {
    icon: MapPinIcon,
    label: 'Our Office',
    value: '7403 Colony Park Dr.\nBirmingham, AL 35243\nUSA',
  },
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: '+1 (205) 725-0690',
    href: 'tel:+12057250690',
  },
  {
    icon: EnvelopeIcon,
    label: 'Email',
    value: 'info@blackliontech.org',
    href: 'mailto:info@blackliontech.org',
  },
];

export function ContactSection13() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setSending(true);
    const formData = new FormData(e.target);
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className='py-24 px-6 bg-white'>
      <div className='max-w-7xl mx-auto'>
        {/* Section header */}
        <div className='text-center mb-16'>
          <div className='flex items-center justify-center gap-3 mb-4'>
            <div className='h-px w-10 bg-gold/60' />
            <span className='text-gold text-xs font-semibold tracking-widest uppercase'>
              Contact Us
            </span>
            <div className='h-px w-10 bg-gold/60' />
          </div>
          <h2 className='text-4xl lg:text-5xl font-bold text-navy mb-4'>
            Get in Touch
          </h2>
          <p className='text-gray-500 text-lg max-w-xl mx-auto leading-relaxed'>
            Ready to learn more? Contact us today and a member of our team will
            respond promptly.
          </p>
        </div>

        <div className='grid items-start gap-12 lg:grid-cols-2'>
          {/* Form */}
          <div className='bg-white rounded-3xl shadow-xl shadow-navy/8 border border-gray-100 p-8 lg:p-10'>
            {submitted ? (
              <div className='flex flex-col items-center justify-center py-16 text-center'>
                <div className='w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6'>
                  <CheckCircleIcon className='w-10 h-10 text-green-500' />
                </div>
                <h3 className='text-2xl font-bold text-navy mb-3'>
                  Message Sent!
                </h3>
                <p className='text-gray-500 leading-relaxed'>
                  Thank you for reaching out. We&apos;ll get back to you within
                  1&ndash;2 business days.
                </p>
              </div>
            ) : (
              <form
                name='contact'
                method='POST'
                data-netlify='true'
                netlify-honeypot='bot-field'
                onSubmit={handleSubmit}
                className='flex flex-col gap-5'
                aria-label='Contact form'
              >
                <input type='hidden' name='form-name' value='contact' />
                <p className='hidden'>
                  <label>
                    Don&apos;t fill this out: <input name='bot-field' />
                  </label>
                </p>

                <div className='grid grid-cols-2 gap-4'>
                  <Input
                    color='gray'
                    size='lg'
                    label='First Name'
                    name='first-name'
                    containerProps={{ className: '!min-w-full' }}
                    required
                  />
                  <Input
                    color='gray'
                    size='lg'
                    label='Last Name'
                    name='last-name'
                    containerProps={{ className: '!min-w-full' }}
                    required
                  />
                </div>
                <Input
                  color='gray'
                  size='lg'
                  label='Email Address'
                  name='email'
                  type='email'
                  required
                />
                <Input
                  color='gray'
                  size='lg'
                  label='Phone Number'
                  name='phone'
                  type='tel'
                />
                <Textarea
                  color='gray'
                  size='lg'
                  rows={6}
                  label='How can we help you?'
                  name='message'
                  required
                />

                {error && (
                  <div className='flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-100'>
                    <ExclamationTriangleIcon className='w-5 h-5 text-red-500 shrink-0 mt-0.5' />
                    <p className='text-red-700 text-sm leading-relaxed'>
                      Something went wrong. Please try again or reach us
                      directly at{' '}
                      <a
                        href='mailto:info@blackliontech.org'
                        className='underline font-medium'
                      >
                        info@blackliontech.org
                      </a>
                      .
                    </p>
                  </div>
                )}

                <button
                  type='submit'
                  disabled={sending}
                  className='w-full py-4 rounded-xl bg-navy text-white font-semibold text-sm tracking-widest uppercase hover:bg-navy-light disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 shadow-lg shadow-navy/20 mt-1'
                >
                  {sending ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact info + hours */}
          <div className='flex flex-col gap-5'>
            <div className='mb-2'>
              <h3 className='text-2xl font-bold text-navy mb-3'>
                Contact Information
              </h3>
              <p className='text-gray-500 leading-relaxed'>
                We&apos;re based in Birmingham, Alabama and serve government
                agencies across the nation. Reach out through any channel below.
              </p>
            </div>

            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className='flex items-start gap-5 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300'
              >
                <div className='p-3 rounded-xl bg-navy shrink-0'>
                  <Icon className='w-5 h-5 text-gold' aria-hidden='true' />
                </div>
                <div>
                  <p className='text-xs font-semibold text-navy uppercase tracking-widest mb-1'>
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className='text-gray-600 text-sm leading-relaxed hover:text-gold transition-colors duration-200'
                    >
                      {value}
                    </a>
                  ) : (
                    <p className='text-gray-600 text-sm whitespace-pre-line leading-relaxed'>
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Business hours */}
            <div className='p-6 rounded-2xl bg-navy text-white'>
              <div className='flex items-center gap-2 mb-4'>
                <ClockIcon className='w-4 h-4 text-gold' aria-hidden='true' />
                <p className='text-xs font-semibold text-gold uppercase tracking-widest'>
                  Business Hours
                </p>
              </div>
              <div className='flex justify-between text-sm mb-2.5'>
                <span className='text-white/60'>Monday &ndash; Friday</span>
                <span className='font-medium'>9:00 AM &ndash; 5:00 PM CT</span>
              </div>
              <div className='flex justify-between text-sm'>
                <span className='text-white/60'>Saturday &ndash; Sunday</span>
                <span className='font-medium'>By Appointment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection13;
