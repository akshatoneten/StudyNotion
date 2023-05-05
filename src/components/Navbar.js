import React from 'react';
import logo from '../images/Studynotion_logo.png';
import headerlogo from '../images/studynotion header icons.png';
import userimage from '../images/own pic.jpg';

const Navbar = () => {
  return (
    <div className='flex bg-black items-center justify-around'>
        <div className='cursor-pointer'>
            <img src={logo}></img>
        </div>
        <div>
            <ul className='text-white flex gap-6'>
                <li>Home</li>
                <li>Catalog </li>
                <li>Resources </li>
                <li>Community </li>
                <li>Company </li>
                <li>Practice</li>
            </ul>
        </div>
        <div className='flex gap-2 cursor-pointer'>
        <img src={headerlogo}></img>
        <img className='w-9 rounded-full' src={userimage}></img>
        </div>
    </div>
  )
}

export default Navbar ;