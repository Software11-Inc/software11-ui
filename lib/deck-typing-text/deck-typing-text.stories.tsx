import { Meta, StoryFn } from "@storybook/react";
import { DeckTypingText } from "./deck-typing-text.component";

export default {
  title: "Chat/Components/Typing Text",
  component: DeckTypingText,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "The text to be displayed.",
      table: {
        category: "Props",
      },
    },
    isTyping: {
      control: "boolean",
      description: "Indicates if the text is currently being typed.",
      table: {
        category: "Props",
      },
    },
    typingSpeed: {
      control: "number",
      description: "The speed of typing in milliseconds.",
      table: {
        category: "Props",
      },
    },
    onTypingComplete: {
      action: "typingComplete",
      description: "Callback function triggered when typing is complete.",
      table: {
        category: "Events",
      },
    },
  },
} as Meta<typeof DeckTypingText>;

const Template: StoryFn<typeof DeckTypingText> = (args) => <DeckTypingText {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "Sure, I can help with that!",
  isTyping: true,
  typingSpeed: 50,
};
