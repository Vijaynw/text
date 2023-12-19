import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from "../Static/pic.png"
import signature from "../Static/signature.png"
import html from "../Static/html.png"
import css from "../Static/css3.png"
import javascript from "../Static/javascript.png"
import react from "../Static/react.png"
import redux from "../Static/redux.png"
import react_router from "../Static/react-router-mark-color.png"
import jest from "../Static/jest.png"
import tailwind from "../Static/tailwind.png"


function Home() {
  const [ct, setCt] = useState(0)
  const [desc, setDesc] = useState(['a Proud  India', 'Frontend Developer'])
  useEffect(() => {
    const t = setInterval(() => {
      setCt(ct + 1)
    }, 1000)
    return (() => {

      clearInterval(t)
    })
  })
  return (
    <>  
      <div className='main_container h-screen bg-[#41b0bf] text-[white]'>
        {/* Landing page */}

        <div className='flex justify-center text-[20px]'>
          {/* Navbar */}

          <div className='fixed w-[100vw] flex justify-center text-black bg-[#41b0bf] shadow-xl rounded-xl z-10'>
            <ul className='flex text-3xl '>
              <a href=' ' to='home'>
                <li className='m-10'>
                  About
                </li>
              </a>
              <a href='#project'>
                <li className='m-10'>Project</li>
              </a>
              <a href='#contact'>
                <li className='m-10'>Contact</li>
              </a>
            </ul>
          </div>
          {/* Navbar End */}

          <img className='absolute -z-11 mt-[200px] object-contain p-4' src="https://akshaysaini.in/img/plane.gif" alt="" />
          <p className='name text-[91px]  leading-normal font-[Sacramento,cursive] absolute -z-12 mt-[450px] object-contain p-4'>Vijay Waghmare</p>
          {/* <img className='absolute -z-11 mt-[350px] object-contain p-4' src={signature} alt="signature" /> */}
          <p className='name text-[50px]  leading-normal font-[Sacramento,cursive] absolute -z-12 mt-[660px] object-contain p-4'>I am passionate Front-end Developer from INDIA</p>
          <img className='absolute -z-10 object-contain p-4' src="https://akshaysaini.in/img/clouds.png" alt="" />


        </div>

      </div>

      {/* About */}
      <div id='about' className='h-[100vh] flex justify-center items-center flex-col bg-[#ffffff]'>

        
            <div className='border-b ml-[200px] text-4xl text-[#838383]'>
              <p className=''>Hello there 👋</p> <br />
              <p className=' mt-2'>I am Vijay Waghmare, a 24 year old Web developer and YouTuber living in Pune, India.  I am a Computer Science Engineer, currently working with awesome folks at FIS Global.
                <br /><br />
                Have a look at my skills section or just connect with me on LinkedIn. <br /> I am always excited to do business with like minded people, lets discuss over coffee.</p> <br /> <br />
              <button className=''> <a href="https://drive.google.com/file/d/162MZt3QjBPz7XVczghNLNOQc1-3rI5Gp/view?usp=share_link" target="_blank" rel="noreferrer">Click to download resume 📑 </a></button> <br /> <br />
            </div>

          
          <h1 className='text-2xl mt-10 text-[#838383]'>Glad to have these with me</h1>
          <div className='flex p-2 border-b shadow-xl mt-[50px]'>
            <img className='w-[100px] object-contain ' src={html} alt='html'/>
            <img className='w-[100px] object-contain ' src={css} alt='html'/>
            <img className='w-[100px] object-contain ' src={javascript} alt='html'/>
            <img className='w-[100px] object-contain ' src={react} alt='html'/>
            <img className='w-[100px] object-contain ' src={redux} alt='html'/>
            <img className='w-[100px] object-contain ' src={react_router} alt='html'/>
            <img className='w-[100px] object-contain ' src={tailwind} alt='html'/>
            <img className='w-[100px] object-contain ' src={jest} alt='html'/>
          </div>
       
      </div>

      {/* Project */}
      <div id='project' className='mb-10 h-[100vh] flex justify-center items-center flex-col bg-[#ffffff]'>

        <div className='h-[100px] flex justify-center items-center '>
          <h1 className='flex justify-center text-5xl'>Project </h1>
        </div>




      </div>
  
    </>
  )
}

export default Home
