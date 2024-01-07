import React, { useContext } from 'react'
import { experience, jobTypes, jobs } from '../utils/data'
import { Context } from '../context/AppContext'

const Leftbar = () => {
  const {selectedJobType, setSelectedJobType, selectedExperience, setSelectedExperience, handleJobTypeChange, handleExperienceChange, finalData, handleReset} = useContext(Context)
  return (
    <>
    <div className='w-2/5 sm:w-1/3 bg-gray-200 p-4 rounded-sm flex flex-col gap-3'>
      <h1 className='text-xl space-x-2'>Filter Job</h1>
      <div className='flex flex-col gap-1'>
        <h1 className='font-medium'>Job Type</h1>
        {
            Array.from(new Set(jobs.map((item) => item.jobType))).map((jobType) => {
            return(
              <>
              <div className='flex items-center gap-1' key={jobType}>
                <input type="checkbox"
                value={jobType}
                checked={selectedJobType.includes(jobType)}
                onChange={() => handleJobTypeChange(jobType)}
                />
                <h1 className='text-sm'>{jobType}</h1>
              </div>
              </>
            )
          })
        }
      </div>

      <div className='flex flex-col gap-1'>
        <h1 className='font-medium'>Experience</h1>
        {
            Array.from(new Set(jobs.map((item) => item.experience))).map((experience) => {
            return(
              <>
              <div className='flex items-center gap-1'>
                <input type="checkbox" 
                value={experience}
                checked={selectedExperience.includes(experience)}
                onChange={() => handleExperienceChange(experience)}
                />
                <h1 className='text-sm'>{experience}</h1>
              </div>
              </>
            )
          })
        }
      </div>
      <h1 className='md:text-xl space-x-2 bg-red-400 text-white py-1 px-2 text-center cursor-pointer' onClick={handleReset}>RESET FILTER</h1>
    </div>
    </>
  )
}

export default Leftbar