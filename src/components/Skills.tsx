import React from "react";
import Image from "next/image";
import cssImg from "../../public/assets/skills/css.png";
import jsImg from "../../public/assets/skills/javascript.png";
import htmlImg from "../../public/assets/skills/html.png";
import reactImg from "../../public/assets/skills/react.png";
import tsImg from "../../public/assets/skills/typescript.png";
import githubImg from "../../public/assets/skills/github1.png";
import nodeImg from "../../public/assets/skills/node.png";
import postgresImg from "../../public/assets/skills/Postgresql.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#f26901]">
          Skills
        </p>
        <h2 className="py-4">What I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={htmlImg} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={cssImg} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={jsImg} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>

          <div className="py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={reactImg} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={tsImg} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Typescript</h3>
              </div>
            </div>
          </div>

          <div className="py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={githubImg} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>

          <div className="py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={nodeImg} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Node</h3>
              </div>
            </div>
          </div>

          <div className="py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={postgresImg} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>PostgreSQL</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
