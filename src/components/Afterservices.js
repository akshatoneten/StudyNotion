import React from "react";

const Afterservices = () => {
  return (
    <div className="bg-[#f9f9f9]">
    {/* first part start */}
      <div className="grid grid-cols-2 py-12 gap-12 ">
        {/* first */}
        <div className="flex flex-col justify-start items-end gap-2 text-[40px] font-semibold">
          <h1 className="text-justify">
            <p>Get the skills you need for a</p> 
            <span className="text-blue-600">
               job that is in demand.
            </span>
          </h1>
        </div>
        {/* second */}
        <div className="flex flex-col justify-between gap-12">
          <p className="text-[18px] mt-4 text-gray-500 text-justify">
            The modern studyNotion is the dicates its own terms. Today, to be<br></br> a
            competetive specialist requires more than professional skills.
          </p>
          <div className="py-3 w-[150px] buttona px-8 rounded-lg text-black font-semibold bg-[#ffd60a]">
            Learn More
          </div>
        </div>
      </div>
    {/* first part end  */}
    
    </div>
  );
};

export default Afterservices;
