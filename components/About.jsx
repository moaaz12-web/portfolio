import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-10'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-black'>
            I am a freelance Data Scientist and AI Engineer, currently doing Bachelors in Software Engineering at NED University, Karachi. I have a passion for exploring hidden trends in data and building AI models to solve business problems.
            Moreover, I love building NLP and Computer Vision solutions to solve real-world problems.  Other than that, I also like to build web applications using MERN stack and Next.js framework.
          </p>
          <p className='py-2 text-black'>
            I started learning Data Science during my freshman year at NEDUET, and since then I have been working on various projects in the field of Data Science and AI. I have worked on projects ranging from building a simple model to predict the price of a house to building a
            complex model to predict the price of a stock. I have also worked on projects related to NLP and Computer Vision such as summarization models, sentiment analysis models, object detection solutions using YOLO versions, Mediapipe based solutions, and many many more. During my freetime, I like to spend my time watching movies or reading the latest tech news on the internet. 
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my projects I created!!.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto border border-black rounded-[2.5rem] shadow-2xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
