import React from 'react'
import Navbar from "./Navbar"
import Lottie from 'react-lottie';
import animationData from '../lotties/kiss-of-the-heart.json';
import Timeline from "./TimeLine"
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
      <Navbar />
      <div className="flex w-full justify-center">
          <div>
          <Lottie options={defaultOptions} height={400} width={400} />
          </div>
          <div className="flex flex-col justify-center">
            <p className='text-[100px]'>Vijay Waghmare</p>
            <p className='text-[50px]'>A passionate Software Developer from India</p>
          </div>
          {/* <img className='absolute -z-10 object-contain p-4' src="https://akshaysaini.in/img/clouds.png" alt="" /> */}
        </div>
        <div className='border p-10 flex justify-center'>
        <div>
        <p className='text-center text-[40px] mb-1'>My Life</p>
        <hr />
        <div className='mt-5'>

        <Timeline/>   
        </div>
        </div>
        </div>
    </>
  )
}

export default Home