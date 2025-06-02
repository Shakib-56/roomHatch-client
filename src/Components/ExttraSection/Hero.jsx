import { FaHome, FaUserFriends } from 'react-icons/fa';

 const Hero = () => {
  return (
    <div className="bg-white max-w-7xl px-20 max-auto my-10 p-5 font-sans">
      {/* Main Heading and Description */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          Find Your Perfect Roommate
        </h1>
        <p className="text-base text-gray-600">
          Discover comfortable living spaces and compatible roommates in your area
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
       
        <button className="flex items-center gap-2  text-red-500 bg-white hover:bg-red-800 hover:text-white font-medium py-3 px-4 rounded-lg border border-red-600 transition-colors">
          <FaUserFriends className="text-lg" />
          Find Roommate
        </button>
      </div>

      {/* Trending Preview */}
      <div className="bg-gray-50 rounded-xl p-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-medium text-gray-800">Trending</h2>
          <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
            See All
          </a>
        </div>

        {/* Listing Card */}
        <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-gray-900">Gulshan, Dhaka</h3>
            <span className="text-gray-500 text-sm">12 min ago</span>
          </div>
          <p className="text-gray-600 text-sm mb-1">3 Bed | Dining | Kitchen | 3 Bath</p>
          <p className="text-gray-600 text-sm mb-3">Available from 3rd Jan 2021</p>
          <p className="font-semibold text-gray-900">
            BDT 90,000 / month <span className="text-green-600 font-normal ml-1">Bills Included</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;