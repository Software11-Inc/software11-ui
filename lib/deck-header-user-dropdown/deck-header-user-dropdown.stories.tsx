import { Meta, StoryFn } from "@storybook/react";
import { DeckHeaderUserDropdown } from "./deck-header-user-dropdown.component";

export default {
  title: "Layout/Header/User Dropdown",
  component: DeckHeaderUserDropdown,
  parameters: {
    controls: { expanded: false },
  },
  argTypes: {
    isRight: {
      description: "Position the dropdown to the right",
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
} as Meta<typeof DeckHeaderUserDropdown>;

const Template: StoryFn<typeof DeckHeaderUserDropdown> = (args) => (
  <DeckHeaderUserDropdown {...args} />
);

export const Default = Template.bind({});

Default.args = {
  isRight: false,
  avatarUrl: undefined,
  fullName: "John Doe",
  email: "john.doe@gmail.com",
};
