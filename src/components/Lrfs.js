import React from 'react'
import sideimage from "../images/side_icon.png";
import lastbanner from "../images/lastbanner.webp";
import greendataimg from "../images/lastbannerfooter_gren data.png"

const Lrfs = () => {
  return (
    <div className='grid grid-cols-2 py-[100px] bg-[#f9f9f9]'>
    {/* first part */}
        <div className='flex justify-center items-center gap-3'>
            <div>
                <img src={sideimage}></img>
            </div>
            <div className="flex flex-col gap-[70px] pt-3">
                <div>
                    <h5 className='text-start font-semibold text-[18px]'>Leadership</h5>
                    <p className='text-start text-gray-700'>Fully commited to the success company </p>
                </div>
                <div>
                    <h5 className='text-start font-semibold text-[18px]'>Responsibility</h5>
                    <p className='text-start text-gray-700'>Students will always be our top priority </p>
                </div>
                <div>
                    <h5 className='text-start font-semibold text-[18px]'>Flexibility</h5>
                    <p className='text-start text-gray-700'>The ability to switch is an important skills </p>
                </div>
                <div>
                    <h5 className='text-start font-semibold text-[18px]'>Solve the problem</h5>
                    <p className='text-start text-gray-700'>Code your way to a solution</p>
                </div>
            </div>
        </div>
        {/* second part */}
        <div className='relative'>
            <img className='absolute' src={lastbanner}></img>
            <img className='absolute pt-[350px] ml-[60px]' src={greendataimg}></img>
        </div>
    </div>
  )
}

export default Lrfs