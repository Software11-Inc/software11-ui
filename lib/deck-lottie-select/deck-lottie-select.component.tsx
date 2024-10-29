import Lottie, { LottieRefCurrentProps } from "lottie-react";
import React from "react";
import animationData from "./deck-lottie-select.json";

export const DeckLottieSelect: React.FC<{ active: boolean }> = ({ active }) => {
  const [selected, setSelected] = React.useState(false);
  const ref = React.useRef<LottieRefCurrentProps>(null);

  React.useEffect(() => {
    if (active !== selected) {
      if (!active) {
        onDeselect();
      } else {
        onSelect();
      }
      setSelected(active);
    }
  }, [active]);

  const onSelect = () => {
    ref.current?.setSpeed(2);
    ref.current?.playSegments([0, 50], true);
  };

  const onDeselect = () => {
    ref.current?.playSegments([50, 0], true);
  };

  return <Lottie lottieRef={ref} loop={false} autoplay={false} animationData={animationData} />;
};
