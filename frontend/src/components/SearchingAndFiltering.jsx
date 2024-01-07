import React, { useContext } from 'react'
import { Context } from '../context/AppContext';

const SearchingAndFiltering = () => {
  const {search, setSearch, setCategory} = useContext(Context)
  return (
    <>
    <div className='w-full flex flex-col gap-1 sm:justify-between sm:flex-row'>
      <form action="" className='w-full sm:w-1/2 relative'>
      <input type="search" placeholder='search 1000+ jobs...' className='px-2 py-1 bg-gray-200 w-full rounded-full outline-none' onChange={(e) => setSearch(e.target.value)} />
      {/* <div className='h-auto w-full shadow-md p-2 absolute rounded-lg top-[35px] bg-gray-200'>
        {search}
      </div> */}
      </form>
      <select className='w-[100px] border-2 border-gray-200 outline-none' onChange={(e)=>setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Germany">Germany</option>
        <option value="California">California</option>
        <option value="NewYork">NewYork</option>
      </select>
      </div>
    </>
  )
}

export default SearchingAndFiltering