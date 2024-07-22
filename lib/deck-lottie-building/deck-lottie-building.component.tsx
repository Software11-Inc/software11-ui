import Lottie from "lottie-react";
import React from "react";
import animationData from "./deck-lottie-building.json";

export const DeckLottieBuilding: React.FC = () => {
  return <Lottie loop={true} autoplay={true} animationData={animationData} height={100} />;
};
