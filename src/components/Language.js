import React from 'react';
import lastbannerimg from "../images/calenderbannerfooter.png"


const Language = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#f9f9f9] gap-5 py-[80px]'>
    <h1 className="text-[40px] font-semibold">Your Swiss knife for <span className='text-blue-600'>learning any language .</span></h1>
    <p className='text-[18px] w-[800px] text-center text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. </p>
    <div>
      <img src={lastbannerimg}></img>
    </div>
    <div className='py-3 buttona px-8 rounded-lg font-semibold text-black bg-[#ffd60a]'> Learn More</div>
    </div>
  )
}

export default Language;