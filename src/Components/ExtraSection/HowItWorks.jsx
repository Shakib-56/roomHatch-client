import React from 'react';
import image_1 from "../../assets/according-location-findRommate.png"
import image_2 from "../../assets/Find-roomMate-near-you.png"
import image_3 from "../../assets/pick-your-roommate.png"

const HowItWorks = () => {
    return (
      <div className='bg-red-200 py-10 bg-no-repeat bg-cover'>
         <div className='flex flex-col gap-10 px-20 '>
          <div className='text-center  px-20 space-y-2 py-6 mx-auto'>
            <h2 className='text-4xl text-red-600 font-bold'>How it works </h2>
            <p className='text-xl'>Safe, Simple & Fast — Get Matched with the Right Roommate in Just 2 Days!</p>


          </div>
          <div className='flex relative gap-6  py-10 my-25 '>
            <div className="card bg-base-100 w-96 shadow-lg">
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
<div className="card bg-base-100 w-96 shadow-xl absolute  left-100  -bottom-20">
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
<div className="card bg-base-100 w-96 shadow-xl absolute top-5 right-1">
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
          </div>

        </div>
      </div>
       
       
    );
};

export default HowItWorks;