import React from 'react';
import FeaturedRoommateSinglePost from './FeaturedRoommateSinglePost';
import featuredPostBg from "../../assets/featuredPostSection-bg.png"
import { LuMoveRight } from 'react-icons/lu';
import { useState } from 'react';

const FeaturedRoommatePost = ({roommates}) => {
  console.log(roommates);
  const [showAll,setShowAll]=useState(false);
  const availableRoommates = roommates.filter((roommate) => roommate.availability === "available");
  const roommateToShow = showAll ? availableRoommates : availableRoommates.slice(0, 6);

  const handleShowMorePost=()=>{
    setShowAll(!showAll);
  }
    return (
        <div className='max-w-full  bg-cover bg-no-repeat'style={{backgroundImage:`url(${featuredPostBg})`}}>
             <section className="lg:py-10 px-4 lg:px-20 w-full max-auto">
      <h2 className="text-4xl font-bold text-center  text-red-600 py-4 mb-6">Featured Roommates</h2>
      <div className="grid max-w-7xl space-y-3 mx-auto    grid-cols-1 md:gap-4 lg:gap-4 md:grid-cols-2 lg:grid-cols-3">
        {roommateToShow.map((roommate) => (
          <FeaturedRoommateSinglePost key={roommate._id} roommate={roommate}></FeaturedRoommateSinglePost>
        ))}
      </div>
      
    </section>
    
        <div className='flex items-center justify-center py-4'>
        <button onClick={handleShowMorePost} className='px-20  py-4 rounded-4xl  bg-red-400 text-gray-100 text-lg flex items-center justify-center gap-1'>{showAll?"Show Less":"Show more "}<span> <LuMoveRight size={25}/></span></button>
      </div>
        
        </div>
    );
};

export default FeaturedRoommatePost;