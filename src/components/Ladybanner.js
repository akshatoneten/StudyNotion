import React from "react";
import ladylaptop from "../images/tuuttor.webp";
import "./Ladybanner.css";

const Ladybanner = () => {
  return (
    <div className="grid grid-cols-2 bg-[#000814] ">
      {/* image part */}
      <div className="p-[50px] ">
        <img className=" ladyimage" src={ladylaptop}></img>
      </div>
      {/* text part */}
      <div className="flex flex-col justify-center items-center">
        <div className="text-[40px] font-semibold ">
          <div className="text-white flex justify-center gap-3 items-center">
            <p>Become an</p> <p className="text-blue-600">instructor</p></div>
        </div>
        <p className="text-gray-500 w-[600px]">Instructor from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
        <div className='py-3 buttona px-8 rounded-lg text-black font-semibold bg-[#ffd60a] mt-20'>Start Teaching Today</div>
      </div>
    </div>
  );
};

export default Ladybanner;
