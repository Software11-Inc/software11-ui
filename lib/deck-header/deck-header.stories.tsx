import { Meta, StoryFn } from "@storybook/react";
import { DeckHeader } from "./deck-header.component";

export default {
  title: "Layout/Header/Header",
  component: DeckHeader,
  argTypes: {
    title: {
      description: "Title of the page",
      control: {
        type: "text",
      },
    },
    description: {
      description: "Description of the page",
      control: {
        type: "text",
      },
    },
    onBack: { action: "back" },
    onLogout: { action: "logout" },
    showNavigation: {
      description: "Show the navigation bar",
      control: {
        type: "boolean",
      },
    },
    avatarUrl: {
      description: "URL of the user avatar",
      control: {
        type: "text",
      },
    },
    fullName: {
      description: "Full name of the user",
      control: {
        type: "text",
      },
    },
    email: {
      description: "Email of the user",
      control: {
        type: "text",
      },
    },
    role: {
      description: "Role of the user",
      control: {
        type: "text",
      },
    },
  },
} as Meta<typeof DeckHeader>;

const Template: StoryFn<typeof DeckHeader> = (args) => <DeckHeader {...args} />;

export const Default = Template.bind({});

Default.args = {
  // Add props here
  hidden: false,
  showNavigation: false,
  title: "Home Page",
  description: "Welcome to the home page",
  fullName: "John Doe",
  role: "Admin".toUpperCase(),
  email: "john.doe@gmail.com",
  avatarUrl: undefined,
  notificationCount: 12,
};

Default.parameters = {
  layout: "fullscreen",
};
