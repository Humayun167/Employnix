import React, { useState } from 'react';
import { assets } from './../assets/assets';

const RecruiterLogin = () => {
    const [state,setState] = useState('Login')
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')

    const [image,setImage] = useState(false)

    const [isTextDataSubmited,setIsTextDataSubmited] = useState(false)

    const onSubmitHandler =async (e) =>{
        e.preventDefault()

        if (state == 'SignUp'&& !isTextDataSubmited){
            setIsTextDataSubmited(true)
            
        }
    }        


    return (
        <div className='absolute top-0 right-0 left-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
            <form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-xl text-slate-500' action="">
                <h1 className='text-center text-2xl text-neutral-700 font-medium'>Recruiter {state}</h1>
                <p className='text-sm '>welcome back please Signup</p>
              {state === 'Sign Up' && isTextDataSubmited ?
              <>
              </>
              :   <>
              {state !== 'Login' && (
                  <div className='border px-4 py-2 items-center gap-2 rounded-full mt-5'>
                  <img src={assets.person_icon} alt="" />
                  <input className='outline-none text-sm' onChange={e =>setName(e.target.value)} value={name} type="text" placeholder='company name' required />
              </div>
              )}
              
              <div className='border px-4 py-2 items-center gap-2 rounded-full mt-5'>
                  <img src={assets.email_icon} alt="" />
                  <input className='outline-none text-sm' onChange={e =>setEmail(e.target.value)} value={email} type="email" placeholder='company Email' required />
              </div>
              <div className='border px-4 py-2 items-center gap-2 rounded-full mt-5'>
                  <img src={assets.location_icon} alt="" />
                  <input className='outline-none text-sm' onChange={e =>setPassword(e.target.value)} value={password} type="password" placeholder='Password' required />
              </div>
              <p className='text-blue-900'>Forgot password?</p>
              </>}
              

                <button type='submit' className='bg-blue-600 w-full text-white py-2 rounded-full ' type='submit'>{state==='Login'?'login':isTextDataSubmited ? 'create Account':'next'}</button>          
                   
                   {
                    state === 'Login'
                    ?      <p className='mt-5 text-center'>Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={()=> setState("Sign Up")}>Sign Up</span></p>
                    :  <p className='mt-5 text-center'>Already have an account <span className='text-blue-600 cursor-pointer' onClick={()=> setState("Login")}>Login</span></p>
                   }

        
            
            </form>
        </div>
    );
};

export default RecruiterLogin;