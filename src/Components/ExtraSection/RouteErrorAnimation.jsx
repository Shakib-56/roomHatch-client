import React from 'react';
import RouteErrorPageAnimation from "../../assets/Route-Error.json"
import { useLottie } from 'lottie-react';
const RouteErrorAnimation = () => {
     const options = {
    animationData:RouteErrorPageAnimation,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
    return <div className='w-80 h-80'>{View}</div>;
};

export default RouteErrorAnimation;