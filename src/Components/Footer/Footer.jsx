import React from 'react';
import logoFooter from "../../assets/logo1-bg-remove.png"
import { Navigate, NavLink } from 'react-router';
import { FaArrowRight, FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col  bg-red-400 py-20 space-y-2 items-center'>
                <h2 className='text-xl text-white'>Don't do college alone.</h2>
                <NavLink className="flex  max-w-4xl  items-center justify-center gap-2 px-20 bg-white  rounded py-4 shadow-sm text-red-600" to={"/"}> Find roommate <FaArrowRight />
</NavLink>
            </div>
            <footer className="footer  px-20 bg-black sm:footer-horizontal  text-neutral-content p-10">
  <aside>
    <img className='h-15 max-w-80' src={logoFooter} alt="" />
    <p>
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
    <nav>
    {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <NavLink to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaFacebookF />
            </NavLink>
            <NavLink to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter />
            </NavLink>
            <NavLink to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaInstagram />
            </NavLink>
            <NavLink to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaLinkedin />
            </NavLink>
          </div>
        </div>
  </nav>
  </aside>
  {/* Terms & Conditions */}
        <div>
          <h3 className="text-lg font-bold mb-2">Terms & Policies</h3>
          <ul>
            <li><NavLink to="/terms" className="hover:underline">Terms & Conditions</NavLink></li>
            <li><NavLink to="/privacy" className="hover:underline">Privacy Policy</NavLink></li>
          </ul>
        </div>

         {/* Contact Details */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p>Email: contact@yourdomain.com</p>
          <p>Phone: +1 (234) 567-8901</p>
          <p>Address: 123 Main Street, Your City</p>
        </div>
  
</footer>
        </div>
        
    );
};

export default Footer;