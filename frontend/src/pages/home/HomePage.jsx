import React from 'react'
import HomeScreen from './HomeScreen.jsx';
import AuthScreen from './AuthScreen.jsx';
const user = false;

const HomePage = () => {
  return (
     <div>
        {user ? <HomeScreen/> : <AuthScreen/>}
     </div>
  )
}

export default HomePage