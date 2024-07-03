import { DeckTextButton } from "./deck-text-button.component";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "UI/Buttons/Text Button",
  component: DeckTextButton,
} as Meta<typeof DeckTextButton>;

const Template: StoryFn<typeof DeckTextButton> = (args) => <DeckTextButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "Text Button",
  action: () => console.log("Text Button"),
};
