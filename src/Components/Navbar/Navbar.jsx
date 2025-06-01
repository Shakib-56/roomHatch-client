import React from 'react';
import { NavLink } from 'react-router';
import logo from "../../assets/logo1.png"
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
 
      const linkClass = ({ isActive }) =>{return isActive ? "text-white btn bg-red-500  font-semibold underline  px-3 py-2": "text-gray-700 hover:text-blue-500 px-3 py-2"};
    const navLinks=<>
    <NavLink className={linkClass} to="/">Home</NavLink>
    <NavLink className={linkClass} to="/add-roommate">Add Roommate</NavLink>
    <NavLink className={linkClass} to="/browse">Browse Listing</NavLink>
    <NavLink className={linkClass} to="/my-listings">My Listing</NavLink>



    
    </>
    return (
        <div className="navbar  lg:px-20 bg-base-100 shadow-sm">
  <div className="flex md:items-center justify-between gap-4">
    <div className="dropdown items-center">
      <div tabIndex={0} role="button" className="btn mt-5 lg:hidden">
        <RxHamburgerMenu />

      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navLinks}
        
      </ul>
    </div>
    <NavLink to={"/"} className="p-4 lg:h-20 lg:w-[300px] text-xl"> <img src={logo} alt="" /></NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" md:ml-20 text-sm font-semibold space-x-3 px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className=" p-4 lg:px-10  text-lg rounded  py-4 bg-red-600 text-white">SignUp</a>
  </div>
</div>
    );
};

export default Navbar;