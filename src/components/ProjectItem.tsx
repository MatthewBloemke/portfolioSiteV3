import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface props {
  title: string;
  image: StaticImageData;
  description: string;
  projectUrl: string;
}

const ProjectItem = ({ title, image, description, projectUrl }: props) => {
  return (
    <Link href={projectUrl}>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#f26901] to-[#f20111]">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={image}
          alt="/"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-w-[200px] ">
          <h3 className="text-xl text-white tracking-wider text-center md:text-2xl">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">{description}</p>
          <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer md:p-3">
            More info
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
