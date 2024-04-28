'use client';
import React, { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import { useSectionInView } from '../../libs/hooks';
import { urlFor } from '../../sanity/lib/client';
import { client } from '../../sanity/lib/client';
import { animate, delay, motion } from 'framer-motion';
import Image from 'next/image';

type Skill = {
  name: string;
  image: string;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView('Skills', 0.33);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const query = '*[_type == "skills" ] | order(_createdAt asc)';
    client.fetch(query).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skills.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            custom={index}
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-white dark:bg-white/50 border border-black/[0.1] dark:border-white rounded-full p-5 flex items-center justify-center hover:bg-gray-500 dark:hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer group"
            key={index}
          >
            <div className="relative w-20 h-20 xl:w-24 xl:h-24">
              <Image
                src={urlFor(skill.image).url()}
                alt={skill.name}
                fill
                className="object-cover group-hover:opacity-20"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <p className="text-white dark:text-gray-950 text-xl">
                  {skill.name}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
