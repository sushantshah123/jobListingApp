import React from 'react'

const JobCardSkeleton = () => {
  return (
    <>
     <div className='p-2 bg-gray-500 rounded-sm text-gray-200 flex flex-col gap-6'>
        <div className='flex items-center gap-4'>
            <div className='h-[40px] w-[40px] bg-gray-400 animate-pulse rounded-sm'>
            <img src="https://cdn-icons-png.flaticon.com/512/29/29495.png" alt="" className='h-full w-full'/>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-medium bg-gray-400 animate-pulse rounded-sm w-[100px] h-[20px]'></p>
                <div className='flex items-center gap-1 text-sm'>
                    <span className='bg-gray-400 animate-pulse rounded-full h-[14px] w-[14px]'></span>
                    <h5 className='bg-gray-400 animate-pulse rounded-sm h-[14px] w-[50px]'></h5>
                </div>
            </div>
        </div>
        <div>
            <p className='text-xs line-clamp-3 bg-gray-400 animate-pulse rounded-sm w-full h-[50px]'></p>
        </div>
        <div className='flex justify-between items-center'>
            <p className='text-xs p-1 bg-gray-400 animate-pulse rounded-sm h-[25px] w-[55px]'></p>
            <h5 className='text-xs bg-gray-400 animate-pulse rounded-sm h-[16px] w-[120px]'></h5>
        </div>
    </div>
    </>
  )
}

export default JobCardSkeleton