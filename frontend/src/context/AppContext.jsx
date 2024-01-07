import React, { createContext, useState } from 'react'
import { jobs } from '../utils/data'
export const Context = createContext()

const AppContext = ({children}) => {
      //SEARCHING
      const [search, setSearch] = useState("")
      
      // FILTERING 
      const [category, setCategory] = useState("all")
      const filteredData = category === "all" ? jobs : jobs.filter((item)=>item.location === category)

      // CHECKBOX FILTERING
      const [selectedJobType, setSelectedJobType] = useState([]);
      const [selectedExperience, setSelectedExperience] = useState([]);

      const handleJobTypeChange = (jobType) => {
        if (selectedJobType.includes(jobType)) {
          setSelectedJobType(selectedJobType.filter((c) => c !== jobType));
        } else {
          setSelectedJobType([...selectedJobType, jobType]);
        }
      };

      const handleExperienceChange = (experience) => {
        if (selectedExperience.includes(experience)) {
          setSelectedExperience(selectedExperience.filter((sc) => sc !== experience));
        } else {
          setSelectedExperience([...selectedExperience, experience]);
        }
      };

      const finalData = filteredData.filter((item) => {
        return (
          (selectedJobType.length === 0 || selectedJobType.includes(item.jobType)) &&
          (selectedExperience.length === 0 || selectedExperience.includes(item.experience))
        );
      });

      const handleReset = () => {
        setSelectedJobType([])
        setSelectedExperience([])
      }

     // PAGINATION
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(3)
  const lastPostIndex = postsPerPage * currentPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = finalData.slice(firstPostIndex, lastPostIndex);
  const totalPosts = filteredData.length;
  return (
    <Context.Provider value={{search, setSearch, category, setCategory, selectedJobType, setSelectedJobType, selectedExperience, setSelectedExperience, handleJobTypeChange, handleExperienceChange, finalData, handleReset, currentPage, setCurrentPage, postsPerPage, setPostsPerPage, currentPosts, totalPosts}}>
        {children}
    </Context.Provider>
  )
}

export default AppContext