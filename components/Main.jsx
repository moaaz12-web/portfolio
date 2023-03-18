import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import AboutImg from '../public/assets/bg_2.jpg';
import Image from 'next/image';
const Main = () => {
  return (
    <div id='home' className='w-full h-screen relative'>

    <div className='max-w-[1240px] text-center w-full h-full mx-auto p-2 flex justify-center items-center'>
      <div>
        <p className='uppercaset text-sm tracking-widest text-black'>
          LETS BUILD SOMETHING TOGETHER
        </p>
        <h1 className='py-4 text-gray-700'>
          Hi there 👋, I am <span className='text-[#5651e5]'> Moaaz</span>
        </h1>
        <h1 className='py-2 text-gray-700'>
          A freelance Data Scientist and AI Engineer
        </h1>
        <p className='py-4 text-black sm:max-w-[70%] m-auto'>
          Focusing on solve real world problems using data and creating AI-based solutions.
        </p>
        <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
          <a href='https://pk.linkedin.com/in/moaaz-siddiqui-390515229?original_referer=https%3A%2F%2Fwww.google.com%2F' target='_blank' rel='noreferrer'>
            <div className='rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-125 ease-in duration-300'>
              <FaLinkedinIn />
            </div>
          </a>
          <a href='https://github.com/moaaz12-web' target='_blank' rel='noreferrer'>
            <div className='rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-125 ease-in duration-300'>
              <FaGithub />
            </div>
          </a>
          <Link href='/#contact'>
            <div className='rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-125 ease-in duration-300'>
              <AiOutlineMail />
            </div>
          </Link>
          <Link href='/resume'>
            <div className='rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-125 ease-in duration-300'>
              <BsFillPersonLinesFill />
            </div>
          </Link>
        </div>
      </div>
    </div>

  </div>
  );
};

export default Main;
