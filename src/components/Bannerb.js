import React from 'react';
import bannerbimg from "../images/banneraimg.png";
import "./Bannerb.css";


const Bannerb = () => {
  return (
    <div className="grid grid-cols-2 px-[100px] py-[100px] bg-black justify-center items-center">
    {/* second */}
    <div>
        <img src={bannerbimg}></img>
      </div>
    {/* first */}
      <div className="flex flex-col justify-center items-center">
        <h1
          className="text-white text-[40px] font-semibold" aria-label="Hi! I'm a developer">
          Start &nbsp;<span class="typewriter text-blue-400"></span>
        </h1>
        <p className="text-gray-400 text-start">
            Our courses are designed and taught by industry experts who<br></br> have uears of expereince in coding and are passionate about<br></br> sharing their knowledge with you .
        </p>
        <div className='flex text-white gap-[30px] mt-7'>
            <div className='py-3 buttona px-8 rounded-lg text-black font-semibold bg-[#ffd60a]'>Continue Lesson</div>
            <div className='py-3 buttonb px-7 rounded-lg text-gray-200 font-semibold bg-[#5a6069]'>Learn More</div>
        </div>
      </div>
    </div>
  )
}

export default Bannerb