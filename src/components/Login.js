import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValiddata } from '../utils/Validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSigninForm , setisSigninForm ] =useState(true);
  const [errorMessage , setErrormessage]= useState(null);

  const dispatch = useDispatch();

   const name = useRef(null);
  const email =useRef(null);
  const password =useRef(null);

  
  const toggleSigninform =()=>{
    setisSigninForm(!isSigninForm);
  }

  const handleButtonclick =() =>{
    //Validate form data
    const message =checkValiddata( email.current.value , password.current.value );
     setErrormessage(message);
     if(message) return;

     if(!isSigninForm){
        //sign up logic
        createUserWithEmailAndPassword(auth ,
           email.current.value , 
           password.current.value
          )
             .then((userCredential) => {
              const user = userCredential.user;

              updateProfile(user , {
                displayName : name.current.value , 
                photoURL:"https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e",
              }).then(() => {
                //profile updated
                const {uid , email , displayName , photoURL} = auth.currentUser;
                  dispatch(
                    addUser({
                        uid:uid ,
                        email : email ,
                        displayName : displayName , 
                        photoURL : photoURL
                      })
                    );
                
              }).catch((error) => {
                //error occured
                setErrormessage(error.message);
              });
              
             })

             .catch((error) => {
              const errorCode =error.code;
              const errorMessage = error.message;
              setErrormessage(errorCode + "-" + errorMessage);
             })
        
     }
     else {
        //sign in logic
        signInWithEmailAndPassword(auth ,
           email.current.value , 
           password.current.value)

        .then((userCredential) => {

         const user = userCredential.user;

        })
        .catch((error) => {
         const errorCode =error.code;
         const errorMessage = error.message;
         setErrormessage(errorCode + "-" + errorMessage);
        });
     }
  };

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