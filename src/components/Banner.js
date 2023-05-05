import React from 'react';
import arrow from "../images/arrow banner.png";
import "./Banner.css";
import mainbanner from "../images/mainbanner qwerty.webp";



const Banner = () => {
  return (
    <div className='flex flex-col gap-6 justify-center items-center h-[1200px] bg-black'>
        <div className="flex justify-center w-[250px] rounded-full gap-2 text-[18px] py-2 px-2 items-center text-[#5a6069] font-semibold bg-[#161d29]" >
        <p>Become an Instructor</p>
        <img src={arrow}></img>
        </div>
        <div>
        <h1 className='text-white text-[50px] font-semibold' aria-label="Hi! I'm a developer">
            Empower Your Future with &nbsp;<span  class="typewriter text-blue-400"></span>
        </h1>
        </div>
        <div>
            <p className='text-white'>
            With our online courses , you can learn at your own pace , from anywhere in the world , and get access to a wealth<br></br> of resources, including hands-on projects, quizzes, and personalized feedback from instructors .
            </p>
        </div>
        <div className='flex text-white gap-[30px] mt-7'>
            <div className='py-3 buttona px-8 rounded-lg text-black font-semibold bg-[#ffd60a]'>Learn More</div>
            <div className='py-3 buttonb px-7 rounded-lg text-black font-semibold bg-[#5a6069]'>Book a Demo</div>
        </div>
        <div>
            <img className='w-[1000px] mainbanner' src={mainbanner}></img>
        </div>
    </div>
  )
}

export default Banner;