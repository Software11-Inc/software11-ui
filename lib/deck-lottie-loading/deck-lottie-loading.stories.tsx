import { Meta } from "@storybook/react";
import { DeckLottieLoading } from "./deck-lottie-loading.component";

export default {
  title: "UI/Animations/Lottie Loading",
  component: DeckLottieLoading,
} as Meta<typeof DeckLottieLoading>;

export const Default = () => <DeckLottieLoading />;
