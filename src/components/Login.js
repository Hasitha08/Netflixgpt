import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValiddata } from '../utils/Validate';

const Login = () => {
  const [isSigninForm , setisSigninForm ] =useState(true);
  const [errorMessage , setErrormessage]= useState(null);

  const name = useRef(null);
  const email =useRef(null);
  const password =useRef(null);
  
  const toggleSigninform =()=>{
    setisSigninForm(!isSigninForm);
  }
  const handleButtonclick =() =>{
    //Vlidate form data
    const message =checkValiddata( name.current.value , email.current.value , password.current.value );
     setErrormessage(message);

  }
  return (
    <div>
    <Header/>
    <div className='absolute'>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg'
    alt='netflix logo'/>
   </div>

   <form onSubmit={(e) => e.preventDefault()}
   className='w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white opacity-80'>

   <h1 className='font-bold text-3xl py-4'>
    {isSigninForm ? "Sign in" : "Sign up"}
    </h1>

   {!isSigninForm && (<input 
    ref={name}
    type='text' 
    placeholder='Full name' 
    className='p-4 my-4 w-full bg-transparent border rounded-lg'
    />
    )}

    <input 
    ref={email}
    type='text' 
    placeholder='Email or Phone Number' 
    className='p-4 my-4 w-full bg-transparent border rounded-lg '
    />
   
    <input 
    ref={password}
    type='password' 
    placeholder='Password' 
    className='p-4 my-4 w-full bg-transparent border rounded-lg'/>

    <p className='text-red-600  font-bold text-lg py-2'>{errorMessage}</p>

    <button className='p-4 my-6 bg-red-800 w-full rounded-lg hover:bg-red-600 font-bold '
     onClick={handleButtonclick}
    > {isSigninForm ? "Sign in" : "Sign up"}</button>

    <p className='py-4 cursor-pointer' onClick={toggleSigninform}>{isSigninForm ? "New to Netflix? Sign up now " : "Already registered? Sign in now"}</p> 
   </form>
   </div>
  )
}

export default Login