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

    const {user}=useContext(AuthContext)
    const userAddedRoommateDatas = roommates.filter(
    (roommate) => roommate.email === user?.email
  );
  const handleRommateDelete=(id)=>{
    
    console.log(id);
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
    console.log(result.isConfirmed);
  if (result.isConfirmed) {
        // start deleting the coffe
        fetch(`http://localhost:3000/roommates/${id}`,{
            method:"DELETE"
        }).then(res=>res.json()).then(data=>{
            if(data.deletedCount){
                Swal.fire({
                title: "Deleted!",
                text: "Your Rommate data has been deleted.",
                icon: "success"
                });

                 // remove coffee from the state
                const remainingRoommates=roommates.filter(roommate=>roommate._id!==id);
                setRoommates(remainingRoommates);
                
            }
        })
    
  }
});
  }
  
    return (
        <div className='max-w-7xl mx-auto px-20 py-6'>
            <table className="table w-full border-1 border-red-500 rounded-xl">
          <thead>
            <tr className="bg-red-500 text-white">
            <th>Photo</th>
              <th>Name</th>
              <th>Rent</th>
              <th>Status</th>
              <th>Location</th>
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
                <td className={roommate.availability === "available" ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>
                  {roommate.availability}
                </td>
                <td>{roommate.location || 'N/A'}</td>
                <td colSpan={2} className='space-x-2' >
                  <Link
                    to={`/update-roommateDetails/${roommate._id}`}
                    className="btn btn-sm  bg-blue-400 text-white "
                  >
                   <CiEdit className='text-white' size={25} /> Update 
                  </Link>
                  <Link
                  onClick={()=>handleRommateDelete(roommate._id)}
                    className="btn btn-sm text-lg bg-red-400 text-white "
                  >
                    <MdDelete size={25} />

                    Delete 
                  </Link>
                </td>
              </tr>
            ))}
            {roommates.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No listings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
    );
};

export default Mylistings;