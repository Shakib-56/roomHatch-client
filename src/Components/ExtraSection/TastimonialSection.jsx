import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router';
import GlidCarousal from './GlidCarousal';

const TastimonialSection = () => {
    return (
        <div>
            
            <GlidCarousal></GlidCarousal>

           <div className='flex flex-col  bg-red-400 py-20 space-y-2 items-center'>
                           <h2 className='text-2xl p-4 text-white'>You’re not alone—your perfect roommate is just a click away.</h2>
                           <NavLink className="flex  max-w-4xl  items-center justify-center gap-2 px-20 bg-white  rounded py-4 shadow-sm text-red-600" to={"/browse"}> Find roommate <FaArrowRight />
           </NavLink>
                       </div> 
        </div>
    );
};

export default TastimonialSection;