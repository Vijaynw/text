import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div>
    <nav className='nav'>
    <Link to='home'>
       <li>
        🏠Home
        </li> 
        </Link>
    <Link to='about'>

        <li>🔎About</li>
    </Link>
    <Link to='contact'>

        <li>🤔Contact</li>
    </Link>
    <a href="https://drive.google.com/file/d/162MZt3QjBPz7XVczghNLNOQc1-3rI5Gp/view?usp=share_link" target="_blank">

        <li>📃Resume</li>
    </a>
  
       
    </nav>
    </div>
    </>
  )
}

export default Navbar
