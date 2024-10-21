import { Meta, StoryFn } from "@storybook/react";
import { DeckTemplateShapeValue } from "./deck-template-shape-value.component";

export default {
  title: "Template/Shape/Value",
  component: DeckTemplateShapeValue,
} as Meta<typeof DeckTemplateShapeValue>;

const Template: StoryFn<typeof DeckTemplateShapeValue> = (args) => <DeckTemplateShapeValue {...args} />;

export const Default = Template.bind({});

Default.args = {
  value: "Value",
};
