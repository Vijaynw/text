import React from 'react'
import { Link } from 'react-router-dom'



function Navbar() {
  return (
    <>
    <div className='main_container h-screen '>
    
    <div className='flex justify-center text-[20px]'>
    <ul className='flex '>
    <Link to='home'>
       <li className='m-10'>
        Home
        </li> 
        </Link>
    <Link to='about'>

        <li className='m-10'>About</li>
    </Link>
    <Link to='contact'>

        <li className='m-10'>Contact</li>
    </Link>
      <a href="https://drive.google.com/file/d/162MZt3QjBPz7XVczghNLNOQc1-3rI5Gp/view?usp=share_link" target="_blank">

        <li className='m-10'>Resume</li>
    </a>
    </ul>
   
    <img className='absolute -z-11 mt-[100px] object-contain p-4'src="https://akshaysaini.in/img/plane.gif" alt="" />
    <p className='text-6xl absolute -z-12 mt-[350px] object-contain p-4'>Vijay Waghmare</p>
    <img className='absolute -z-10 object-contain p-4' src="https://akshaysaini.in/img/clouds.png" alt="" />
       
    </div>
    </div>
    </>
  )
}

export default Navbar
