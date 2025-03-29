import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authUser.js'

const SignUpPage = () => {
    const {searchParams} = new URL(document.location)
    const emailValue = searchParams.get("email") 

    const [email, setEmail] = useState(emailValue || "");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {signup} = useAuthStore()

    const handleSignup = (e) => {
        e.preventDefault();
        console.log(email, username, password);
        signup({email, username, password})
    }
  return (
    <div className='h-screen w-full hero-bg '>
        <header className='max-w-6xl mx-auto flex items-center justify-between p-4 '>
            <Link to={"/"}>
                <img src="/veno.png" alt="logo" className='w-52'/>
                {/* <h1 className='text-5xl text-red-500 font-bold'>VENOSTREAMS</h1> */}

            </Link>
        </header>

        <div className="flex justify-center items-center mt-10 mx-3">
            <div className="w-full max-w-md p-8 space-y-6 bg-black/70 rounded-lg shadow-md">
                <h1 className='text-center text-white text-2xl font-bold mb-4'>Sign Up</h1>
                <form className="space-y-4" onSubmit={handleSignup}>
                    <div>
                        <label htmlFor="email" className='text-sm font-medium text-gray-300 block'>Email</label>
                        <input
                         type="email" 
                         ame="" 
                         id="email" 
                         className='w-full px-3 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
                         placeholder='you@example.com'
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         />
                         
                    </div>

                    <div>
                        <label htmlFor="username" className='text-sm font-medium text-gray-300 block'>Username</label>
                        <input
                         type="text" 
                         ame="" 
                         id="username" 
                         className='w-full px-3 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
                         placeholder='john doe'
                         value={username}
                         onChange={(e) => setUsername(e.target.value)}

                         />
                    </div>

                    <div>
                        <label htmlFor="password" className='text-sm font-medium text-gray-300 block'>Password</label>
                        <input
                         type="password" 
                         ame="" 
                         id="password" 
                         className='w-full px-3 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
                         placeholder='****'
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}

                         />
                    </div>

                    <button className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 ">Sign Up</button>
                </form>
                <div className="text-center text-gray-400">
                    Already a member? <Link to={'/login'} className='text-red-500 hover:underline'>Sign In</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUpPage