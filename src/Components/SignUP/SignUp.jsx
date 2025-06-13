import React from 'react';
import { Link, useNavigate } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { auth } from '../../Authentication/firebase.init';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
  const [errorMessage,setErrorMessage]=useState("");
  const [showPassword,setShowPassword]=useState(false);
  const navigate=useNavigate();

const {createUser,SignInWithGoogle,setUser,user}=use(AuthContext);
const handleSignUp=(e)=>{
     e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value
        const photoURL=form.photoURL.value;
        const formData=new FormData(form);
        const newUser=Object.fromEntries(formData.entries());
        // create user
        fetch("https://room-hatch-server.vercel.app/",{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(newUser)
        }).then(res=>res.json()).then(data=>{
          if(data.insertedId){
              navigate("/");
              setUser(newUser);
            Swal.fire({
            title: "Congrates you had successfully created an account!",
          icon: "success",
          draggable: true
                        });
          }
        });
        setErrorMessage(" ");
        // password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(passwordRegex.test(password)===false){
          setErrorMessage("Password must have one lowercase,one uppercase,one degit and 6 character or longer");
          return ;
        }


        createUser(email,password).then(result=>{
       updateProfile(auth.currentUser, {
          displayName:name, photoURL:photoURL
          })
              
        }).catch(error=>setErrorMessage(error.message));

       
}
 const handleGoogleSignup = async () => {
    SignInWithGoogle().then(result=> {
          const googleUser = result.user;
           const newUser = {
            name: googleUser.displayName,
            email: googleUser.email,
            photoURL: googleUser.photoURL,
    };
      fetch("https://room-hatch-server.vercel.app/",{
         method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(newUser)
        }).then(res=>res.json()).then(data=>{
          if(data.insertedId){
            Swal.fire({
            title: "Congrates you had successfully created an account!",
          icon: "success",
          draggable: true
                        });
          }
      })

      setUser(newUser);

    }).then(err=>setErrorMessage(err.message));
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
          <label className="label">Photo</label>
          <input type="text" name='photoURL' className="input" placeholder="Enter your photo URL" />
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