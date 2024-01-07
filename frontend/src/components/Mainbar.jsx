import React from 'react'
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'
import SearchingAndFiltering from './SearchingAndFiltering'

const Mainbar = () => {
  return (
    <>
    <div className='flex flex-col gap-5 px-4 sm:px-10 my-4'>
        <SearchingAndFiltering />
    <div className='flex gap-2 sm:gap-5'>
        <Leftbar />
        <Rightbar />
    </div>
    </div>
    </>
  )
}

export default Mainbar