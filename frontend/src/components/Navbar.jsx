import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [active, setActive] = useState("findJobs")
  const handleClick = ((navList)=>{
    setActive(navList)
  })
  return (
    <main>
        <div className='w-full h-[70px] bg-gray-200 flex justify-between items-center px-4 sm:px-10'>
          <Link to='/'>
            <div className='text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>DevJob Portal</div>
          </Link>
            <div className='flex items-center gap-8'>
                <div className='items-center gap-4 hidden md:flex font-mono'>
                  <Link to='/'>
                <p className={`font-normal cursor-pointer ${active == "findJobs" ? "text-red-500" : ""}`} onClick={()=>handleClick("findJobs")}>Find jobs</p>
                  </Link>
                <Link to='/about'>
                <p className={`font-normal cursor-pointer ${active == "companies" ? "text-red-500" : ""}`} onClick={()=>handleClick("companies")}>Companies</p>
                </Link>
                <Link to='/about'>
                <p className={`font-normal cursor-pointer ${active == "uploadJob" ? "text-red-500" : ""}`} onClick={()=>handleClick("uploadJob")}>Upload job</p>
                </Link>
                <Link to='/about'>
                <p className={`font-normal cursor-pointer ${active == "aboutUs" ? "text-red-500" : ""}`} onClick={()=>handleClick("aboutUs")}>About Us</p>
                </Link>
                </div>
                <div className='border-2 border-gray-800 px-4 py-1 rounded-full'>Sign Up</div>
            </div>
        </div>
    </main>
  )
}

export default Navbar