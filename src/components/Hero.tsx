'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithubSquare } from 'react-icons/fa';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import Link from 'next/link';
import { client } from '../../sanity/lib/client';
import { urlFor } from '../../sanity/lib/client';
import { useSectionInView } from '../../libs/hooks';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';

type HeroProps = {
  image: string;
  heading: string;
};

const Hero = () => {
  const [hero, setHero] = useState<HeroProps[]>([]);

  useEffect(() => {
    const query = '*[_type == "homeData"]';
    client.fetch(query).then((data) => {
      setHero(data);
    });
  }, []);

  const { heading = '', image = '' } = hero.length > 0 ? hero[0] : {};

  const imageUrl = image ? urlFor(image).url() : '/hero.png';
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      className="mb-28 sm:mb-0 max-w-[50rem] text-center scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src={imageUrl}
              alt="hero profile image"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover object-top"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-4xl absolute bottom-0 right-0"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {heading}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full group outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all duration-300"
        >
          Contact me here{' '}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition-all duration-300" />
        </Link>
        <Link
          href="/GosheKarovCV.pdf"
          className="bg-white text-gray-700 px-7 py-3 flex items-center gap-2 group rounded-full border border-black/10 outline-none focus:scale-110 hover:scale-110  active:scale-105 transition-all duration-300"
          download={true}
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition-all duration-300 " />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/goshe-karov-5103942b0/'}
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full  border border-black/10 outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </Link>
        <Link
          href={'https://github.com/karovgose'}
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem]  border border-black/10 outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
