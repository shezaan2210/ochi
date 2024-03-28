import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function home() {
  return (
   <div className='w-full h-screen relative  pt-1 flex flex-col justify-center'>
    <div className="hero-text flex flex-col justify-center   ml-[3vw] font-['Founders_Grotesk_X-Condensed'] relative">
      {['we create', 'eye-opening', 'presentations'].map((item, index)=>{
        return <div className="masker overflow-hidden flex items-center">
          <div className='w-fit flex items-center justify-center'>
          {index === 1 && (<div className='w-[8vw] h-[5vw] mr-4  -mt-[.7vw]'><img className='object-cover object-center h-full w-full rounded-md ' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" /></div>)}
         <h1 className='pt-[2.3vw] h-full text-9xl leading-[.5] tracking-tight uppercase   font-semibold'>{item}</h1>
          </div>
       </div>
      })}
    </div>
    <div className='px-12 py-4 font-normal border-t-[1px]  font-["Neue_Montreal"] border-zinc-300 mt-40 flex justify-between items-center'>
      {['For public and private companies', 'From the first pitch to IPO'].map((item, index)=>
        <h6>{item}</h6>
    )}
    <div className='start-btn flex gap-4 cursor-pointer'>
      <div className='px-4 uppercase py-1 border-[1px] rounded-full border-zinc-700 text-md'>start the project</div>
      <div className='px-2 py-2 border-[1px] rounded-full border-zinc-700 flex items-center justify-center'><span className='rotate-45'><FaArrowUpLong /></span></div>
    </div>
    </div>
   </div>
  )
}

export default home