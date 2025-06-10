import React from 'react';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { TbCoinTakaFilled } from 'react-icons/tb';
import { NavLink } from 'react-router';

const FeaturedRoommateSinglePost = ({roommate}) => {
    const roomMateDescription=roommate.description.slice(0,120);
    return (
        <div key={roommate.id} className="card shadow-lg my-4 relative bg-white ronded-2xl border-1 border-red-600">
            <img
              src={roommate.photo}
              alt={roommate.name}
              className="rounded-t-xl border-b-2 border-b-red-600  h-75 w-full object-cover"
            />
            <div className="badge badge-secondary p-4 rounded-3xl max-w-2xl bg-red-600 absolute top-70 left-5 font-semibold">{roommate.availability==="available"?"avilable":"Not avilable"}</div>
            <div className="badge badge-secondary p-4 rounded-3xl max-w-2xl bg-red-600 absolute top-70 left-30 flex items-center space-x-1 font-semibold">{roommate.rent}Tk</div>

            <div className='p-2'>
             <h3 className="text-xl font-semibold mt-3 ">{roommate.name}</h3>
            <p className='text-sm font-bold text-gray-600'>{roommate.title}</p>
            <p className="text-sm text-gray-700 mt-2">{roomMateDescription}. . . . . .</p>
            </div>
            <div className='py-2  px-2  text-center'>
            <NavLink to={`/roommates/${roommate._id}`} className='btn btn-ghost w-full  bg-red-400 text-gray-100 rounded-4xl'>See more details...</NavLink>

            </div>
           
          </div>
    );
};

export default FeaturedRoommateSinglePost;