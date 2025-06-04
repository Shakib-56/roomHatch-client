import { Link } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const {signInUser,SignInWithGoogle,setUser}=use(AuthContext)
  const navigate=useNavigate();
    const handleLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        // login user 
        signInUser(email,password)
        .then(result=>{
          navigate("/add-roommate")
          console.log(result)})
          .then(error=>console.log(error));

    }
    const handleGoogleSignup = async () => {
    SignInWithGoogle().then(result=> {
      setUser(result.user)
    }).then(err=>console.log(err));
  };
    return (
  <div className='mx-auto max-w-7xl my-10 flex justify-center px-6 md:px-20'>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm border-1 border-red-600">
      <div className="card-body">
        <h2 className='text-2xl text-center'>Login</h2>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p className='text-center text-lg font-bold'>or</p>
                <div className='flex'>
                  <button onClick={()=>{handleGoogleSignup()}} className='md:px-20 cursor-pointer py-2 bg-base-200 w-full rounded flex items-center justify-center gap-2'><FcGoogle size={25} />SignUp with google</button>
                </div>
        <p >New user here .Please <Link className='text-blue-500 underline' to={"/signUp"}>SignUp</Link></p>
      </div>
    </div>
</div>
    );
};

export default Login;