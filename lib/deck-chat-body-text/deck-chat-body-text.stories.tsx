import { Meta, StoryFn } from "@storybook/react";
import { DeckChatBodyText } from "./deck-chat-body-text.component";

export default {
  title: "Chat/Components/Body Text",
  component: DeckChatBodyText,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: {
        type: "text",
      },
      description: "Text to display in the chat body.",
      table: {
        category: "Props",
      },
    },
    onTypingComplete: {
      action: "typingComplete",
      description: "Callback function when typing is complete.",
      table: {
        category: "Events",
      },
    },
  },
} as Meta<typeof DeckChatBodyText>;

const Template: StoryFn<typeof DeckChatBodyText> = (args) => {
  return <DeckChatBodyText {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  text: "Hello, how can I help you?",
};
