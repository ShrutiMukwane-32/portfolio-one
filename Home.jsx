import React from 'react';
import hero from '../one-portfolio/src/assets/hero.png'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div name="Home" className=' h-screen w-full  bg-gradient-to-b from-black to-gray-800'>
        <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div>
                <h2>
                    I'm a Full Stack Developer
                    
                </h2>
                <p>
                    I adept in working both front-end and back-end development process
                </p>
                <div>
                    <button>
                        Portfolio
                        <span>
                        < MdOutlineKeyboardDoubleArrowRight/>
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src="hero.png" alt="My Profile" />
        
            </div>
        </div>
    </div>
  )
}

export default Home
