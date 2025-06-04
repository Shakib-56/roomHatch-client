import React from 'react';
import { NavLink } from 'react-router';
import logo from "../../assets/logo1-bg-remove.png"
import { RxHamburgerMenu } from 'react-icons/rx';
import { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Navbar = () => {
  const {user,signOutUser}=use(AuthContext);
  console.log(user);
  const handleSignOut=()=>{
    signOutUser().then(()=>{
      console.log("sign out successful");
    }).catch(error=>{
      console.log(error);
    })
  }
 
      const linkClass = ({ isActive }) =>{return isActive ? "text-white btn bg-red-500  font-semibold underline  px-3 py-2": "text-gray-700 hover:text-blue-500 px-3 py-2"};
    const navLinks=<>
    <NavLink className={linkClass} to="/">Home</NavLink>
    <NavLink className={linkClass} to="/browse">Browse Listing</NavLink>
    {
      user && <>
      <NavLink className={linkClass} to="/add-roommate">Add Roommate</NavLink>
      <NavLink className={linkClass} to="/my-listings">My Listing</NavLink>
      </>
    }


    
    </>
    return (
        <div className="navbar px-2 gap-2  md:px-20 bg-base-100 shadow-sm">
  <div className="flex items-center md:items-center justify-center md:justify-between gap-2 md:gap-4">
    <div className="dropdown items-center">
      <div tabIndex={0} role="button" className="btn mt-2 lg:hidden text-red-600 border-1 border-red-600">
        <RxHamburgerMenu size={20}/>

      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navLinks}
        
      </ul>
    </div>
    <NavLink to={"/"} className="lg:h-20 lg:w-[300px] text-xl"> <img src={logo} alt="" /></NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" md:ml-20 text-sm font-semibold space-x-3 px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user?<div className='flex items-center gap-4'>
       <div>
        <img className='rounded-4xl  h-15' src={user.photoURL} alt="" />
       </div>
        <a onClick={handleSignOut} className='btn bg-red-600 text-white'>SignOut</a>
      </div>:
      <div className='space-x-3'>
      <NavLink to={"/login"} className=" px-4 lg:px-10  text-lg rounded py-2 md:py-4 bg-red-600 text-white">Login</NavLink>
       <NavLink to={"/signUp"} className=" px-4  lg:px-10  text-lg rounded py-2 md:py-4 bg-red-600 text-white">SignUp</NavLink>
      </div>

    }
  </div>
</div>
    );
};

export default Navbar;