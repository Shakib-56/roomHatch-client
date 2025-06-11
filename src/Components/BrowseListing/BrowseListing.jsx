import { Link, useLoaderData } from 'react-router';

const BrowseListings = () => {
  const roommates=useLoaderData();

  return (
    <div className="p-4 mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold mb-6 text-center">Browse Roommate Listings</h2>
      <div className="overflow-x-auto rounded border-1 border-red-400">
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
                <td colSpan={2} >
                  <Link
                    to={`/roommates/${roommate._id}`}
                    className="btn btn-sm  bg-red-400 text-white hover:bg-red-500"
                  >
                    See More
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
    </div>
  );
};

export default BrowseListings;
