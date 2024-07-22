import Lottie from "lottie-react";
import React from "react";
import animationData from "./deck-lottie-info.json";

export const DeckLottieInfo: React.FC = () => {
  return <Lottie loop={false} autoplay={true} animationData={animationData} />;
};
