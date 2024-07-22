import { Meta, StoryFn } from "@storybook/react";
import { DeckLottieSelect } from "./deck-lottie-select.component";

export default {
  title: "DeckLottieSelect",
  component: DeckLottieSelect,
} as Meta<typeof DeckLottieSelect>;

const Template: StoryFn<typeof DeckLottieSelect> = (args) => <DeckLottieSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  active: true,
};
