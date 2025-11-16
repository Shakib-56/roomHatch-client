import React from "react";
import bannerImage from "../../assets/full-shot-friends-reading-cell-phone-messages.jpg";
import bannerImage2 from "../../assets/roommates-spending-time-together.jpg";
import bannerImage3 from "../../assets/happy-friends-smiling-camera.jpg";
import bannerImage4 from "../../assets/side-view-roommates-spending-time-indoors.jpg";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full lg:min-h-screen">
        {/* Slide 1 */}
        <div id="item1" className="carousel-item relative w-full h-full">
          <img
            src={bannerImage}
            className="w-full object-cover h-[600px] md:h-[650px] bg-cover"
          />
          <div className="flex flex-col space-y-6 absolute items-center justify-center md:justify-start md:items-start md:left-20 md:top-60 top-30">
            {/* Invisible shadow overlay */}
            <div className="absolute -top-10 -left-10 -right-10 h-40 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>

            {/* Asterisk divider */}
            <div className="text-white text-xl tracking-widest mb-2 relative z-10">
              * * * * *
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-marcellus text-white text-center md:text-start leading-tight relative z-10">
              Where Every Match
              <br />
              <span className="font-light">is Extraordinary</span>
            </h1>

            {/* Description */}
            <p className="text-white text-lg md:text-xl text-center md:text-start max-w-2xl leading-relaxed mt-4 relative z-10">
              Discover the perfect blend of compatibility, comfort, and
              convenience at
              <br />
              RoomMatch. Your gateway to an unforgettable living experience.
            </p>

            {/* Button */}
            <div className="flex md:items-start items-center justify-center md:justify-start mt-6 relative z-10">
              <Link
                to={"/browse"}
                className="px-8 py-3 border bg-red-600 border-white text-white text-sm font-light tracking-widest hover:bg-white hover:text-gray-900 transition duration-300 uppercase"
              >
                Browse Roommates
              </Link>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="item2" className="carousel-item relative w-full h-full">
          <img
            src={bannerImage2}
            className="w-full object-cover h-[600px] md:h-[650px] bg-cover"
          />
          <div className="flex flex-col space-y-6 absolute items-center justify-center md:justify-start md:items-start md:left-20 md:top-60 top-30">
            {/* Invisible shadow overlay */}
            <div className="absolute -top-10 -left-10 -right-10 h-40 bg-gradient-to-b from-black/90 to-transparent pointer-events-none"></div>

            {/* Asterisk divider */}
            <div className="text-white text-xl tracking-widest mb-2 relative z-10">
              * * * * *
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white text-center md:text-start leading-tight relative z-10">
              Verified Profiles,
              <br />
              <span className="font-light">Peace of Mind</span>
            </h1>

            {/* Description */}
            <p className="text-white text-lg md:text-xl text-center md:text-start max-w-2xl leading-relaxed mt-4 relative z-10">
              Discover the perfect blend of safety, trust, and reliability with
              <br />
              our background-checked community. Your comfort is our priority.
            </p>

            {/* Button */}
            <div className="flex md:items-start items-center justify-center md:justify-start mt-6 relative z-10">
              <Link
                to={"/browse"}
                className="px-8 py-3 border bg-red-600 border-white text-white text-sm font-light tracking-widest hover:bg-white hover:text-gray-900 transition duration-300 uppercase"
              >
                Browse Roommates
              </Link>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="item3" className="carousel-item relative w-full h-full">
          <img
            src={bannerImage3}
            className="w-full h-[600px] md:h-[650px] object-cover"
          />
          <div className="flex flex-col space-y-6 absolute items-center justify-center md:justify-start md:items-start md:left-20 md:top-60 top-30">
            {/* Invisible shadow overlay */}
            <div className="absolute -top-10 -left-10 -right-10 h-40 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>

            {/* Asterisk divider */}
            <div className="text-white text-xl tracking-widest mb-2 relative z-10">
              * * * * *
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white text-center md:text-start leading-tight relative z-10">
              From Strangers
              <br />
              <span className="font-light">To Lasting Friendships</span>
            </h1>

            {/* Description */}
            <p className="text-white text-lg md:text-xl text-center md:text-start max-w-2xl leading-relaxed mt-4 relative z-10">
              Experience the transformation of roommate relationships.
              <br />
              Where compatibility meets connection for extraordinary living.
            </p>

            {/* Button */}
            <div className="flex md:items-start items-center justify-center md:justify-start mt-6 relative z-10">
              <Link
                to={"/browse"}
                className="px-8 py-3 border bg-red-600 border-white text-white text-sm font-light tracking-widest hover:bg-white hover:text-gray-900 transition duration-300 uppercase"
              >
                Browse Roommates
              </Link>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="item4" className="carousel-item relative w-full h-full">
          <img
            src={bannerImage4}
            className="w-full h-[600px] md:h-[650px] object-cover"
          />
          <div className="flex flex-col space-y-6 absolute items-center justify-center md:justify-start md:items-start md:left-20 md:top-60 top-30">
            {/* Invisible shadow overlay */}
            <div className="absolute -top-10 -left-10 -right-10 h-40 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>

            {/* Asterisk divider */}
            <div className="text-white text-xl tracking-widest mb-2 relative z-10">
              * * * * *
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white text-center md:text-start leading-tight relative z-10">
              Stress-Free Living
              <br />
              <span className="font-light">Starts Here</span>
            </h1>

            {/* Description */}
            <p className="text-white text-lg md:text-xl text-center md:text-start max-w-2xl leading-relaxed mt-4 relative z-10">
              Discover the perfect blend of trust, transparency, and
              reliability.
              <br />
              Your gateway to peaceful coexistence and shared happiness.
            </p>

            {/* Button */}
            <div className="flex md:items-start items-center justify-center md:justify-start mt-6 relative z-10">
              <Link
                to={"/browse"}
                className="px-8 py-3 border bg-red-600 border-white text-white text-sm font-light tracking-widest hover:bg-white hover:text-gray-900 transition duration-300 uppercase"
              >
                Browse Roommates
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 flex w-full justify-center gap-3 z-20">
        <a
          href="#item1"
          className="text-white hover:text-red-500 transition duration-300"
        >
          <GoDotFill size={20} />
        </a>
        <a
          href="#item2"
          className="text-white hover:text-red-500 transition duration-300"
        >
          <GoDotFill size={20} />
        </a>
        <a
          href="#item3"
          className="text-white hover:text-red-500 transition duration-300"
        >
          <GoDotFill size={20} />
        </a>
        <a
          href="#item4"
          className="text-white hover:text-red-500 transition duration-300"
        >
          <GoDotFill size={20} />
        </a>
      </div>
    </div>
  );
};

export default Banner;
