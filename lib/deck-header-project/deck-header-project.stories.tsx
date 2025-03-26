import { Meta, StoryFn } from "@storybook/react";
import { DeckHeaderProject } from "./deck-header-project.component";

export default {
  title: "Layout/Header/Components/Project",
  component: DeckHeaderProject,
} as Meta<typeof DeckHeaderProject>;

const Template: StoryFn<typeof DeckHeaderProject> = (args) => <DeckHeaderProject {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: {
    text: "Deck",
  },
  description: {
    text: "Description",
  },
  status: 1,
};
