import React, { useContext } from 'react'
import { Context } from '../context/AppContext';

const Pagination = () => {
const {totalPosts, postsPerPage, setCurrentPage, currentPage} = useContext(Context)

    let pages = [];
    for (let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }
  return (
    <>
    <div className='bg-red-600 w-fit p-1 rounded-full'>
        {
            pages.length <= 1 ? "" :
            pages.map((page, index)=>{
                return <button key={index} className={`border-2 border-gray-200 px-2 m-1 rounded-full ${currentPage == page ? "bg-gray-800 text-white" : ""}`} onClick={()=> setCurrentPage(page)}>{page}</button>
            }) 
        }
    </div>
    </>
  )
}

export default Pagination