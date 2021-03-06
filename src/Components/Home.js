import React from 'react'
import MyDp from "../assets/me.jpg"
import {TbArrowNarrowRight} from "react-icons/tb"
import { Link } from 'react-scroll'
const Home = () => {

 
  return (
    <div
    name="home"
    className="h-screen w-full bg-gradient-to-l from-black to-gray-800 pt-24"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-half mt-28">
        <h2 className="text-5xl sm:text-5xl md:text-7xl font-bold text-white  ">
          I'm a Front End <spna className ="text-purple-300">Web Developer</spna>
        </h2>
        <p className="text-white py-8 max-w-md md:text-xl ">
         My Name is  <span className='font-bold font-ptag text-3xl text-red-500'> Gurvinder Singh,</span> I have a Bachelor Degree In Computer & Information Science from Auckland University Of Technology. <br/> I <span className='text-red-500'>❤</span>  being a Web Developer because of the fact that it lets me create new things out of nothing.
        </p>

        <div>
            <Link 
              to="portfolio"
              smooth
              duration={500}
              className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-600 cursor-pointer mb-10"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <TbArrowNarrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

      <div className='md:pt-60 pb-28'>
        <img
          src={MyDp}
          alt="my profile"
          className="rounded-2xl mx-auto w-2/4 md:w-half "
        />
      </div>
    </div>
  </div>
  )
}

export default Home