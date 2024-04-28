'use client';
import React, { useEffect, useState } from 'react';
import SectionHeading from './SectionHeading';
import Project from './Project';
import { useSectionInView } from '../../libs/hooks';
import { client } from '../../sanity/lib/client';

const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.33);
  const [projects, setProject] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';
    client.fetch(query).then((data) => {
      setProject(data);
    });
  }, []);

  return (
    <section id="projects" ref={ref} className="mb-28 scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project project={project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
