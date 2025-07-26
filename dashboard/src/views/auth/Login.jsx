import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

 const Login = () => {
  
     
     const [state, setState] = useState({
        
        email: "",
        password: ""
     })
   
     const inputHandle = (e) => {
        setState({
         ...state,
         [e.target.name] : e.target.value
        })
     }
   
     const submit = (e) => {
       e.preventDefault();
       console.log(state)
     }
  
  
  
  return (
    <div className='min-h-screen max-w-screen bg-[#cdcae9] flex justify-center items-center'>
        <div className='w-[350px] text-[#ffffff] p-2'>
            <div className='bg-[#6f68d1] p-3 rounded-md'>
                <h2 className='text-2xl mb-3 font-bold'>Welcome to Ecommerce</h2>
                <p className='text-sm mb-3 font-medium'>Please Sign In your account</p>

                <form onSubmit={submit}>
                   
                   <div className='flex flex-col w-full gap-1 mb-3'>
                        <label htmlFor="email">Email</label>
                        <input onChange={inputHandle} value={state.email}  className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' 
                           type="email" name="email" id="email" 
                           placeholder='Email' required />
                   </div>
                   <div className='flex flex-col w-full gap-1 mb-3'>
                        <label htmlFor="password">Password</label>
                        <input onChange={inputHandle} value={state.password}  className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' 
                           type="password" name="password" id="password" 
                           placeholder='Password' required />
                   </div>
                 
                   <button className='bg-slate-800 w-full
                    hover:shadow-blue-300/50 hover:shadow-lg
                     text-white rounded-md px-7 py-2 mb-3'>
                      Sign In
                    </button>
                    <div className='flex items-center mb-3 gap-3 justify-center'>
                      <p>
                        Don't Have an account ?
                         <Link to='/register' className='font-bold'> Sign Up</Link>
                      </p>

                    </div>
                    <div className='w-full flex justify-center items-center mb-3'>
                         <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                         <div className='w-[10%] flex justify-center items-center'>
                            <span className='pb-1'>OR</span>
                         </div>
                         <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <div className='w-[135px] h-[35px] 
                        flex rounded-md bg-orange-700
                         hover:shadow-orange-700/50 justify-center cursor-pointer
                          items-center overflow-hidden'>
                                 <span>
                                    <FcGoogle className='font-bold' />
                                 </span>
                        </div>
                        <div className='w-[135px] h-[35px] 
                        flex rounded-md bg-blue-700
                         hover:shadow-blue-700/50 justify-center cursor-pointer
                          items-center overflow-hidden'>
                                 <span>
                                    <FaFacebook className='font-bold' />
                                 </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
