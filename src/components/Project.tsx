'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';
import Link from 'next/link';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { urlFor } from '../../sanity/lib/client';
type ProjectProps = {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    gitHub: string;
    live: string;
  };
};

const Project = ({
  project: { title, description, image, tags, gitHub, live },
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const [showLinks, setShowLinks] = useState(false);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 sm:mb-8 last:mb-0 group"
    >
      {' '}
      <article
        className="bg-gray-100 dark:bg-white/10 dark:text-white max-w-[42rem] rounded-lg  border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[35rem] even:pl-8 hover:bg-gray-200 transition-all duration-300 cursor-pointer"
        onMouseEnter={() => setShowLinks(true)}
        onMouseLeave={() => setShowLinks(false)}
      >
        <div className="pt-4 pb-7 px-4 sm:px-0 sm:pl-10 sm:pr-2 sm:pt-10   sm:max-w-[50%]  flex flex-col h-full ml-0 sm:group-even:ml-[18rem] ">
          <h3 className="text-2xl font-semibold ">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          {showLinks && (
            <motion.div
              className="flex items-center justify-center gap-4 absolute z-10 top-0 left-0 bottom-0 right-0 w-full h-full group-hover:bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300:"
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: 'easeInOut',
                staggerChildren: 0.5,
              }}
            >
              {live && (
                <Link href={live} target="_blank" rel="noreferrer">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-black/50  text-white flex items-center justify-center"
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <AiFillEye className="w-[50%] h-[50%]" />
                  </motion.div>
                </Link>
              )}
              {gitHub && (
                <Link href={gitHub} target="_blank" rel="noreferrer">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center"
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <AiFillGithub className="w-[50%] h-[50%]" />
                  </motion.div>
                </Link>
              )}
            </motion.div>
          )}
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div></div>
        <Image
          src={urlFor(image).url()}
          alt="Project i worked on"
          width={500}
          height={500}
          quality={95}
          className="absolute object-cover object-top top-8 -right-40  w-[28.25rem] h-[28.25rem] hidden sm:block rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2
    group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-hover:scale-[1.04] transition-all duration-300"
        />
      </article>
    </motion.div>
  );
};

export default Project;
