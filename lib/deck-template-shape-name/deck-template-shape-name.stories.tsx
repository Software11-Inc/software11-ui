import { Meta, StoryFn } from "@storybook/react";
import { DeckTemplateShapeName } from "./deck-template-shape-name.component";

export default {
  title: "Template/Shape/Name",
  component: DeckTemplateShapeName,
} as Meta<typeof DeckTemplateShapeName>;

const Template: StoryFn<typeof DeckTemplateShapeName> = (args) => <DeckTemplateShapeName {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: "Name",
};
