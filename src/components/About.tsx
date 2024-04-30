'use client';
import React, { useEffect, useState } from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useSectionInView } from '../../libs/hooks';
import { client } from '../../sanity/lib/client';
import { urlFor } from '../../sanity/lib/client';

type AboutDataProps = {
  firstParagraph: string;
  secondParagraph: string;
  image: string;
};
const About = () => {
  const [aboutData, setAboutData] = useState<AboutDataProps[]>([]);

  useEffect(() => {
    const query = '*[_type == "aboutData"]';
    client.fetch(query).then((data) => {
      setAboutData(data);
    });
  }, []);
  const {
    firstParagraph = '',
    secondParagraph = '',
    image = '',
  } = aboutData.length > 0 ? aboutData[0] : {};

  const { ref } = useSectionInView('About', 0.33);
  const imageUrl = image ? urlFor(image).url() : '/about.png';
  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="mb-28  text-center md:text-left leading-8 sm:mb-40 max-w-[60rem] scroll-mt-28"
    >
      <SectionHeading>About Me</SectionHeading>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-evenly gap-8">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative mb-3 flex-shrink-0 w-56 h-56 md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        >
          <Image
            src={imageUrl}
            alt="profile image"
            fill
            className="rounded-full md:rounded-lg  object-top"
          />
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <p className="mb-3">{firstParagraph}</p>
          <p>{secondParagraph}</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
