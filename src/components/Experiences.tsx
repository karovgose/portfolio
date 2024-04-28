'use client';
import React, { useEffect, useState } from 'react';
import SectionHeading from './SectionHeading';
import { useSectionInView } from '../../libs/hooks';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useThemeContext } from '@/context/ThemeContext';
import { client } from '../../sanity/lib/client';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';

interface Experience {
  title: string;
  location: string;
  description: string;
  date: string;
  category: string;
}

const Experiences = () => {
  const { ref } = useSectionInView('Experience', 0.33);
  const { theme } = useThemeContext();
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    const query = '*[_type == "experiences" ] | order(_createdAt asc)';
    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <section
      ref={ref}
      id="experience"
      className="scroll-mt-28 text-center mb-28 sm:mb-40"
    >
      <SectionHeading>My Experiences</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiences.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === 'light' ? '#f3f4f6' : 'rgba(255,255,255,0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0,0,0,0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255,255,255,0.5)',
              }}
              date={experience.date}
              icon={
                experience.category === 'Study' ? (
                  <LuGraduationCap />
                ) : (
                  <CgWorkAlt />
                )
              }
              iconStyle={{
                background:
                  theme === 'light' ? 'white' : 'rgba(255,255,255,0.15)',
                fontSize: '2.5rem',
              }}
            >
              <h3 className="capitalize font-semibold">{experience.title}</h3>
              <p className="font-normal !mt-0">{experience.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experiences;
