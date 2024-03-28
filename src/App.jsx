import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Marquee from './components/marquee';
import About from './components/about';
import Eyes from './components/eyes';

const App = () => {
  return (
    <>
   <div className='w-full h-screen relative bg-[#F1F1F1]'>
   <Navbar/> 
   <Home />
   <Marquee />
   <About />
   <Eyes />
   </div>
    </>
  )
}

export default App