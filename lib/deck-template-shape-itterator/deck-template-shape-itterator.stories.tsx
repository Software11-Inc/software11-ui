import { Meta, StoryFn } from "@storybook/react";
import { DeckTemplateShapeItterator } from "./deck-template-shape-itterator.component";

export default {
  title: "Template/Shape/Itterator",
  component: DeckTemplateShapeItterator,
} as Meta<typeof DeckTemplateShapeItterator>;

const Template: StoryFn<typeof DeckTemplateShapeItterator> = (args) => <DeckTemplateShapeItterator {...args} />;

export const Default = Template.bind({});
