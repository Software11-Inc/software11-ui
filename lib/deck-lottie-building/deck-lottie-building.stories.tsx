import { Meta, StoryFn } from "@storybook/react";
import { DeckLottieBuilding } from "./deck-lottie-building.component";

export default {
  title: "DeckLottieBuilding",
  component: DeckLottieBuilding,
} as Meta<typeof DeckLottieBuilding>;

const Template: StoryFn<typeof DeckLottieBuilding> = (args) => <DeckLottieBuilding {...args} />;

export const Primary = Template.bind({});
