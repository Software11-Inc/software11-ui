import { Meta, StoryFn } from "@storybook/react";
import { DeckChatMenuButton } from "./deck-chat-menu-button.component";
import ShortcutRounded from "@mui/icons-material/ShortcutRounded";

export default {
  title: "Chat/Components/Menu Button",
  component: DeckChatMenuButton,
  argTypes: {
    text: {
      control: {
        type: "text",
      },
      description: "Text to display on the button.",
      table: {
        category: "Props",
      },
    },
    isTyping: {
      description: "Indicates if the button is in typing state.",
      table: {
        category: "Props",
      },
    },
    icon: {
      description: "Icon to display on the button.",
      table: {
        category: "Props",
      },
    },
    onClick: {
      action: "clicked",
      description: "Function to call when the button is clicked.",
      table: {
        category: "Events",
      },
    },
    onTypingComplete: {
      action: "typingCompleted",
      description: "Function to call when typing is completed.",
      table: {
        category: "Events",
      },
    },
  },
} as Meta<typeof DeckChatMenuButton>;

const Template: StoryFn<typeof DeckChatMenuButton> = (args) => <DeckChatMenuButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "Menu Button",
  isTyping: true,
  icon: (
    <ShortcutRounded
      sx={{
        transform: "rotate(180deg)",
      }}
    />
  ),
};
