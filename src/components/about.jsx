import React from 'react'

function about() {
  return (
    <div className='w-full h-[150vh] bg-[#CDEA67] relative rounded-tl-3xl rounded-tr-3xl'>
        <div className='head font-["Neue_Montreal"] font-normal pl-[3vw] py-[6vw]'>
            <h1 className='text-6xl w-[85%]'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to <span className='underline underline-offset-8 decoration-[3px]'>raise funds</span>, <span className='underline underline-offset-8 decoration-[3px]'>sell prod­ucts</span>, <span className='underline underline-offset-8 decoration-[3px]'>ex­plain com­plex ideas</span>, <span className='underline underline-offset-8 decoration-[3px]'>and hire great peo­ple</span>.</h1>
        </div>

        <div className='para w-full border-t-[.5px] border-b-[.5px] border-zinc-500 flex pb-[8vw] pt-[2vw] px-[3vw] font-["Neue_Montreal"] font-normal'>
            <h6 className='w-1/2 capitalize text-xl font-normal'>what you can expect:</h6>
            <div className='para2 w-1/3 px-[6vw] flex flex-col gap-[3vw] text-lg -ml-[4vw] font-normal'>
                <h6>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</h6>
                <h6>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h6>
            </div>
            <div className='para3 capitalize text-lg mt-[8vw] ml-[2vw] font-normal'>
            <h6>s:</h6>
            <h6>instagram</h6>
            <h6>behance</h6>
            <h6>facebook</h6>
            <h6>linkedin</h6>     
            </div>
        </div>

        <div className='w-full h-[60vh] flex px-[3vw] py-[1vw] gap-[1vw] relative font-["Neue_Montreal"] font-normal '>
          <div className='w-1/2 h-full  px-[3vw] py-[2vw] '>
          <h1 className='text-[3vw] mb-[2vw]'>Our approach:</h1>
          <button className='uppercase pl-[2vw] rounded-full pr-[1.5vw] py-[1.2vw] bg-black text-white flex items-center gap-[2.5vw]'>read more
          <div className='w-2 h-2 bg-white rounded-full'></div>
          </button>
          </div>
          <div className='w-1/2 h-full bg-blue-400 rounded-xl overflow-hidden'>
            <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
          </div>
        </div>
    </div>
  )
}

export default about