import { Meta, StoryFn } from "@storybook/react";
import { DeckRepeaterFormField } from "./deck-repeater-form-field.component";

export default {
  title: "Pages/Template/Components/DeckRepeaterFormField",
  component: DeckRepeaterFormField,
} as Meta<typeof DeckRepeaterFormField>;

const Template: StoryFn<typeof DeckRepeaterFormField> = (args) => <DeckRepeaterFormField {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "Field",
  description: "Values from this field will be populated",
  headers: ["option-1", "option-2", "option-3", "option-4"],
  selected: "option-3",
};
