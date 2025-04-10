import { Meta, StoryFn } from "@storybook/react";
import { DeckChatConfirmButton } from "./deck-chat-confirm-button.component";

export default {
  title: "Chat/Components/Chat Confirm Button",
  component: DeckChatConfirmButton,
  argTypes: {
    text: {
      control: "text",
      description: "Text to be displayed on the button",
    },
    isTyping: {
      control: "boolean",
      description: "If true, the text will be typed out with a delay",
    },
    typingSpeed: {
      control: "number",
      description: "Speed of typing in milliseconds",
    },
    onClick: {
      action: "clicked",
      description: "Function to be called when the button is clicked",
    },
  },
} as Meta<typeof DeckChatConfirmButton>;

const Template: StoryFn<typeof DeckChatConfirmButton> = (args) => <DeckChatConfirmButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "Confirm",
  isTyping: false,
  typingSpeed: 100,
};
