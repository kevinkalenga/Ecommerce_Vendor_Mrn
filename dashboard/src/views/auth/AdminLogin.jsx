import React, { useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { admin_login } from '../../store/Reducers/authReducer';
import {PropagateLoader} from 'react-spinners'

 const AdminLogin = () => {
  
    const dispatch = useDispatch();
    const {loader} =useSelector((state) => state.auth)
     
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
       dispatch(admin_login(state))
       
     }
  
     const overrideStyle = {
       display : 'flex',
       margin : '0 auto',
       height : '24px',
       justifyContent : 'center',
       alignItem : 'center'
     }
  
  return (
    <div className='min-h-screen max-w-screen bg-[#cdcae9] flex justify-center items-center'>
        <div className='w-[350px] text-[#ffffff] p-2'>
            <div className='bg-[#6f68d1] p-3 rounded-md'>
                <div className='h-[70px] flex justify-center items-center'>
                    <div className='w-[180px] h-[50px]'>
                        <img className='w-full h-full' src="http://localhost:3000/images/logo.png" alt="logo" />
                    </div>
                </div>

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
                 
                   <button disabled={loader ? true : false} className='bg-slate-800 w-full
                    hover:shadow-blue-300/50 hover:shadow-lg
                     text-white rounded-md px-7 py-2 mb-3'>
                      {
                        loader ? <PropagateLoader color='#fff' cssOverride={overrideStyle} /> : 'Login'
                      }
                    </button>
                    
                   
                   
                </form>
            </div>
        </div>
    </div>
  )
}

export default AdminLogin
