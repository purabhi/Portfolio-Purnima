import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className='text-center mb-2 text-lg font-Ovo'>
      My portfolio</motion.h4>

      <motion.h2
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='text-center text-5xl font-Ovo'>
      My latest work</motion.h2>

      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
      Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in full stack web development.</motion.p>

    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.9, duration: 0.6 }}
    className='grid grid-cols-1 md:grid-cols-3 my-10 gap-5 dark:text-black'>
       {workData.map((project, index) => (
  <a target='_blank' href={project.link} key={index}>
    <div className="max-w-sm h-[400px] bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer flex flex-col">
      
      {/* Fixed height for image */}
      <div className="relative w-full h-48">
        <Image
          src={project.bgImage}
          alt="App Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Text section grows to fill remaining space */}
      <div className="p-4 flex-grow flex flex-col justify-between">
        <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
        <p className="text-gray-600 mt-2 flex-grow">
          {project.description}
        </p>
      </div>

    </div>
  </a>
))}

    </motion.div>

    

    </motion.div>
  )
}

export default Work
