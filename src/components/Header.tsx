'use client';
import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { links } from '../../libs/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className="z-[999] relative">
      <motion.div
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        className="fixed top-0  left-1/2 -translate-x-1/2 h-[5.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
      ></motion.div>
      <nav className="fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link, index) => (
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              key={index}
              className="h-3/4 flex items-center justify-center relative"
            >
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={clsx(
                  'w-full flex items-center justify-center px-3 py-3 hover:text-gray-950 transition-all duration-300 dark:text-gray-400 dark:hover:text-gray-50',
                  {
                    'text-gray-950 dark:text-gray-300':
                      activeSection === link.name,
                  }
                )}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="bg-gray-100 dark:bg-gray-800 rounded-full absolute inset-0 -z-10"
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
