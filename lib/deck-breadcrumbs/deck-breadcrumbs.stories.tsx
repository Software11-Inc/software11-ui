import { Meta, StoryFn } from "@storybook/react";
import { DeckBreadcrumbs } from "./deck-breadcrumbs.component";

export default {
  title: "UI/Breadcrumbs",
  component: DeckBreadcrumbs,
  argTypes: {
    onHomeClick: { action: "click" },
  },
} as Meta<typeof DeckBreadcrumbs>;

const Template: StoryFn<typeof DeckBreadcrumbs> = (args) => <DeckBreadcrumbs {...args} />;

export const Default = Template.bind({});

Default.args = {
  breadcrumbs: [
    {
      title: "Album name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      action: () => console.log("Action clicked"),
    },
    {
      title: "Folder Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      action: () => console.log("Action clicked"),
    },
  ],
};
