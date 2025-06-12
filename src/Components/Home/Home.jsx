import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../ExtraSection/HowItWorks';
import FeaturedRoommatePost from '../FeaturedPost/FeaturedRoommatePost';
import { useLoaderData } from 'react-router';
import TastimonialSection from '../ExtraSection/TastimonialSection';
import LottieAnimation from '../ExtraSection/LottieAnimation';

const Home = () => {
    const featuredPostData=useLoaderData();
    console.log(featuredPostData);
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <FeaturedRoommatePost roommates={featuredPostData}></FeaturedRoommatePost>
            <TastimonialSection></TastimonialSection>
        </div>
    );
};

export default Home;