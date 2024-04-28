'use client';
import React from 'react';
import SectionHeading from './SectionHeading';
import Link from 'next/link';
import Image from 'next/image';

import { useSectionInView } from '../../libs/hooks';
import { motion } from 'framer-motion';
import sendEmail from '../../actions/SendEmail';
import { useFormStatus } from 'react-dom';
import SubmitButton from './SubmitButton';
import toast from 'react-hot-toast';
const Contact = () => {
  const { ref } = useSectionInView('Contact', 0.33);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,40rem)] text-center scroll-mt-28"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <h4 className="text-gray-700 dark:text-white/80 -mt-3 text-3xl font-semibold text-center">
        I have got just what you need.{' '}
        <span className="underline decoration-gray-700 dark:decoration-white/80">
          Let&apos;s talk.
        </span>
      </h4>
      <div className="flex justify-evenly items-center flex-wrap my-4 mx-4">
        <div className="min-w-[250px] rounded-lg  bg-[#fef4f5] dark:bg-gray-800 flex gap-3 justify-center items-center my-2 p-2 hover:shadow-sm hover:shadow-[#fef4f5] dark:shadow-gray-800 cursor-pointer transition-all duration-300">
          <Image src="/email.png" alt="email" width={30} height={30} />
          <Link href={'mailto:karovgose7@gmail.com'}>karovgose7@gmail.com</Link>
        </div>
        <div className="min-w-[250px] rounded-lg  bg-[#fef4f5] dark:bg-gray-800 flex gap-3 justify-center items-center my-2 p-2 hover:shadow-sm hover:shadow-[#fef4f5] dark:shadow-gray-800 cursor-pointer transition-all duration-300">
          <Image src="/mobile.png" alt="mobile" width={30} height={30} />
          <Link href={'tel:+38971858428'}>+38971858428</Link>
        </div>
      </div>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data } = await sendEmail(formData);
          if (data?.error) {
            toast.error(data.error.message);

            return;
          } else {
            toast.success(
              'Email sent successfully! I will get back to you soon.'
            );
          }
        }}
      >
        <input
          type="text"
          required
          maxLength={500}
          name="subject"
          placeholder="Subject"
          className="h-14 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all duration-300 px-4"
        />
        <input
          type="email"
          required
          maxLength={500}
          name="email"
          placeholder="Your email"
          className=" my-3 h-14 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all duration-300 px-4"
        />
        <textarea
          placeholder="Your message"
          required
          maxLength={5000}
          name="message"
          className="h-52 my-3 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all duration-300 p-4"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
