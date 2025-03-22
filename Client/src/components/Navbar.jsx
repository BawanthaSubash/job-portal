import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

    const {openSignIn} = useClerk()
    const {user} = useUser()

    const navigate = useNavigate()

    const { setShowRecuiterLogin } = useContext(AppContext)


    return(
        <div className='shadow py-0'>
            <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
                <div className='flex items-center font-bold text-4xl text-sky-900'> {/*edited*/}
                <img onClick={()=> navigate('/')} className='cursor-pointer' src={assets.logon1n} alt='' />
                <p className='mt-10 self-start'>WORKIFY</p>
                </div>
                
                {
                    user
                    ?<div className='flex items-center gap-3'>
                        <Link to={'/applications'} >Applied Jobs</Link>
                        <p>|</p>
                        <p className='max-sm:hidden'>Hi, {user.firstName+" "+user.lastName}</p>
                        < UserButton />
                    </div>
                    :<div className='flex gap-4 max-sm:text-xs'>
                    <button onClick={e=> setShowRecuiterLogin(true)} className='bg-sky-900 text-white px-6 sm:px-9 py-2 rounded-full'>Recruiters Login</button>
                    <button onClick={ e => openSignIn()} className='bg-sky-900 text-white px-6 sm:px-9 py-2 rounded-full'>Login</button>
                </div>
                }
            
            </div>
            
        </div>
    )
}

export default Navbar