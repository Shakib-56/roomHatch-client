import React from 'react';
import { Link } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
const {createUser,SignInWithGoogle,setUser}=use(AuthContext)
const handleSignUp=(e)=>{
     e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        createUser(email,password).then(result=>console.log(result)).catch(error=>console.log(error));


}
 const handleGoogleSignup = async () => {
    SignInWithGoogle().then(result=> {
      setUser(result.user)
    }).then(err=>console.log(err));
  };
    return (
        <div>
            <div className='mx-auto my-10 max-w-7xl flex justify-center px-20'>
    <div className="card bg-base-100 w-full mt-3 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className='text-2xl text-center'>SignUp</h2>
        <form onSubmit={handleSignUp} className="fieldset mt-2">
            
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Enter your name" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">SignUp now</button>
        </form>
        <p className='text-center text-lg font-bold'>or</p>
        <div className='flex'>
          <button onClick={()=>{handleGoogleSignup()}} className='px-20 cursor-pointer py-2 bg-base-200 w-full rounded flex items-center gap-2'><FcGoogle size={25} />SignUp with google</button>
        </div>
        <p >Already have an accoint  .Please <Link className='text-blue-500 underline' to={"/login"}>Login</Link></p>
      </div>
    </div>
</div>
        </div>
    );
};

export default SignUp;