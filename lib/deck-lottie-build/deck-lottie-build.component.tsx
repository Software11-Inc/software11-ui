import Lottie from "lottie-react";
import React from "react";
import animationData from "./deck-lottie-build.json";

export const DeckLottieBuild: React.FC = () => {
  return (
    <Lottie
      loop={true}
      autoplay={true}
      animationData={animationData}
      style={{
        height: "inherit",
      }}
    />
  );
};
