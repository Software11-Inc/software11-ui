import { Meta, StoryFn } from "@storybook/react";
import { DeckLottieBuild } from "./deck-lottie-build.component";

export default {
  title: "UI/Animation/DeckLottieBuild",
  component: DeckLottieBuild,
} as Meta<typeof DeckLottieBuild>;

const Template: StoryFn<typeof DeckLottieBuild> = (args) => <DeckLottieBuild {...args} />;

export const Primary = Template.bind({});
