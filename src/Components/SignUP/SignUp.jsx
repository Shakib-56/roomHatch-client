import React from 'react';
import { Link } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const SignUp = () => {
  const [errorMessage,setErrorMessage]=useState("");
  const [showPassword,setShowPassword]=useState(false);

const {createUser,SignInWithGoogle,setUser}=use(AuthContext)
const handleSignUp=(e)=>{
     e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        setErrorMessage(" ");
        // password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(passwordRegex.test(password)===false){
          setErrorMessage("Password must have one lowercase,one uppercase,one degit and 6 character or longer");
          return ;
        }


        createUser(email,password).then(result=>console.log(result)).catch(error=>setErrorMessage(error.message));


}
 const handleGoogleSignup = async () => {
    SignInWithGoogle().then(result=> {
      setUser(result.user)
    }).then(err=>console.log(err));
  };
    return (
        <div>
            <div className='mx-auto my-10 max-w-7xl flex justify-center px-6 md:px-20'>
    <div className="card bg-base-100 w-full mt-3 max-w-sm shrink-0 shadow-sm border-1 border-red-600">
      <div className="card-body">
        <h2 className='text-2xl text-center'>SignUp</h2>
        <form onSubmit={handleSignUp} className="fieldset  mt-2">
            
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Enter your name" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <div className='relative'>
            <label className="label">Password</label>
            <input type={showPassword ? "text":"password"} name='password' className="input" placeholder="Password" />
            <button 
            onClick={()=>{setShowPassword(!showPassword)}}
            className='absolute right-6 top-6 btn btn-xs'>
              {showPassword?<FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>}
            </button>
          </div>
          

          <div><a className="link link-hover">Forgot password?</a></div>
          {
          errorMessage && <p className='text-red-500'>{errorMessage}</p>
          }
          <button className="btn btn-neutral mt-4">SignUp now</button>
        </form>
        <p className='text-center text-lg font-bold'>or</p>
        <div className='flex'>
          <button onClick={()=>{handleGoogleSignup()}} className='px-13 md:px-20 cursor-pointer py-2 bg-base-200 w-full rounded flex items-center justify-center gap-2'><FcGoogle size={25} />SignUp with google</button>
        </div>
        <p >Already have an accoint  .Please <Link className='text-blue-500 underline' to={"/login"}>Login</Link></p>
        
      </div>
    </div>
</div>
        </div>
    );
};

export default SignUp;