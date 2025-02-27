import { Meta, StoryFn } from "@storybook/react";
import { DeckHeaderPage } from "./deck-header-page.component";

export default {
  title: "Layout/Header/Components/Page",
  component: DeckHeaderPage,
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
} as Meta<typeof DeckHeaderPage>;

const Template: StoryFn<typeof DeckHeaderPage> = (args) => <DeckHeaderPage {...args} />;

export const Default = Template.bind({});

Default.args = {
  // Add props here
  title: "Home Page",
  description: "Welcome to the home page",

  loading: false,

  onSync: () => {
    console.log("Syncing...");
  },

  onDelete: () => {
    console.log("Deleting...");
  },
};
