import React from 'react'
import { Link } from 'react-router-dom'

const AuthScreen = () => {
    return (
        <div className="hero-bg relative">

            {/* Navbar */}
            <header className='max-w-6xl mx-auto flex items-center justify-between p-4 pb-10 '>
                <img src="/logo.png" alt="logo" className='w-32 md:w-52' />
                <Link to={"/login"} className='text-white bg-red-600 py-1 px-2 rounded'>
                Sign in
                </Link>
            </header>
        </div>
    )
}

export default AuthScreen