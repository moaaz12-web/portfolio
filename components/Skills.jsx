import React from 'react'
import aws from '../public/assets/skills/aws.png'
import dataScienceImg from '../public/assets/skills/aws.png'
import frontendDevImg from '../public/assets/skills/aws.png'
import machineLearningImg from '../public/assets/skills/aws.png'
import deepLearningImg from '../public/assets/skills/aws.png'
import aiNlpCvImg from '../public/assets/skills/aws.png'
import backendDevImg from '../public/assets/skills/aws.png'
import python from '../public/assets/skills/python.jpeg'
import react from '../public/assets/skills/react.png'
import tensorflow from '../public/assets/skills/tensorflow.png'
import transformers from '../public/assets/skills/transformers.png'
import tailwind from '../public/assets/skills/tailwind.png'
import github from '../public/assets/skills/github1.png'
import html from '../public/assets/skills/html.png'
import pytorch from '../public/assets/skills/pytorch.png'
import node from '../public/assets/skills/node.png'
import next from '../public/assets/skills/nextjs.png'
import mongo from '../public/assets/skills/mongo.png'
import javascript from '../public/assets/skills/javascript.png'
import firebase from '../public/assets/skills/firebase.png'
import opencv from '../public/assets/skills/opencv.png'
import Image from 'next/image'



// import Image from 'next/image'
const Skills = () => {
  return (

    <div className='w-full flex flex-col justify-center items-center'>
      <h1 className="text-4xl font-bold text-center mb-10">Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mx-auto p-10">
        <div className="flex flex-col items-center justify-center shadow-lg hover:shadow-xl border border-fuchsia-900 rounded-[10px]">
          {/* <div className="p-4">
        <Image src={dataScienceImg} width="70" height="70" alt="Data Science" />
      </div> */}
          <div className="uppercase text-center tracking-wider font-semibold text-gray-700 my-4">
            Data Science





          </div>
        </div>

        <div className="flex flex-col items-center justify-center shadow-lg hover:shadow-xl border border-fuchsia-900 rounded-[10px]">
          {/* <div className="p-4">
        <Image src={frontendDevImg} width="70" height="70" alt="Frontend Development" />
      </div> */}
          <div className="uppercase text-center tracking-wider font-semibold text-gray-700 my-4">
            Frontend Development
          </div>
        </div>

        <div className="flex flex-col items-center justify-center shadow-lg hover:shadow-xl border border-fuchsia-900 rounded-[10px]">
          {/* <div className="p-4">
        <Image src={machineLearningImg} width="70" height="70" alt="Machine Learning" />
      </div> */}
          <div className="uppercase text-center tracking-wider font-semibold text-gray-700 my-4">
            Machine Learning
          </div>
        </div>

        <div className="flex flex-col items-center justify-center shadow-lg hover:shadow-xl border border-fuchsia-900 rounded-[10px]">
          {/* <div className="p-4">
        <Image src={deepLearningImg} width="70" height="70" alt="Deep Learning" />
      </div> */}
          <div className="uppercase text-center tracking-wider font-semibold text-gray-700 my-4">
            Deep Learning
          </div>
        </div>

        <div className="flex flex-col items-center justify-center shadow-lg hover:shadow-xl border border-fuchsia-900 rounded-[10px]">
          {/* <div className="p-4">
        <Image src={aiNlpCvImg} width="70" height="70" alt="AI, NLP, & CV" />
      </div> */}
          <div className="uppercase text-center tracking-wider font-semibold text-gray-700 my-4">
            AI, NLP, & CV
          </div>
        </div>

        <div className="flex flex-col items-center justify-center shadow-lg hover:shadow-xl border border-fuchsia-900 rounded-[10px]">
          {/* <div className="p-4">
        <Image src={backendDevImg} width="70" height="70" alt="Backend Development" />
      </div> */}
          <div className="uppercase text-center tracking-wider font-semibold text-gray-700 my-4">
            Backend Development
          </div>
        </div>
      </div>



      <h1 className='text-4xl font-bold text-center'>Tech Stack</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-8 mx-auto p-20'>


        <div className='flex shadow-lg hover:shadow-xl border border-fuchsia-900 rounded-[10px] items-center justify-around gap-12'>
          <div className=''>
            <Image src={python} width='70' height='70' alt='html' />
          </div>
          <div className='mx-6 uppercase text-center  tracking-widest'>Python</div>
        </div>

        <div className='flex shadow-lg hover:shadow-xl border border-fuchsia-900 rounded-[10px] items-center justify-around gap-12'>
          <div className=''>
            <Image src={react} width='70' height='70' alt='html' className='rounded-full object-cover' />
          </div>
          <div className='mx-6 uppercase text-center  tracking-widest'>React JS</div>
        </div>



        <div className='flex shadow-lg hover:shadow-xl border border-fuchsia-900 rounded-[10px] items-center justify-around gap-12'>
          <div className=''>
            <Image src={tensorflow} width='70' height='70' alt='html' />
          </div>
          <div className='mx-6 uppercase text-center  tracking-widest'>Tensorflow</div>
        </div>

        <div className='flex shadow-lg hover:shadow-xl border border-fuchsia-900 rounded-[10px] items-center justify-around gap-12'>
          <div className=''>
            <Image src={node} width='70' height='70' alt='html' />
          </div>
          <div className='mx-6 uppercase text-center  tracking-widest'>nODEjs</div>
        </div>
        <div className='flex shadow-lg hover:shadow-xl border border-fuchsia-900 rounded-[10px] items-center justify-around gap-12'>
          <div className=''>
            <Image src={transformers} width='70' height='70' alt='html' />
          </div>
          <div className='mx-6 uppercase text-center  tracking-widest'>transformers</div>
        </div>

        <div className='flex shadow-lg hover:shadow-xl border border-fuchsia-900 rounded-[10px] items-center justify-around gap-12'>
          <div className=''>
            <Image src={mongo} width='70' height='70' alt='html' />
          </div>
          <div className='mx-6 uppercase text-center  tracking-widest'>mongodb</div>
        </div>

        <div className='flex shadow-lg hover:shadow-xl border border-fuchsia-900 rounded-[10px] items-center justify-around gap-12'>
          <div className=''>
            <Image src={javascript} width='70' height='70' alt='html' />
          </div>
          <div className='mx-6 uppercase text-center  tracking-widest'>javascript</div>
        </div>

        <div className='flex shadow-lg hover:shadow-xl border border-fuchsia-900 rounded-[10px] items-center justify-around gap-12'>
          <div className=''>
            <Image src={opencv} width='70' height='70' alt='html' />
          </div>
          <div className='mx-6 uppercase text-center  tracking-widest'>opencv</div>
        </div>

        <div className='flex shadow-lg hover:shadow-xl border border-fuchsia-900 rounded-[10px] items-center justify-around gap-12'>
          <div className=''>
            <Image src={pytorch} width='70' height='70' alt='html' />
          </div>
          <div className='mx-6 uppercase text-center  tracking-widest'>pytorch</div>
        </div>

        <div className='flex shadow-lg hover:shadow-xl border border-fuchsia-900 rounded-[10px] items-center justify-around gap-12'>
          <div className=''>
            <Image src={next} width='70' height='70' alt='html' />
          </div>
          <div className='mx-6 uppercase text-center  tracking-widest'>nextjs</div>
        </div>
      </div>




    </div>







  )
}

export default Skills