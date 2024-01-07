import { useContext } from 'react'
import JobCard from './JobCard'
import Pagination from './Pagination'
import { Context } from '../context/AppContext'

const Job = () => {

  return (
    <>
    <div className='flex flex-col gap-2'>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 xs:grid-cols-1 gap-2'>
        <JobCard />
    </div>
    <Pagination />
    </div>

    </>
  )
}

export default Job