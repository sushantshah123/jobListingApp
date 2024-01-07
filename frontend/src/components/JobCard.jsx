import React, { useContext, useEffect, useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { jobs } from '../utils/data'
import JobCardSkeleton from './JobCardSkeleton';
import { Context } from '../context/AppContext';
import { motion } from 'framer-motion';

const JobCard = () => {
    const [loading, setLoading] = useState(true)
  const {search, currentPosts} = useContext(Context)
    useEffect (()=>{
      setTimeout(()=>{
        setLoading(false)
      },2000)

    },[])
  return (
    <>
                    {
                        currentPosts.filter((item)=>{

                         return search.toLocaleLowerCase() === "" ? item : item.jobTitle.toLocaleLowerCase().includes(search)
                        })
                        .map((item, index) => {
                            return(
                                <>
                                 {
                        loading ? <JobCardSkeleton /> : 
                  
                    <motion.div 
                    initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
                    className='p-2 bg-gray-600 rounded-sm text-gray-200 flex flex-col gap-6' key={index}>
                        <div className='flex items-center gap-4'>
                            <div className='h-[40px] w-[40px]'>
                            <img src={item.company.profileUrl} alt="" className='h-full w-full'/>
                            </div>
                            <div>
                                <p className='font-medium'>{item.jobTitle}</p>
                                <div className='flex items-center gap-1 text-sm'>
                                    <span><IoLocationOutline /></span>
                                    <h5>{item.location}</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-xs line-clamp-3'>{item.company.about}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className={`text-xs bg-red-400 p-1 rounded-sm ${item.jobType === "Part-Time" ? "bg-blue-500" : ""}`}>{item.jobType}</p>
                            <h5 className='text-xs'>{item.createdAt.toLocaleString()}</h5>
                        </div>
                    </motion.div>
                        }
                     </>
                            )
                        })

                    }
    </>
  )
}

export default JobCard