import { Link } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {
  const {signInUser}=use(AuthContext)
    const handleLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        // login user 
        signInUser(email,password).then(result=>console.log(result)).then(error=>console.log(error));

    }
    return (
  <div className='mx-auto max-w-7xl flex justify-center px-20'>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
        <p >New user here .Please <Link className='text-blue-500 underline' to={"/register"}>Register</Link></p>
      </div>
    </div>
</div>
    );
};

export default Login;