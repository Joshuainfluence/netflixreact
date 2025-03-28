import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />


    </Routes>
  )
}