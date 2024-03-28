import { motion } from 'framer-motion'
import { Linear } from 'gsap'
import React from 'react'

function marquee() {
    
  return (
    <div className='w-full   h-[50vh] bg-[#004D43] relative rounded-3xl overflow-hidden'>
        <div className='text relative  h-[80%] w-full pt-[5vw] text-white uppercase items-center font-["Founders_Grotesk_X-Condensed"] font-bold text-[25vw] flex  flex-nowrap whitespace-nowrap '>
            <motion.h1 initial={{x:0}} animate={{x:"-102%"}} transition={{ease: "linear", repeat: Infinity, duration: 8}} className='h-[140%] border-t-2 border-b-2 border-zinc-300 pr-[2vw]'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-102%"}} transition={{ease: "linear", repeat: Infinity, duration: 8}} className='h-[140%] border-t-2 border-b-2 border-zinc-300 pl-[2vw]'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default marquee