import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import homeImg from '../../public/assets/HomeImage.jpg';

const getAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return age;
};

const About = () => {
  const birthDate = new Date(1998, 7, 21);
  const age = getAge(birthDate);

  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#f26901]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            I am a {age} year old software developer. I currently live in
            Wisconsin. I am a graduate from Thinkful, a coding boot camp, where
            I learned how to write programs with Javascript. I know a few other
            other languages and technologies, and have been learning more
            everyday.
          </p>
          <p className="py-2 text-gray-600">
            I currently work as a Jr .NET Developer for Select Custom Solutions
            in La Crosse, WI.
          </p>
          <p className="py-2 text-gray-600">
            Beyond coding, I am a hardworking, driven individual. I enjoy a
            challenge and love solving problems. I am a great team player and
            have a very positive outlook on difficult tasks, which makes work a
            lot more fun for me. I am looking for a position where I can work
            with experienced developers, to continue to grow my knowledge.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={homeImg}
            alt="/"
            width={500}
            height={500}
            style={{ height: 'auto', width: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
