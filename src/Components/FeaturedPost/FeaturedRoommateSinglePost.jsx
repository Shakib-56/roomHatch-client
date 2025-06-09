import React from 'react';

const FeaturedRoommateSinglePost = ({roommate}) => {
    const roomMateDescription=roommate.description.slice(0,120);
    return (
        <div key={roommate.id} className="card shadow-lg my-4 bg-white ronded-2xl border-1 border-red-600">
            <img
              src={roommate.photo}
              alt={roommate.name}
              className="rounded-t-xl border-b-2 border-b-red-600  h-75 w-full object-cover"
            />
            <div className='p-2'>
             <h3 className="text-xl font-semibold mt-3 ">{roommate.name}</h3>
            <p className="text-sm font-bold text-gray-600">{roommate.location}</p>
            <p className="text-sm text-gray-600">{roommate.rent} TK</p>
            <p className="text-sm mt-2">{roomMateDescription}. . . . . .</p>
            </div>
            <div className='py-2  px-2  text-center'>
            <button className='px-20 py-4 w-full  bg-red-400 text-gray-100 rounded-4xl'>See more details...</button>

            </div>
           
          </div>
    );
};

export default FeaturedRoommateSinglePost;