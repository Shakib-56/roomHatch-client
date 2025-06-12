import { Link, useLoaderData } from 'react-router';

const BrowseListings = () => {
  const roommates = useLoaderData();

  return (
    <div className="p-4 mx-auto max-w-7xl">
      <h2 className="text-3xl text-red-600 p-4 font-bold mb-6 text-center">Browse Roommate Listings</h2>
      
      {/* Desktop Table (hidden on mobile) */}
      <div className="hidden md:block overflow-x-auto rounded border-1 border-red-400">
        <table className="table w-full border">
          <thead>
            <tr className="bg-red-500 text-white">
              <th>Photo</th>
              <th>Name</th>
              <th>Title</th>
              <th>Rent</th>
              <th>Status</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {roommates.map((roommate) => (
              <tr key={roommate._id}>
                <td>
                  <img
                    src={roommate.photo}
                    alt={roommate.name}
                    className="w-16 h-16 object-cover rounded-full border"
                  />
                </td>
                <td>{roommate.name}</td>
                <td>{roommate.title}</td>
                <td>{roommate.rent} Tk</td>
                <td className={roommate.availability === "available" ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>
                  {roommate.availability}
                </td>
                <td>{roommate.location || 'N/A'}</td>
                <td>
                  <Link
                    to={`/roommates/${roommate._id}`}
                    className="btn btn-sm bg-red-400 text-white hover:bg-red-500"
                  >
                    See More
                  </Link>
                </td>
              </tr>
            ))}
            {roommates.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No listings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Mobile Cards (shown on mobile) */}
      <div className="md:hidden  space-y-4">
        {roommates.length === 0 ? (
          <div className="text-center py-4 text-gray-500">
            No listings found.
          </div>
        ) : (
          roommates.map((roommate) => (
            <div key={roommate._id} className=" border-1 hover:bg-red-50 border-red-600 bg-base-100 rounded-lg p-4 shadow-sm">
              <div className="flex items-start gap-4">
                <img
                  src={roommate.photo}
                  alt={roommate.name}
                  className="w-16 h-16 object-cover rounded-full border"
                />
                <div className="flex-1">
                  <div className="flex space-y-2 justify-between items-start">
                    <h3 className="font-bold text-lg">{roommate.name}</h3>
                    <span className={`text-sm font-semibold ${
                      roommate.availability === "available" 
                        ? 'text-green-600 btn outline-1 btn-sm bg-red-100' 
                        : 'text-red-600'
                    }`}>
                      {roommate.availability}
                    </span>
                  </div>
                  <p className="text-gray-700">{roommate.title}</p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div>
                      <span className="text-sm font-bold text-red-600">Rent:</span>
                      <p>{roommate.rent} Tk</p>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-red-600">Location:</span>
                      <p>{roommate.location || 'N/A'}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Link
                  to={`/roommates/${roommate._id}`}
                  className="btn btn-sm bg-red-400 text-white hover:bg-red-500"
                >
                  See More
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BrowseListings;