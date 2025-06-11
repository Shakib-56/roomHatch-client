import React from 'react';
import bannerImage from "../../assets/full-shot-friends-reading-cell-phone-messages.jpg"
import bannerImage2 from "../../assets/roommates-spending-time-together.jpg"
import bannerImage3 from "../../assets/happy-friends-smiling-camera.jpg"
import bannerImage4 from "../../assets/side-view-roommates-spending-time-indoors.jpg"
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router';
      const linkClass = ({ isActive }) =>{return isActive ? " text-white font-semibold ": "text-gray-700 hover:text-red-500 px-3 py-2"};


const Banner = () => {
    
    return (
        // <div className='w-full h-[580px] md:h-[680px] lg:h-[700px]  text-white py-20 bg-cover max-auto bg-no-repeat' style={{backgroundImage:`url(${bannerImage})`}}>
        //     <h1 className='text-3xl text-center max-w-7xl font-bold px-70'>No More Stranger Danger – Verified Profiles, Background Checks & Transparent Reviews for Roommates Who Pay Rent On Time.</h1>
        // </div>
        <div>
  <div className="carousel  w-full  lg:min-h-screen ">
  <div id="item1" className="carousel-item relative w-full h-full ">
      <img
      src={bannerImage}
      className="w-full object-cover h-[600px] md:h-[650px] bg-cover  " />    
      <div className='felx flex-col space-y-4 absolute items-center justify-center md:justify-start  md:items-start md:left-20 md:top-60 top-30'>
        <h2 className='text-4xl text-white text-center md:text-start pb-5  font-bold'>
            Find Your<span className='text-yellow-400 '> Perfect Roommate</span>  <br /> <span className='text-red-500'>Match</span>
        </h2>
        <p className='text-white text-2xl text-center md:text-start '>
            Safe, verified profiles with background checks for peace of mind
        </p>
        <div className=' flex md:items-start items-center justify-center md:justify-start '>
          <Link className='px-4 md:px-10 py-4 bg-red-600 text-white  text-xl'>Browse Roommates</Link>
        </div>
        
      </div>
  </div>
  <div id="item2" className="carousel-item relative w-full h-full ">
    <img
      src={bannerImage2}
      className="w-full object-cover h-[600px] md:h-[650px] bg-cover" />
      <div className='flex flex-col space-y-4 absolute items-center justify-center md:justify-start  md:items-start md:left-20 md:top-60 top-30 '>
        <h2 className='text-4xl text-white text-center md:text-start pb-5  font-bold'>
           <span className='text-red-600'> Compatibility</span>  That Matters
        </h2>
        <p className='text-white text-2xl text-center md:text-start px-4 '>
            Match based on lifestyle, habits, and preferences.
        </p>
        <div className=' flex md:items-start items-center justify-center md:justify-start'>
          <button className='px-4 md:px-10 py-4 bg-red-600 text-white  text-center text-xl'>Browse Roommates</button>
        </div>
      </div>
  </div>
  <div id="item3" className="carousel-item relative w-full h-full">

    <img
      src={bannerImage3}
      className="w-full  h-[600px] md:h-[650px] object-cover " />
      <div className='flex flex-col space-y-4 absolute items-center justify-center md:justify-start  md:items-start md:left-20 md:top-60 top-30'>
        <h2 className='text-4xl text-white text-center md:text-start pb-5  font-bold'>
            From <span  className='text-yellow-300'>Strangers</span>  To <span className='text-red-600'>Friends</span> 
        </h2>
        <p className='text-white text-2xl text-center md:text-start px-4 '>
        Thousands of successful matches and counting        </p>
       <div className='flex md:items-start items-center justify-center md:justify-start'>
          <button className='px-4 md:px-10 py-4 bg-red-600 text-white  text-center text-xl'>Browse Roommates</button>
        </div>
      </div>
  </div>
  <div id="item4" className="carousel-item  relative w-full h-ful">
    <img
      src={bannerImage4}
      className="w-full h-[600px] md:h-[650px] md: object-cover" />
      <div className=' flex flex-col space-y-4 absolute left-20 top-60'>
        <h2 className='text-4xl text-white font-bold'>
            Stress-Free Living Starts Here
        </h2>
        <p className='text-white text-2xl text-center md:text-start px-4 '>
            Transparent reviews and reliable roommates
        </p>
        <div className='flex md:items-start items-center justify-center md:justify-start'>
          <button className='px-4 md:px-10 py-4 bg-red-600 text-white  text-center text-xl'>Browse Roommates</button>
        </div>
      </div>
  </div>
</div>
<div className="absolute bottom-1 flex w-full justify-center gap-2 ">
  <a href="#item1" className={`text-gray-200 rounded-full ${linkClass}`}><GoDotFill />
</a>
  <a href="#item2" className={`text-gray-200 rounded-full ${linkClass}`}><GoDotFill /></a>
  <a href="#item3" className={`text-gray-200 rounded-full ${linkClass}` }><GoDotFill /></a>
  <a href="#item4" className={`text-gray-200 rounded-full ${linkClass}`}><GoDotFill /></a>
</div>
        </div>
      
    );
};

export default Banner;