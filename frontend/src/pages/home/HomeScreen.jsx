import React from 'react'
import { useAuthStore } from '../../store/authUser'
import Navbar from '../../components/Navbar'

const HomeScreen = () => {
  // getting logout from global state, it is more like a context`
  // const {logout} = useAuthStore();
  return (
    <>
   <div className="relative h-screen text-white bg-black">
    <Navbar/>
   </div>
   </>
  )
}

export default HomeScreen