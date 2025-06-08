import React from 'react';
import image_1 from "../../assets/according-location-findRommate.png"
import image_2 from "../../assets/Find-roomMate-near-you.png"
import image_3 from "../../assets/pick-your-roommate.png"
import bgHowItWorks from "../../assets/bgHowItWorks.png"
import { Fade, Slide } from 'react-awesome-reveal';

const HowItWorks = () => {
    return (
      <div className='py-10 bg-no-repeat bg-cover ' style={{backgroundImage:`url(${bgHowItWorks})`}}>
         <div className='flex flex-col gap-10 md:px-20 '>
          <div className='text-center  px-20 space-y-2 py-4 mx-auto'>
            <h2 className='text-4xl text-red-600 font-bold'>How it works </h2>
            <p className='text-xl'>Safe, Simple & Fast — Get Matched with the Right Roommate in Just 2 Days!</p>


          </div>
          <div className='gird grid-cols-1 md:grid-cols-3  mx-auto  relative space-y-8  md:gap-6  md:py-10  md:my-25 '>
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
      <div className="card bg-base-100 w-96 shadow-xl hover:bg-red-200  md:absolute  md:left-100  md:-bottom-20">
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
          
          </div>

        </div>
      </div>
       
       
    );
};

export default HowItWorks;