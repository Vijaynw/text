import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    <div className='home'>

   <h1>
    <p className='brush accent-line'>  Hello World ! 👋</p>
   </h1>
   <div className="quote">
            <p>“Be yourself; everyone else is already taken.” <br />
            ― Oscar Wilde 
            </p>
        </div>
        <button>
<Link to='about'>

      Hit to know more 🎯
</Link>
        </button>
    </div>
    </>
  )
}

export default Home
