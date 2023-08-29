import Image from "next/image";
import React from "react";
import acImg from "../../public/assets/projects/acwtc.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const acwtc = () => {
  return (
    <div className="w-full ">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          fill
          src={acImg}
          alt="/"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Animal Crossing: {"What's"} the Catch?</h2>
          <h3>React JS</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a project I have created to use with the game series
            Animal Crossing by Nintendo. The game has a calendar year and time,
            and bugs and fish will appear in game based on the season and time
            of day. This App takes that info, and takes the {"computer's"} local
            time, (as most people set the in game time to match their local
            time) and displays only the bugs and fish that can be caught at that
            time.
          </p>
          <a href="https://animalcrossingwtc.com" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/MatthewBloemke/AnimalCrossingWTC"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4 ">Code</button>
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
                <RiRadioButtonFill className="pr-1" /> TailwindCSS
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

export default acwtc;
