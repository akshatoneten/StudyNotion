import React from "react";
import bgtexture from "../images/bg _texture.png";
import servicefooter from "../images/learnhtml_services.png";
import servicesfooterblack from "../images/services_footer_black.png";
import "./Services.css";

const Services = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col  bg-black ">
        <h1 className=" text-white text-[40px] font-semibold">
          Unlock the <span className="text-blue-400">Power of Code</span>
        </h1>
        <p className="text-gray-400 font-semibold  ">
          Learn to build Anything You Can Imagine
        </p>
      </div>
      <div className="bg-black flex justify-center py-6 ">
        <div className="bg-[#161d29] border-b-[1px] py-1 px-3 rounded-full ">
          <ul className="flex justify-center items-center gap-10 text-gray-300 font-semibold cursor-pointer">
            <li className="text-white py-2 px-3 rounded-full bg-black">Free</li>
            <li>New to coding</li>
            <li>Most popular</li>
            <li>Skill paths</li>
            <li>Career paths</li>
          </ul>
        </div>
      </div>
      {/* threee boxes */}
      <div className="flex flex-col justify-around py-[70px] servicesbox">

        <div className="flex justify-around">
            {/*learn html  */}
        <div className="border-2 serviceboxqwerty bg-white flex flex-col justify-between border-gray-500 w-[320px] h-[300px] pt-6">
          <div className="px-6  flex flex-col gap-2">
            <h3 className="text-start text-gray-900 font-semibold text-[22px]">
              Learn HTML
            </h3>
            <p className="text-start text-[18px] text-gray-600 font-semibold ">
              Lorem ipsum dolor sit amet, conseetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="border-t-2 border-dashed py-2">
            <img src={servicefooter}></img>
          </div>
        </div>
        {/* learn CSS */}
        <div className="border-2 serviceboxqwerty bg-[#161d29] flex flex-col justify-between border-gray-500 w-[320px] h-[300px] pt-6">
          <div className="px-6  flex flex-col gap-2">
            <h3 className="text-start text-gray-300 font-semibold text-[22px]">
              Learn CSS
            </h3>
            <p className="text-start text-[18px] text-gray-500 font-semibold ">
              Lorem ipsum dolor sit amet, conseetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="border-t-2 border-dashed py-2">
            <img src={servicesfooterblack}></img>
          </div>
        </div>
        {/* Responsive web design */}
        <div className="border-2 serviceboxqwerty flex flex-col bg-[#161d29] justify-between border-gray-500 w-[320px] h-[300px] pt-6">
          <div className="px-6  flex flex-col gap-2">
            <h3 className="text-start text-gray-300 font-semibold text-[22px]">
            Responsive web design
            </h3>
            <p className="text-start text-[18px] text-gray-500 font-semibold ">
              Lorem ipsum dolor sit amet, conseetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="border-t-2 border-dashed py-2">
            <img src={servicesfooterblack}></img>
          </div>
        </div>
        </div>
        <div className='flex text-white gap-[30px] mx-auto mt-[80px]'>
            <div className='py-3 buttona px-8 rounded-lg text-black font-semibold bg-[#ffd60a]'>Explore Full Catalog</div>
            <div className='py-3 buttonb px-7 rounded-lg text-gray-200 font-semibold bg-[#5a6069]'>Learn More</div>
        </div>

      </div>
    </div>
  );
};

export default Services;
