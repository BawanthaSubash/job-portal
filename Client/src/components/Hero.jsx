import React, { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Hero = () => {

    const {setSearchFilter, setIsSearched} =useContext(AppContext)

    const titleRef =useRef(null)
    const locationRef =useRef(null)
    const jobTypeRef =useRef(null)

    const onSearch = () =>{
        setSearchFilter({
            title:titleRef.current.value,
            location:locationRef.current.value,
            jobType:jobTypeRef.current.value
        })
        setIsSearched(true)
    }



    return(
        <div className='container 2xl:px-20 mx-auto my-10'>
             <div className='bg-gradient-to-r from-slate-700 to-slate-900 text-white py-16 text-center mx-2 rounded-xl'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>Over 10,000+ jobs to apply</h2>
                <p className='mb-8 max-w-xl mx-auto text-sm front-light px-5'>Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!</p>
                <div className='flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto '>
                    <div className='flex items-center'>
                        <img className='h-4 sm:h-5' src={assets.search_icon} alt='' />
                        <input type='text' 
                        placeholder='Search for jobs'
                        className='max-sm:text-xs p-2 rounded outline-none w-full'
                        ref={titleRef}
                        />
                    </div>

                    <div className='flex items-center'>
                        <img className='h-4 sm:h-5' src={assets.location_icon} alt='' />
                        <input type='text' 
                        placeholder='Location'
                        className='max-sm:text-xs p-2 rounded outline-none w-full'
                        ref={locationRef}
                        />
                    </div>

                    <div className='flex items-center'>
                        <img className='h-4 sm:h-5' src={assets.suitcase_icon} alt='' />
                        <input type='text' 
                        placeholder='Job Type'
                        className='max-sm:text-xs p-2 rounded outline-none w-full'
                        ref={jobTypeRef}
                        />
                    </div>
                    <button onClick={onSearch} className='bg-blue-600 px-6 py-2 rounded text-white m-1'>Search</button>

                </div>
             </div>

             <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex'>
                <div className='flex justify-center gap-10 lg:gap-16 flex-wrap'>
                    <p className='font-medium'>Trusted by</p>
                    <img className='h-5'src={assets.microsoft_logo} alt="" />
                    <img className='h-9'src={assets.cargils_icon} alt="" />
                    <img className='h-7'src={assets.hemas_icon} alt="" />
                    <img className='h-7'src={assets.samsung_logo} alt="" />
                    <img className='h-12'src={assets.brandix_icon} alt="" />
                    <img className='h-12'src={assets.nestle_icon} alt="" />
                    <img className='h-7'src={assets.sltmobitel_icon} alt="" />
                    <img className='h-7'src={assets.unileaver_icon} alt="" />
                    <img className='h-7'src={assets.virtusa_icon} alt="" />



                </div>


             </div>

        </div>
    )

}
export default Hero