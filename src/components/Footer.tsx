'use client';
import React from 'react';
import { EnvelopeIcon, MapIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { links } from '../../libs/data';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';

const Footer = () => {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <footer className="pt-[1rem] pb-[3rem] max-w-[100rem] mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] border-gray-600 border-opacity-40  pb-5"
      >
        <div>
          <div>
            <Image
              src="/logo.png"
              alt="logo"
              width={70}
              height={70}
              quality={100}
            />
          </div>
          <h1 className="text-[14px] mt-[0.5rem]  opacity-70">
            Welcome to my portfolio website! Here, I showcase my passion for
            creating innovative and engaging digital experiences. With a focus
            on web development and design, I strive to deliver solutions that
            not only meet client needs but exceed expectations. Explore my
            projects and get in touch to discuss how we can collaborate on your
            next venture.
          </h1>
        </div>
        <div className="md:mx-auto">
          <h1 className="font-semibold mb-[1.4rem] text-[17px]">Quick Links</h1>
          <ul className="flex flex-col gap-2">
            {links.map((link, index) => (
              <li key={index} className="text-[14px] ">
                <Link
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                  href={link.hash}
                  className="mb-[1rem] text-gray-800 dark:text-gray-300 dark:hover:text-gray-200  hover:text-gray-950 transition-all duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:mx-auto">
          <h1 className="font-semibold mb-[1.4rem] text-[17px]">Address</h1>
          <div className="flex items-center mt-[1rem] space-x-2">
            <MapIcon className="h-5 w-5 text-gray-800 dark:text-gray-300" />
            <p className="text-[14px] ">Kochani, Macedonia</p>
          </div>
          <Link
            href={'mailto:karovgose7@gmail'}
            target="_blank"
            rel="noreferrer"
            className="flex items-center mt-[1rem] space-x-2 "
          >
            <EnvelopeIcon className="h-5 w-5 text-gray-800 dark:text-gray-300" />
            <p className="text-[14px] ">karovgose7@gmail.com</p>
          </Link>
          <Link
            href={'tel:+38971858428'}
            target="_blank"
            rel="noreferrer"
            className="flex items-center mt-[1rem] space-x-2 "
          >
            <PhoneIcon className="h-5 w-5 text-gray-800 dark:text-gray-300" />
            <p className="text-[14px] ">+38971858428</p>
          </Link>
        </div>
      </motion.div>
      <div className="mt-[1.4rem] w-[80%] mx-auto text-center">
        <small className="text-xs ">
          Copyright @ 2024, Design and developed by Goshe Karov. All rights
          reserved.
        </small>
        <p className="text-xs mt-[0.5rem] opacity-70">
          This website was built using Next.js, React, TypeScript, Tailwind CSS,
          Framer Motion, and React Email & Resend on the frontend, with Sanity
          as the backend CMS, and deployed on Vercel.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
