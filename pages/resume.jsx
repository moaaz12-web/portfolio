import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Moaaz | Resume</title>
        <meta
          name='description'
          content="I am a freelance Data Scientist and AI Engineer, currently doing Bachelor's 
          in Software Engineering at NED University, Karachi. I have a passion for exploring 
          hidden trends in data and building AI models to solve business problems. Moreover, 
          I love building NLP and Computer Vision solutions to solve real-world problems."
        
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <Navbar/>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Moaaz Siddiqui</h2>
          <div className='flex'>
            <a
              href='https://pk.linkedin.com/in/moaaz-siddiqui-390515229?original_referer=https%3A%2F%2Fwww.google.com%2F'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/moaaz12-web'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Data Science<span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> AI (NLP AND CV)
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated professional with a passion for data science and AI. I have a strong background in data science and AI, with a focus on NLP and CV. I have a proven track record of developing and implementing data-driven solutions to solve complex business problems. I am a self-motivated and hardworking individual who is always looking for new opportunities to learn and grow. I am a quick learner and a team player who is always willing to go the extra mile to get the job 
          done.  I am a self-motivated and hardworking individual who is always looking for new opportunities to learn and grow. I am a quick learner and a team player who is always willing to go the extra mile to get the job done.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Python
            <span className='px-2'>|</span> Tensorflow
            <span className='px-2'>|</span>Pytorch
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> NodeJS
            <span className='px-2'>|</span> Hugging Face Transformers
            <span className='px-2'>|</span> MongoDB
            <span className='px-2'>|</span> OpenCV
            <span className='px-2'>|</span> Mediapipe
          </p>

        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Fiverr
            </span>
            <span className='px-2'>|</span>Remote
          </p>
          <p className='py-1 italic'>Freelance Data Scientist and AI Engineer - Level 1 Seller (Oct 2022 - Presnt)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Created a NLP model to detect hate speech in tweets. The model was deployed on a Flask API and was hosted on Heroku.
            </li>
            <li>
              Created a mediapipe based solution to detect hand gestures and perform actions based on the gestures.
            </li>
            <li>
              Created pose analysis application using python and mediapipe
            </li>
            <li>
              Trained and fine tuned many transformer models for tasks like text classification, text generation, text summarization, question answering, etc.
            </li>
            <li>
              Created a gpt-3 powered website using MERN stack for writing any sort of content
            </li>
          
            <li>
              Created an AI model for identifying the type of tumor in a brain MRI scan using CNN and transfer learning.
            </li>
            </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              NCAI - NEDUET
            </span>
            <span className='px-2'>|</span>Karachi, Pakistan
          </p>
          <p className='py-1 italic'>Machine Learning Internship (March 2022 - April 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Worked as an intern for a month where I was responsible for creating a machine learning model to do lane line segmentation using OpenCV and Python.
            </li>
            <li>
              Created a model to detect and classify different types of traffic signs using CNN and transfer learning.  
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>KayDrive</span>
            <span className='px-2'>|</span>Karachi, Pakistan
          </p>
          <p className='py-1 italic'>Student Ambassador (July 2022 - October 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              It was a 4 month internship where I was responsible for pitching a product (alternative to Google Classroom) to my peers and teachers.
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>AICLUB, NEDUET</span>
            <span className='px-2'>|</span>Karachi, Pakistan
          </p>
          <p className='py-1 italic'>Co-Director of Team Technical (September 2022 - Present)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              As the co-director of the team, I was responsible for managing the team and its members. I was also responsible for creating and implementing a plan to improve the team's performance. Organized and conducted competitons for the team related to Data Science.
            </li>
          </ul>
        </div>
        <Link href='/#home'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </>
  );
};

export default resume;
