import { useLottie } from 'lottie-react';
import React from 'react';
import SearchingAnimation from "../../assets/Searching-animation.json"

const LottieSearchingAnimation = () => {
    const options = {
    animationData: SearchingAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return <div className='w-28 h-32'>{View}</div>;
};

export default LottieSearchingAnimation;