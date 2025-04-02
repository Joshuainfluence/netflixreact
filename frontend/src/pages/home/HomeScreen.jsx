import React from 'react'
import { useAuthStore } from '../../store/authUser'
import Navbar from '../../components/Navbar'

const HomeScreen = () => {
  // getting logout from global state, it is more like a context`
  // const {logout} = useAuthStore();
  return (
    <>
      <div className="relative h-screen text-white">
        <Navbar />
        <img src="/extraction.jpg" alt="Hero image" className='absolute top-0 left-0 h-full w-full object-cover -z-50' />
        <div className="absolute top-0 left-0 h-full w-full object-cover -z-50 bg-black/50" aria-hidden="true">

        </div>
      </div>
    </>
  )
}

export default HomeScreen