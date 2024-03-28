import { easeIn, easeInOut } from 'framer-motion';
import React, { useEffect, useState } from 'react'
// import Shery from "sheryjs";
// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger); 


function eyes() {
    const [rotate, setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener('mousemove', (dets)=>{
            let mouseX = dets.clientX;
            let mouseY = dets.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle-180);
            console.log(setRotate)
        })
    })

    // Shery.makeMagnet(".dot" /* Element to target.*/, {
    //     //Parameters are optional.
    //     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    //     duration: 1,
    //   });

  return (
    
    <div className='w-full h-screen bg-cover bg-center relative bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg)]'>
        <div className='  h-1/3 w-1/2 absolute flex items-center justify-center gap-20 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
            <div className='h-[15vw] w-[15vw] flex justify-center items-center bg-zinc-100 rounded-full'>
            <div className='w-2/3 h-2/3 bg-[#212121] flex justify-center items-center rounded-full'>
                <div style={{transform: `rotate(${rotate}deg)`}} className='line  h-[2vw] w-full'>
                <div  className='dot w-[1.3vw] h-[1.3vw] rounded-full bg-zinc-100'></div>
                </div>
            </div>
            </div>
            <div className='h-[15vw] w-[15vw] flex justify-center items-center bg-zinc-100 rounded-full'>
            <div className='w-2/3 h-2/3 bg-[#212121] flex justify-center items-center rounded-full'>
            <div style={{transform: `rotate(${rotate}deg)`}} className='line h-[2vw] w-full'>
                <div className='dot w-[1.3vw] h-[1.3vw] rounded-full bg-zinc-100'></div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default eyes