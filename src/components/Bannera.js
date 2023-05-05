import React from "react";
import "./Bannera.css";
import banneraimg from "../images/banneraimg.png"

const Bannera = () => {
  return (
    <div className="grid grid-cols-2 py-[100px]  bg-black justify-center items-center">
    {/* first */}
      <div className="flex flex-col justify-center items-center">
        <h1
          className="text-white text-[40px] font-semibold" aria-label="Hi! I'm a developer">
          Unlock Your &nbsp;<span class="typewriter text-blue-400"></span>
          <br></br>with our online courses.
        </h1>
        <p className="text-gray-400 text-start">
            Our courses are designed and taught by industry experts who<br></br> have uears of expereince in coding and are passionate about<br></br> sharing their knowledge with you .
        </p>
        <div className='flex text-white gap-[30px] mt-7'>
            <div className='py-3 buttona px-8 rounded-lg text-black font-semibold bg-[#ffd60a]'>Try it Yourself</div>
            <div className='py-3 buttonb px-7 rounded-lg text-gray-200 font-semibold bg-[#5a6069]'>Learn More</div>
        </div>
      </div>
      {/* second */}
      <div>
        <img src={banneraimg}></img>
      </div>
    </div>
  );
};

export default Bannera;
