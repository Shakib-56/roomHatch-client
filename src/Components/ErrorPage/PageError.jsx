import React from 'react';
import ErrorAnimation from '../ExtraSection/ErrorAnimation';
import { NavLink } from 'react-router';

const PageError= () => {
    return (
         <div>
          <div className='bg-red-50 max-w-screen min-h-screen mx-auto  flex flex-col  justify-center items-center text-center'>
          <div className=' shadow-sm  bg-white rounded-4xl my-4'>
            {/* <img className='max-w-2xl bg-white rounded-4xl  max-h-4xl' src={errorImage} alt="" /> */}
            <ErrorAnimation></ErrorAnimation>
          </div>
          <div className='flex flex-col items-center gap-1 mb-10 pb-5'>
          <h2 className='text-4xl font-bold text-red-900'>404-Page Not Found</h2>
          <small className='text-lg'>Oops! The page you're looking for dosen't exist</small>
          <button className='bg-green-800 rounded-lg px-4 w-2/3 py-2 text-lg text-white'>
            <NavLink to={"/"}>Go back home</NavLink>
          </button>
          </div>
          

        </div>
      </div>
    );
};

export default PageError;