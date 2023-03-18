import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem'
import golfImg from '../public/assets/projects/golf_project.jpg'
import eda_dashboard from '../public/assets/projects/eda_dashboard.png'
import sd_demo from '../public/assets/projects/sd_demo.jpg'
import wordweaver from '../public/assets/projects/wordweaver.jpg'
import meteor_eda from '../public/assets/projects/meteor_eda.png'
import movie from '../public/assets/projects/movie.png'
import tumor from '../public/assets/projects/tumor.png'
import sign from '../public/assets/projects/sign.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Interactive Dashboard of USA accidents from 2016-2021'
            backgroundImg={eda_dashboard}
            projectUrl='/eda'
            tech='Plotly and Dash'
          />
          <ProjectItem
            title='Pose Estimation for Golf Swing'
            backgroundImg={golfImg}
            projectUrl='/golf'
            tech='Mediapipe'

          />
          <ProjectItem
            title='Text generation website using GPT-3'
            backgroundImg={wordweaver}
            projectUrl='/wordweaver'
            tech='MERN Stack'

          />
          <ProjectItem
            title='Mini projects related to all things stable diffusions'
            backgroundImg={sd_demo}
            projectUrl='/sd'
            tech='Diffusers'

          />

          <ProjectItem
            title='Sign Language Recognizer'
            backgroundImg={sign}
            projectUrl='/sign'
            tech='Mediapipe and OpenCV'

          />
          <ProjectItem
            title='Movie Website'
            backgroundImg={movie}
            projectUrl='/twitch'
            tech='MERN Stack'

          />

          <ProjectItem
            title='Tumor Detection using VGG-16'
            backgroundImg={tumor}
            projectUrl='/tumor'
            tech='Tensorflow and Keras'

          />
        </div>
      </div>
          <h2 className='text-center'>And many more..</h2>
    </div>
  );
};

export default Projects;
