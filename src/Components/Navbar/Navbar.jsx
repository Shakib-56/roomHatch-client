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
        draggable: true
      });
      navigate("/login");
    }).catch(error => {
      console.log(error);
    });
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white btn bg-red-500 font-semibold underline px-3 py-2"
      : "text-gray-700 hover:text-red-600 hover:bg-base-300 hover:bg-red-100 hover:rounded px-3 py-2";

  const navLinks = (
    <>
      <NavLink className={linkClass} to="/">Home</NavLink>
      <NavLink className={linkClass} to="/browse">Browse Listing</NavLink>
      {user && (
        <>
          <NavLink className={linkClass} to="/add-roommate">Add Roommate</NavLink>
          <NavLink className={linkClass} to="/my-listings">My Listing</NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="navbar px-2 gap-2 md:px-20 bg-base-100 shadow-sm">
      <div className="flex items-center md:justify-between gap-2 md:gap-4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn mt-2 lg:hidden text-red-600 border border-red-600">
            <RxHamburgerMenu size={20} />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            {navLinks}
          </ul>
        </div>
        <NavLink to={"/"} className="lg:h-20 lg:w-[300px] text-xl">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="md:ml-20 text-sm font-semibold space-x-3 px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        <button className="btn btn-sm btn-ghost rounded-full p-4 bg-red-600 text-white " onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon className='' size={25} /> : <FaSun size={25} />}
        </button>

        {user ? (
          <div className="flex items-center gap-4">
            <img className="rounded-full h-12 w-12 object-cover" src={user.photoURL} alt="User" />
            <button onClick={handleSignOut} className="btn bg-red-600 text-white">
              Sign Out <FaSignOutAlt />
            </button>
          </div>
        ) : (
          <div className="space-x-3">
            <NavLink to="/login" className="px-4 text-lg rounded py-2 bg-red-600 text-white">Login</NavLink>
            <NavLink to="/signUp" className="px-4 text-lg rounded py-2 bg-red-600 text-white">SignUp</NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
