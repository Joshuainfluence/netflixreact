import React from 'react'
import HomeScreen from './HomeScreen.jsx';
import AuthScreen from './AuthScreen.jsx';
import { useAuthStore } from '../../store/authUser.js';


const HomePage = () => {
   const {user} = useAuthStore()
   // const user = true;
  return (
     <>
      {/* this the homepage, will display homescreen if user is authenticated else it will display authscreen where the user will have to input email address and then signin/signup */}
        {user ? <HomeScreen/> : <AuthScreen/>}
     </>
  )
}

export default HomePage