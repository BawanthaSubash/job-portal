import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

 export const AppContext = createContext()

 export const AppContextProvider = (props) =>{

    const [searchFilter,setSearchFilter] = useState({
        title:'',
        location:'',
        jobType:''
    })

    const [isSearched,setIsSearched] = useState(false)

    const [jobs, setJobs] = useState([])

    const [showRecuiterLogin,setShowRecuiterLogin] = useState(false)

    // Function to fetch jobs
    const fetchJobs = async () => {
        setJobs(jobsData)
    }

    useEffect(()=>{
        fetchJobs()
    },[])

    const value = {
        setSearchFilter,searchFilter,
        isSearched,setIsSearched,
        jobs, setJobs,
        showRecuiterLogin,setShowRecuiterLogin
    }

    return(<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)

}