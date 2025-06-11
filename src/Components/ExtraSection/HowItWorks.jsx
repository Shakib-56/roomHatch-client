import React from 'react';
import image_1 from "../../assets/according-location-findRommate.png"
import image_2 from "../../assets/Find-roomMate-near-you.png"
import image_3 from "../../assets/pick-your-roommate.png"
import bgHowItWorks from "../../assets/bgHowItWorks.png"
import { Fade, Slide } from 'react-awesome-reveal';

const HowItWorks = () => {
    return (
      <div className='md:py-4 lg:py-10 bg-no-repeat bg-cover ' style={{backgroundImage:`url(${bgHowItWorks})`}}>
         <div className='flex flex-col gap-4   mx-auto lg:px-20 '>
          <div className='text-center  md:px-15 lg:px-20 lg:space-y-2 lg:py-4 mx-auto'>
            <h2 className='text-4xl text-red-600 font-bold'>How it works </h2>
            <p className='text-xl'>Safe, Simple & Fast — Get Matched with the Right Roommate in Just 2 Days!</p>
          </div>
          {/* <div className='grid grid-cols-1 lg:px-0 md:px-10   md:grid-cols-2 lg:grid-cols-3 space-y-4  relative lg:gap-6  lg:py-10 my-25 '>
            <Slide direction="left" cscade damping={0.2} triggerOnce>
              <div className="card bg-base-100 w-96 shadow-xl hover:bg-red-200 ">
  <figure className="px-10 pt-10">
    <img
      src={image_1}
      alt="image_howIt_works-1"
      className="rounded-full " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Find all roommate and select your roommate

    </h2>
  </div>
            </div>
            </Slide>

   <Slide direction="up" cscade damping={0.2} triggerOnce>
      <div className="card bg-base-100 w-96 shadow-xl hover:bg-red-200  md:absolute    md:top-30">
  <figure className="px-10 pt-10">
    <img
      src={image_2}
      alt="Shoes"
      className="rounded-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Find all near you</h2>
  </div>
            </div>
    </Slide>         

  <Slide direction="right" cscade damping={0.2} triggerOnce>          
<div className="card bg-base-100 w-96 shadow-xl hover:bg-red-200  md:absolute md:bottom-10 md:right-1">
  <figure className="px-10 pt-10">
    <img
      src={image_3}
      alt="Shoes"
      className="rounded-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Pick your Rommate and Enjoy</h2>
  </div>
</div>
</Slide>
          
          </div> */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 lg:px-0 py-10'>
  <Slide direction="left" cascade damping={0.2} triggerOnce>
    <div className="card bg-base-100 w-full max-w-md mx-auto shadow-xl hover:bg-red-200 transition-all duration-300">
      <figure className="px-10 pt-10">
        <img
          src={image_1}
          alt="image_howIt_works-1"
          className="rounded-full w-32 h-32 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-lg md:text-xl">
          Find all roommate and select your roommate
        </h2>
      </div>
    </div>
  </Slide>
  <Slide direction="up" cascade damping={0.2} triggerOnce>
    <div className="card bg-base-100 w-full max-w-md mx-auto shadow-xl hover:bg-red-200 transition-all duration-300">
      <figure className="px-10 pt-10">
        <img
          src={image_2}
          alt="image_howIt_works-1"
          className="rounded-full w-32 h-32 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-lg md:text-xl">
          Find all near you
        </h2>
      </div>
    </div>
  </Slide>
  <Slide direction="right" cascade damping={0.2} triggerOnce>
    <div className="card bg-base-100 w-full max-w-md mx-auto shadow-xl hover:bg-red-200 transition-all duration-300">
      <figure className="px-10 pt-10">
        <img
          src={image_3}
          alt="image_howIt_works-1"
          className="rounded-full w-32 h-32 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-lg md:text-xl">
          Pick your Rommate and Enjoy
        </h2>
      </div>
    </div>
  </Slide>
</div>


        </div>
      </div>
       
       
    );
};

export default HowItWorks;