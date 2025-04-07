import { Meta, StoryFn } from "@storybook/react";
import { DeckRepeaterFormSort } from "./deck-repeater-form-sort.component";

export default {
  title: "Pages/Template/Components/DeckRepeaterFormSort",
  component: DeckRepeaterFormSort,
  argTypes: {
    updateSort: { action: "updateSort" },
    onRemove: { action: "onRemove" },
  },
} as Meta<typeof DeckRepeaterFormSort>;

const Template: StoryFn<typeof DeckRepeaterFormSort> = (args) => <DeckRepeaterFormSort {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  headers: [
    { cell: "A1", value: "Name" },
    { cell: "B1", value: "Age" },
    { cell: "C1", value: "Address" },
    { cell: "D1", value: "Phone" },
    { cell: "E1", value: "Email" },
  ],
  sortOperators: [
    { key: "ASC", label: "Ascending" },
    { key: "DESC", label: "Descending" },
  ],
  sortItem: {
    key: "A1",
    operator: "ASC",
  },
};
