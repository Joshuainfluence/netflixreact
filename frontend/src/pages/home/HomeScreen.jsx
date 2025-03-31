import React from 'react'
import { useAuthStore } from '../../store/authUser'

const HomeScreen = () => {
  // getting logout from global state, it is more like a context`
  const {logout} = useAuthStore();
  return (
    <div>Home screen
    <button onClick={logout}>Logout</button>
      
    </div>
    
  )
}

export default HomeScreen