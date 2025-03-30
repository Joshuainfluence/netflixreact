import HomePage from "./pages/home/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

import { Routes, Route } from "react-router-dom";
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
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />


    </Routes>
    {/* <Footer/> */}
    <Toaster/>
    </>
  )
}