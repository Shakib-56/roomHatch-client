import React from 'react';
import ErrorPageAnimation from "../../assets/404-animation.json"
import { useLottie } from 'lottie-react';

const ErrorAnimation = () => {
     const options = {
    animationData:ErrorPageAnimation,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
    return <div className='w-80 h-80'>{View}</div>;
};

export default ErrorAnimation;