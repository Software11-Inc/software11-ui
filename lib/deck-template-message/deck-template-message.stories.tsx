import { Meta, StoryFn } from "@storybook/react";
import { DeckTemplateMessage } from "./deck-template-message.component";

export default {
  title: "Deck Template Message",
  component: DeckTemplateMessage,
} as Meta<typeof DeckTemplateMessage>;

const Template: StoryFn<typeof DeckTemplateMessage> = (args) => <DeckTemplateMessage {...args} />;

export const Default = Template.bind({});

Default.args = {
  message: "This is a message",
  position: "1",
  title: "Title",
  action: {
    text: "Action",
    action: () => console.log("Action clicked"),
  },
};
