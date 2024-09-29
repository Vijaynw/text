import React from 'react'
import Navbar from "./Navbar"
import Lottie from 'react-lottie';
import animationData from '../lotties/kiss-of-the-heart.json';
import Timeline from "./TimeLine"
import { Button } from 'antd';
const Home = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <>
      <div className='bg-neutral-100 overflow-x-hidden h-screen md:overflow-hidden md:flex md:justify-center md:items-center'>
        {/* <Navbar /> */}
          <div>
            <Lottie options={defaultOptions} height={400} width={400} />
            <div className="flex flex-col px-2">
              {/* <p className='md:text-[100px] text-[50px]'>Vijay Waghmare</p> */}
              <p className='md:text-[50px] text-[20px] text-center font-mono'>A passionate Software Developer from  <span className='font-bold'>India</span></p>
            </div>
            <div className='text-center mt-[150px] md:mt-[270px]'>
              <Button>
                Explore
              </Button>
            </div>
          </div>
      
        {/* <img className='absolute -z-10 object-contain p-4' src="https://akshaysaini.in/img/clouds.png" alt="" /> */}
      </div>
      <div className='p-10 h-screen flex justify-center'>
        <div>
          <p className='text-center text-[40px] mb-1'>My Life</p>
          <div className='mt-5'>
            <Timeline />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home