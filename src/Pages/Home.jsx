import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className=' h-screen flex justify-center items-center gap-2 '>
            <Link to="/signup">
                <div className='w-[200px] h-[100px] bg-slate-700 flex justify-center items-center hover:bg-slate-900'>
                    <h1 className='text-2xl text-white'>Sign Up</h1>
                </div>
            </Link>
            <Link to="/login">
                <div className='w-[200px] h-[100px] bg-slate-700 flex justify-center items-center hover:bg-slate-900'>
                    <h1 className='text-2xl text-white'>Login</h1>
                </div>
            </Link>

        </div>
    )
}

export default Home