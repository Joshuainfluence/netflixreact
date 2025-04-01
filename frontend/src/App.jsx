import HomePage from "./pages/home/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

import { Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage.jsx";
import Footer from "./components/Footer.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authUser.js";
import { useEffect } from "react";

export default function App() {
  const {user, isCheckingAuth, authCheck } = useAuthStore()
  console.log("auth user is here: ", user)

  useEffect(()=>{
    authCheck()
  }, [])
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* if  user is visiting the login page while they're authenicated, redirect them back to the home page */}

      <Route path="/login" element={!user ? <LoginPage /> : <Navigate to= {"/"}/>} />
      {/* if  user is visiting the signup page while they're authenicated, redirect them back to the home page */}
      <Route path="/signup" element={!user ? <SignUpPage /> : <Navigate to={"/"}/>} />


    </Routes>
    {/* <Footer/> */}
    <Toaster/>
    </>
  )
}