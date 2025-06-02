import React from 'react';
import bannerImage from "../../assets/full-shot-friends-reading-cell-phone-messages.jpg"
import bannerImage2 from "../../assets/roommates-spending-time-together.jpg"
import bannerImage3 from "../../assets/happy-friends-smiling-camera.jpg"
import bannerImage4 from "../../assets/side-view-roommates-spending-time-indoors.jpg"
import { GoDotFill } from 'react-icons/go';

const Banner = () => {
    
    return (
        // <div className='w-full h-[580px] md:h-[680px] lg:h-[700px]  text-white py-20 bg-cover max-auto bg-no-repeat' style={{backgroundImage:`url(${bannerImage})`}}>
        //     <h1 className='text-3xl text-center max-w-7xl font-bold px-70'>No More Stranger Danger – Verified Profiles, Background Checks & Transparent Reviews for Roommates Who Pay Rent On Time.</h1>
        // </div>
        <div>
  <div className="carousel relative w-full">
  <div id="item1" className="carousel-item relative w-full">
    <img
      src={bannerImage}
      className="w-full h-[600px] bg-cover" />

      <div className='felx flex-col space-y-4 absolute left-20 top-60'>
        <h2 className='text-4xl text-white font-bold'>
            Find Your Perfect Roommate Match
        </h2>
        <p className='text-white text-2xl '>
            Safe, verified profiles with background checks for peace of mind
        </p>
        <button className='px-10 py-4 bg-red-600 text-white text-xl'>Browse Roommates</button>
      </div>
  </div>
  <div id="item2" className="carousel-item relative w-full">
    <img
      src={bannerImage2}
      className="w-full h-[600px] bg-cover" />
      <div className='felx flex-col space-y-4 absolute left-20 top-60'>
        <h2 className='text-4xl text-white font-bold'>
            Compatibility That Matters
        </h2>
        <p className='text-white text-2xl '>
            Match based on lifestyle, habits, and preferences
        </p>
        <button className='px-10 py-4 bg-red-600 text-white text-xl'>Browse Roommates</button>
      </div>
  </div>
  <div id="item3" className="carousel-item relative w-full">
    <img
      src={bannerImage3}
      className="w-full h-[600px] bg-cover" />
      <div className='felx flex-col space-y-4 absolute left-20 top-60'>
        <h2 className='text-4xl text-white font-bold'>
            From Strangers to Friends
        </h2>
        <p className='text-white text-2xl '>
        Thousands of successful matches and counting        </p>
        <button className='px-10 py-4 bg-red-600 text-white text-xl'>Browse Roommates</button>
      </div>
  </div>
  <div id="item4" className="carousel-item relative w-full">
    <img
      src={bannerImage4}
      className="w-full h-[600px] bg-cover" />
      <div className=' felx flex-col space-y-4 absolute left-20 top-60'>
        <h2 className='text-4xl text-white font-bold'>
            Stress-Free Living Starts Here
        </h2>
        <p className='text-white text-2xl '>
            Transparent reviews and reliable roommates
        </p>
        <button className='px-10 py-4 bg-red-600 text-white text-xl'>Browse Roommates</button>
      </div>
  </div>
</div>
<div className="absolute bottom-1 flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="text-gray-200 rounded-full"><GoDotFill />
</a>
  <a href="#item2" className="text-gray-200 rounded-full"><GoDotFill /></a>
  <a href="#item3" className="text-gray-200 rounded-full"><GoDotFill /></a>
  <a href="#item4" className="text-gray-200 rounded-full"><GoDotFill /></a>
</div>
        </div>
      
    );
};

export default Banner;