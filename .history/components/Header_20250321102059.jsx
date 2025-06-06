import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (

    <>
    <div className='w-11/12  text-center mx-auto h-screen flex justify-evenly items-center gap-4'>
      <div>
      <motion.div
      initial={{scale: 0}}
      whileInView={{scale: 1}}
      transition={{duration: 0.8, type: 'spring', stiffness: 100}}
      >
        <Image src={assets.profile_img} alt='' className='rounded-full w-52'/>
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

        <div>
        <motion.a href='' className='p-2 border-1'>
                          <Image src={assets.github} alt='Tool' className='w-5 sm:w-7'/>

                          </motion.a>

                          <motion.a href=''>
                          <Image src={assets.linkedin} alt='Tool' className='w-5 sm:w-7'/>

                          </motion.a>
        </div>

        {/* <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className='flex items-center gap-3 sm:gap-5 mt-4'>
                    {toolsData.map((tool, index)=>(
                        <motion.li 
                        whileHover={{ scale: 1.1 }}
                        className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                         key={index}>
                          <motion.a href=''>
                          <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>

                          </motion.a>
                        </motion.li>
                    ))}
                </motion.ul> */}

        <div className='flex flex-col justify-center sm:flex-row items-center mt-10'>
            

            <motion.a 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.2}}
            href="/sample-resume.pdf"  
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2  dark:text-black'>
                My CV <Image src={assets.download_icon} alt='' className='w-4'/></motion.a>
        </div>
      </div>

       
    </div>

   
    </>
  )
}

export default Header
