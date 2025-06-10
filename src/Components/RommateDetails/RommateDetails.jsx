import React, { useState, useContext } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { MdLocationCity } from 'react-icons/md';
import { TbWorldSearch } from 'react-icons/tb';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';

const RommateDetails = () => {
  const roommateDetails = useLoaderData();
  const { user } = useContext(AuthContext);

  const {
    title,
    location,
    rent,
    roomType,
    lifestyle,
    contact,
    availability,
    email,
    name,
    photo,
    description,
  } = roommateDetails;

  const [likeCount, setLikeCount] = useState(0);
  const [showContact, setShowContact] = useState(false);

  const isOwnPost = user?.email === email;

  const handleLike = () => {
    if (!isOwnPost) {
      setLikeCount(likeCount + 1);
      setShowContact(true);
    } else {
      alert("You can't like your own post!");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You can't like your own post!",
        });
    }
  };

  return (
    <div className='max-w-4xl px-4 md:px-20 mx-auto py-10'>
      <div className='p-10 space-y-2 text-center rounded-t-xl shadow-sm flex flex-col justify-center items-center border-b-2 border-b-red-600 bg-red-100'>
        <img className='h-40 w-40 object-cover rounded-full' src={photo} alt={name} />
        <p className='text-2xl mt-4 font-bold'>{name}</p>
        <p className='text-gray-700'>{likeCount} people interested in</p>

        {!isOwnPost && (
          <button onClick={handleLike} className='btn btn-sm bg-red-500 text-white mt-2'>
            ❤️ Like
          </button>
        )}
      </div>

      <div className='space-y-2 mt-2'>
        <p className='p-4 flex gap-2 shadow rounded text-lg text-gray-600 font-bold text-center'>
          <TbWorldSearch className='text-red-600' size={25} />
          {title}
        </p>
        <div className='p-4 rounded shadow-sm'>
          <p className='flex items-center gap-2'><MdLocationCity className='text-red-600' size={25} /> 
            <strong>Location</strong>: <span className='text-gray-800'>{location}</span>
          </p>
          <p>💰 <strong>Rent</strong>: {rent} Tk</p>
          <p>📅 <strong>Availability</strong>: {availability}</p>
          <p>🏡 <strong>Room Type</strong>: {roomType}</p>
          <p>📘 <strong>Lifestyle</strong>: {lifestyle}</p>

          {/* Show contact only after like */}
          {showContact && (
            <p>📞 <strong>Contact</strong>: {contact}</p>
          )}

          <p>📧 <strong>Email</strong>: {email}</p>
        </div>
      </div>

      <div className='mt-1 p-4 shadow rounded-b-xl'>
        <h3 className='flex text-lg gap-1 font-bold items-center my-2'>
          <HiOutlineMenuAlt2 size={23} className='text-red-600' />
          Description
        </h3>
        <p className='rounded'>{description}</p>
      </div>
    </div>
  );
};

export default RommateDetails;
