import Lottie from "lottie-react";
import React from "react";
import animationData from "./deck-lottie-loading.json";

export const DeckLottieLoading: React.FC = () => {
  return <Lottie loop={true} autoplay={true} animationData={animationData} height={100} />;
};
