import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className='px-4 sm:px-10 my-4 bg-gray-200 flex flex-col gap-5 sm:flex-row sm:justify-between py-10'>
      <div>
         <Link to='/'>
            <div className='text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>DevJob Portal</div>
          </Link>
          <p className='font-medium text-sm'>Find your dream job here.</p>
      </div>
      <div className='flex flex-col gap-1'>
        <p className='font-medium font-mono'>SUBSCRIBE US</p>
        <div className='h-[30px] flex items-center gap-2'>
          <input type="email" placeholder='send your email...' className='h-full border-black border-[1px] px-2'/>
          <button className='h-full bg-red-500 px-2 rounded-sm text-white'>Subscribe</button>
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <p className='font-medium font-mono'>Follow Us</p>
        <div className='flex items-center gap-1 text-red-500'>
        <FaFacebook />
        <FaInstagram />
        <FaGithub />
        <FaLinkedin />  
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <p className='flex items-center gap-1 font-medium font-mono'>Call Us <span className='text-blue-500'><FaPhone /></span></p>
        <p className='text-xs font-medium'>+977 9812324355</p>
      </div>
    </div>
    </>
  )
}

export default Footer