import React, { useEffect, useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import logo from "../../assets/logo1-bg-remove.png";
import { RxHamburgerMenu } from 'react-icons/rx';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';
import { FaSignOutAlt } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleSignOut = () => {
    signOutUser().then(() => {
      Swal.fire({
        title: "Sign out successful!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
      navigate("/login");
    }).catch(error => {
      console.log(error);
    });
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-red-600 font-semibold underline px-3 py-2 rounded"
      : "text-gray-700 hover:text-red-600 hover:bg-base-300 hover:rounded px-3 py-2";

  const navLinks = (
    <>
      <NavLink className={linkClass} to="/">Home</NavLink>
      <NavLink className={linkClass} to="/browse">Browse Listing</NavLink>
      {user && (
        <>
          <NavLink className={linkClass} to="/add-roommate">Add Roommate</NavLink>
          <NavLink className={linkClass} to="/my-listings">My Listing</NavLink>
          <button
          onClick={handleSignOut}
          className="btn btn-sm bg-red-600 text-white hover:bg-red-700 w-full lg:hidden mt-2"
        >
          <FaSignOutAlt className="mr-1" /> Log out
        </button>
        </>
      )}
    </>
  );

  return (
    <div className="flex justify-evenly items-center px-2 py-2 border-b-1 border-b-red-600 gap-2 space-x-4 md:px-20 md:py-4 bg-base-100 shadow-sm z-50">
      <div className="flex items-center gap-4">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-red-600 border border-red-600">
            <RxHamburgerMenu size={20} />
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <NavLink to="/" className="w-32 md:w-48">
          <img src={logo} alt="logo" className="h-full object-contain" />
        </NavLink>
      </div>

      <div className="navbar-center pl-40 hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-1 font-semibold">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        {/* Theme toggle */}
        <button className="btn btn-sm btn-ghost rounded-full bg-red-600 text-white" onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
        </button>

        {user ? (
          <div className="flex items-center gap-3 group relative">
            <img
              className="rounded-full h-10 w-10 object-cover ring-2 ring-red-500 cursor-pointer"
              src={user.photoURL}
              alt="User"
            />
            <div className="absolute top-10 left-0  bg-black text-white text-xs px-2 py-1 rounded hidden group-hover:block whitespace-nowrap">
              {user.displayName}
            </div>
            <button onClick={handleSignOut} className="btn btn-sm hidden lg:flex flex-row bg-red-600 text-white hover:bg-red-700">
              <FaSignOutAlt className="mr-1" /> Log out
            </button>
          </div>
        ) : (
          <div className="space-x-2">
            <NavLink to="/login" className="btn btn-sm bg-red-600 text-white hover:bg-red-700">Login</NavLink>
            <NavLink to="/signUp" className="btn btn-sm bg-red-600 text-white hover:bg-red-700">Signup</NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
