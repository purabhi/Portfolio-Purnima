import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (

    <>
    <div className=' text-center mx-auto h-screen flex justify-center items-center gap-4'>
      <div>
      <motion.div
      initial={{scale: 0}}
      whileInView={{scale: 1}}
      transition={{duration: 0.8, type: 'spring', stiffness: 100}}
      >
        <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
      </motion.div>
      </div>
      <div className='flex flex-col justify-center items-center'>
      <motion.h3 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.6, delay: 0.3}}
      className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
            Hi! I'm Purnima <Image src={assets.hand_icon} alt='' className='w-6'/></motion.h3>
    <motion.h1 
    initial={{y: -30, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 0.8, delay: 0.5}}
    className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Full Stack web developer</motion.h1>

        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.7}}
        className='max-w-2xl mx-auto font-Ovo'>
        Full Stack Developer with 3+ years of experience in web development with a strong passion for building user-friendly and high-performance websites and applications. 
        </motion.p>
      </div>

       
    </div>

    <div className='flex flex-col justify-center sm:flex-row items-center'>
            

            <motion.a 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.2}}
            href="/sample-resume.pdf" download 
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
                my resume <Image src={assets.download_icon} alt='' className='w-4'/></motion.a>
        </div>
    </>
  )
}

export default Header
