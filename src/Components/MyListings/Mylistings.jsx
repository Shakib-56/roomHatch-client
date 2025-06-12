import React, { useContext } from 'react';
import { Link } from 'react-router';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { useEffect } from 'react';
import { CiEdit } from 'react-icons/ci';

const Mylistings = () => {    
    const loadedRoommates = useLoaderData();
    const [roommates, setRoommates] = useState([]);
    useEffect(() => {
        setRoommates(loadedRoommates);
    }, [loadedRoommates]);

    const { user } = useContext(AuthContext);
    const userAddedRoommateDatas = roommates.filter(
        (roommate) => roommate.email === user?.email
    );
    
    const handleRommateDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/roommates/${id}`, {
                    method: "DELETE"
                }).then(res => res.json()).then(data => {
                    if (data.deletedCount) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Roommate data has been deleted.",
                            icon: "success"
                        });
                        const remainingRoommates = roommates.filter(roommate => roommate._id !== id);
                        setRoommates(remainingRoommates);
                    }
                });
            }
        });
    }
  
    return (
        <div className='max-w-7xl mx-auto px-4 py-6'>
          <h2 className='text-4xl py-10 font-bold text-red-600 text-center'>My Listings</h2>
            {/* Desktop Table (hidden on mobile) */}
            <div className="hidden md:block">
                <table className="table w-full border-1 border-red-500 rounded-xl">
                    <thead>
                        <tr className="bg-red-500 text-white">
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Rent</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userAddedRoommateDatas.map((roommate) => (
                            <tr key={roommate._id}>
                                <td>
                                    <img
                                        src={roommate.photo}
                                        alt={roommate.name}
                                        className="w-16 h-16 object-cover rounded-full border"
                                    />
                                </td>
                                <td>{roommate.name}</td>
                                <td>{roommate.rent} Tk</td>
                                <td className='space-x-2'>
                                    <Link
                                        to={`/update-roommateDetails/${roommate._id}`}
                                        className="btn text-lg bg-blue-600 text-white"
                                    >
                                        <CiEdit className='text-white' size={25} /> Update 
                                    </Link>
                                    <button
                                        onClick={() => handleRommateDelete(roommate._id)}
                                        className="btn text-lg bg-red-600 text-white"
                                    >
                                        <MdDelete size={25} /> Delete 
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {userAddedRoommateDatas.length === 0 && (
                            <tr>
                                <td colSpan="4" className="text-center py-4 text-gray-500">
                                    No listings found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            
            {/* Mobile Cards (shown on mobile) */}
            <div className="md:hidden space-y-4">
                {userAddedRoommateDatas.length === 0 ? (
                    <div className="text-center py-4 text-gray-500">
                        No listings found.
                    </div>
                ) : (
                    userAddedRoommateDatas.map((roommate) => (
                        <div key={roommate._id} className="border-1 border-red-600 rounded-lg p-4 shadow-sm">
                            <div className="flex items-center gap-4">
                                <img
                                    src={roommate.photo}
                                    alt={roommate.name}
                                    className="w-20 h-20  object-cover rounded-full border-1 border-red-600"
                                />
                                <div>
                                    <h3 className="font-bold text-lg">{roommate.name}</h3>
                                    <p className="text-gray-700"><strong>Rent</strong>: {roommate.rent} Tk</p>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-end space-x-6">
                                <Link
                                    to={`/update-roommateDetails/${roommate._id}`}
                                    className="btn text-lg bg-blue-600 text-white px-4 py-2 rounded"
                                >
                                    <CiEdit className='text-white inline mr-1' size={20} /> 
                                    <span className="text-sm">Update</span>
                                </Link>
                                <button
                                    onClick={() => handleRommateDelete(roommate._id)}
                                    className="btn text-lg bg-red-600 text-white px-4 py-2 rounded"
                                >
                                    <MdDelete className='inline mr-1' size={20} />
                                    <span className="text-sm">Delete</span>
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Mylistings;