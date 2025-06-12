import { useLottie } from 'lottie-react';
import React from 'react';
import simpleLoader from "../../assets/loading-animation.json";

const LottieAnimation = () => {
  const options = {
    animationData: simpleLoader,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return <div style={{ width: 200, height: 200 }}>{View}</div>;
};

export default LottieAnimation;