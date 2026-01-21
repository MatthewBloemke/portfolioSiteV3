import React from 'react';
import kegTrackerImg from '../../public/assets/projects/kegtracker.png';
import healthyConv from '../../public/assets/projects/healthyconversations.png';
import sdm from '../../public/assets/projects/servedigitalmedia.png';
import acImg from '../../public/assets/projects/acwtc.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full lg:h-screen p-8">
      <div className="m-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#f26901]">
          Projects
        </p>
        <h2 className="py-4">{"What I've built"}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            image={kegTrackerImg}
            title="Keg Tracker"
            description="ReactJS, NextJS"
            projectUrl="/kegtracker"
          />
          <ProjectItem
            image={acImg}
            title="Animal Crossing"
            description="ReactJS"
            projectUrl="/acwtc"
          />
          <ProjectItem
            image={sdm}
            title="Serve Digital Media"
            description="ReactJS, NextJS"
            projectUrl="/sdm"
          />
          <ProjectItem
            image={healthyConv}
            title="Healthy Conversations"
            description="ReactJS, NextJS"
            projectUrl="/hc"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
