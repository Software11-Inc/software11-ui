import { Meta, StoryFn } from "@storybook/react";
import { DeckTemplateShapeItterator } from "./deck-template-shape-itterator.component";

export default {
  title: "Template/Shape/Itterator",
  component: DeckTemplateShapeItterator,
  argTypes: {
    onNext: { action: "Next" },
    onPrevious: { action: "Previous" },
    onOpenFilter: { action: "Open filter" },
  },
} as Meta<typeof DeckTemplateShapeItterator>;

const Template: StoryFn<typeof DeckTemplateShapeItterator> = (args) => <DeckTemplateShapeItterator {...args} />;

export const Default = Template.bind({});

Default.args = {
  groupName: "Group name",
  hint: "You may change the value though groups",
};
