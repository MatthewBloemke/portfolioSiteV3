import Image from 'next/image';
import React from 'react';
import lha from '../../public/assets/projects/lesterheatair.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const lesterheatair = () => {
  return (
    <div className="w-full ">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          fill
          src={lha}
          alt="/"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Lester Heat and Air</h2>
          <h3>ReactJS / NextJS</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Designed and developed a responsive marketing website for Lester
            Heat and Air, a family-owned HVAC company serving Kiowa County and
            surrounding communities. Built with Next.js, the site focuses on
            fast performance, mobile usability, and clear service information
            for heating and air conditioning installation, repair, and
            maintenance. The project emphasizes strong local credibility, simple
            navigation, and clear calls-to-action to help convert visitors into
            service inquiries.
          </p>

          <a href="https://www.lesterheatandair.com/" target="_blank">
            <button className="px-8 py-2 mt-4 ">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Typescript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextJS
              </p>
            </div>
          </div>
        </div>
        <div>
          <Link href="/#projects">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default lesterheatair;
