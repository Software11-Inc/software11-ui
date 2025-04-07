import { Meta, StoryFn } from "@storybook/react";
import { DeckLottieInfo } from "./deck-lottie-info.component";

export default {
  title: "UI/Animation/DeckLottieInfo",
  component: DeckLottieInfo,
} as Meta<typeof DeckLottieInfo>;

const Template: StoryFn<typeof DeckLottieInfo> = (args) => <DeckLottieInfo {...args} />;

export const Primary = Template.bind({});
