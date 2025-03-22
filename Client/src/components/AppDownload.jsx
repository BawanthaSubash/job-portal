import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='container px-4 2xl:px-20 mx-auto my-10'>
        <div className='relative bg-gradient-to-r from-violet-50 to-purple-50 p-8 sm:p-16 lg:p-20 rounded-lg flex flex-col items-center text-center'>
            <div>
                <h1 className='text-2xl sm:text-3xl font-bold mb-6 max-w-md'>Download Mobile App For Better Experience</h1>
                <div className='flex gap-4 justify-center'>
                    <a href='#' className='inline-block'>
                        <img className='h-12' src={assets.play_store} alt='' />
                    </a>
                    <a href='#' className='inline-block'>
                        <img className='h-12' src={assets.app_store} alt='' />
                    </a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AppDownload