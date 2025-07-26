
import React from 'react'
import { Link } from 'react-router-dom'

 const Register = () => {
  return (
    <div className='min-h-screen max-w-screen bg-[#cdcae9] flex justify-center items-center'>
        <div className='w-[350px] text-[#ffffff] p-2'>
            <div className='bg-[#6f68d1] p-3 rounded-md'>
                <h2 className='text-2xl mb-3 font-bold'>Welcome to Ecommerce</h2>
                <p className='text-sm mb-3 font-medium'>Please register your account</p>

                <form>
                   <div className='flex flex-col w-full gap-1 mb-3'>
                        <label htmlFor="name">Name</label>
                        <input className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' 
                           type="text" name="name" id="name" 
                           placeholder='Name' required />
                   </div>
                   <div className='flex flex-col w-full gap-1 mb-3'>
                        <label htmlFor="email">Email</label>
                        <input className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' 
                           type="email" name="email" id="email" 
                           placeholder='Email' required />
                   </div>
                   <div className='flex flex-col w-full gap-1 mb-3'>
                        <label htmlFor="password">Password</label>
                        <input className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' 
                           type="password" name="password" id="password" 
                           placeholder='Password' required />
                   </div>
                   <div className='flex items-center w-full gap-3 mb-3'>
                       <input className='w-4 h-4 text-blue-600
                        focus:ring-blue-500 bg-gray-200 rounded border-gray-300
                         overflow-hidden'
                          type="checkbox" name="checkbox" id="checkbox" />
                          <label htmlFor="checkbox">I agree to privacy policy & treams</label>
                   </div>
                   <button className='bg-slate-800 w-full
                    hover:shadow-blue-300/50 hover:shadow-lg
                     text-white rounded-md px-7 py-2 mb-3'>
                      Sign Up
                    </button>
                    <div className='flex items-center mb-3 gap-3 justify-center'>
                      <p>
                        Already Have an account ?
                         <Link to='/login' className='font-bold'> Sign In</Link>
                      </p>

                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register