import React from 'react';
import addRommateBg from "../../assets/add-roomate-2.png"
const AddRoommate = () => {
  const handleAddRoommate=(e)=>{
    e.preventDefault();
    const form=e.target;
    const formData=new FormData(form);
    const newRoommate=Object.fromEntries(formData.entries());
    console.log(newRoommate);
    //send data on server
    fetch("")
  }
    return (
        <div className='p-24 max-w-7xl mx-auto bg-white shadow-sm rounded-xl bg-no-repeat   my-10'>
          <div>
            <img className='w-full bg-cover rounded-t-2xl' src={addRommateBg} alt="" />
          </div>
            <div className='p-12 text-center space-y-4'>
            <h1 className="text-4xl font-extrabold text-center text-red-600 my-6">
  🚪 Open Your Door to a Great Roommate!
</h1>
<p className="text-lg text-center text-gray-700 mb-8">
  Fill out the form below to list your space and find the right match.
</p>
            </div>
            <form  onSubmit={handleAddRoommate} className='border bg-red-200 border-red-500 px-5 py-6 rounded' >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <fieldset className="fieldset p-2">
        <label className="label text-xl">Title</label>
        <input type="text" className="input w-full border " name='name' placeholder= {`(e.g., "Looking for a roommate in NYC"`} />
        </fieldset>
        <fieldset className="fieldset  p-2">
        <label className="label  text-xl">Location</label>
        <input type="text" className="input w-full border" name='location' placeholder="Enter your location"  required />
        </fieldset>
        <fieldset className="fieldset p-2">
        <label className="label text-xl">Rent Amount</label>
        <input type="number" className="input border w-full" name='rent'  />
        </fieldset>
        <fieldset className="fieldset  p-2">
        <label className="label text-xl">Room Type</label>

        <select
          name="roomType"
          className="w-full p-2 input rounded border"
        >
          <option value="Single">Single</option>
          <option value="Shared">Shared</option>
          <option value="Private">Private</option>
        </select>
        </fieldset>
        <fieldset className="fieldset   p-1">
        <label className="label text-xl">Lifestyle Preferences</label>
        <input type="text" className="input w-full border" name='lifestyle' placeholder="Lifestyle Preferences (Pets, Smoking, etc.)" />
        </fieldset>
       
        <fieldset className="fieldset  p-2">
        <label className="label text-xl">Contact Info </label>
        <input type="text" className="input w-full border" name='contact'  required  />
        </fieldset>
        <fieldset className="fieldset  p-2">
        <label className="label text-xl">Availability </label>

         <select
          name="availability"
          className="w-full p-2 border input  rounded"
        >
          <option value="available">Available</option>
          <option value="not-available">Not Available</option>
        </select>
        </fieldset>
        <fieldset className="fieldset p-2">
        <label className="label text-xl">Email</label>
        <input type="email" className="input w-full border " name='email' placeholder= "Enter your email" readOnly  required />
        </fieldset>
         <fieldset className="fieldset p-2">
        <label className="label text-xl">Name</label>
        <input type="text" className="input w-full border " name='name' placeholder= "Enter your name" readOnly  required/>
        </fieldset>
         <fieldset className="fieldset  p-2">
        <label className="label text-xl">Photo</label>
        <input type="text" className="input w-full border"
         placeholder="Enter photo URL"
         name='photo' />
        </fieldset>

        </div>
        <div>
           
         <fieldset className="fieldset  p-2">
        <label className="label text-xl">Description</label>
        <textarea type="text" className="bg-white border-none w-full border" name='description' rows={10}></textarea>
        </fieldset>
        <input className='btn w-full bg-red-600 text-white border border-red-200 mt-4' type="submit" value="Add Roommate" />
        </div>
            </form>
           
        </div>
    );
};

export default AddRoommate;