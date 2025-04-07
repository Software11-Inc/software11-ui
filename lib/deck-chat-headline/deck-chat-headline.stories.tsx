import { Meta, StoryFn } from "@storybook/react";
import { DeckChatHeadline } from "./deck-chat-headline.component";

export default {
  title: "Chat/Components/Headline",
  component: DeckChatHeadline,
  tags: ["autodocs"],
  argTypes: {
    headline: {
      control: "text",
      description: "The headline text to be displayed.",
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
} as Meta<typeof DeckChatHeadline>;

const Template: StoryFn<typeof DeckChatHeadline> = (args) => <DeckChatHeadline {...args} />;

export const Default = Template.bind({});

Default.args = {
  headline: "Sure, I can help with that!",
  isTyping: true,
  typingSpeed: 50,
};
