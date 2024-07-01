import { Meta, StoryFn } from "@storybook/react";
import { DeckHeaderNavigation } from "./deck-header-navigation.component";

export default {
  title: "Layout/Header/Components/Navigation",
  component: DeckHeaderNavigation,
  parameters: {
    controls: { expanded: false },
  },
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
  },
} as Meta<typeof DeckHeaderNavigation>;

const Template: StoryFn<typeof DeckHeaderNavigation> = (args) => <DeckHeaderNavigation {...args} />;

export const Default = Template.bind({});

Default.args = {
  // Add props here
  title: "Home Page",
  description: "Welcome to the home page",
};
