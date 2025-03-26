import { Meta, StoryFn } from "@storybook/react";
import { DeckHeader } from "./deck-header.component";

export default {
  title: "Layout/Header/Header",
  component: DeckHeader,
  argTypes: {
    type: {
      description: "Type of the header",
      control: {
        type: "select",
      },
      options: ["default", "search", "page"],
    },
    infoType: {
      description: "Type of the information",
      control: {
        type: "radio",
      },
      options: ["project", "user"],
    },
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
    onSearchChange: { action: "search" },
    onProjectStatusClick: { action: "status" },
  },
} as Meta<typeof DeckHeader>;

const Template: StoryFn<typeof DeckHeader> = (args) => <DeckHeader {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: "default",
  infoType: "user",
  searchValue: "",
  searchPlaceholder: "Enter a search term",

  // Add props here
  hidden: false,
  showNavigation: false,
  showActions: true,
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

export const Search = Template.bind({});

Search.args = {
  type: "search",
  searchValue: "",
  searchPlaceholder: "Enter a search term",

  // Add props here
  hidden: false,
  title: "Home Page",
  description: "Welcome to the home page",
  fullName: "John Doe",
  role: "Admin".toUpperCase(),
  email: "john.doe@gmail.com",
  avatarUrl: undefined,
};

Search.parameters = {
  layout: "fullscreen",
};

export const Page = Template.bind({});

Page.args = {
  type: "page",

  fullName: "John Doe",
  role: "Admin".toUpperCase(),
  email: "john.doe@gmail.com",

  title: "Home Page",

  loading: false,
  onSync: () => {
    console.log("Syncing...");
  },
  onDelete: () => {
    console.log("Deleting...");
  },
};

Page.parameters = {
  layout: "fullscreen",
};

export const NewHeader = Template.bind({});

NewHeader.args = {
  type: "default",
  infoType: "project",
  projectStatus: 1,
  projectTitle: {
    text: "Some Project Name",
  },
};

NewHeader.parameters = {
  layout: "fullscreen",
};
