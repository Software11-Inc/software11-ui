import { Meta, StoryFn } from "@storybook/react";
import { DeckRepeaterFormFilter } from "./deck-repeater-form-filter.component";

export default {
  title: "DeckRepeaterFormFilter",
  component: DeckRepeaterFormFilter,
} as Meta<typeof DeckRepeaterFormFilter>;

const Template: StoryFn<typeof DeckRepeaterFormFilter> = (args) => <DeckRepeaterFormFilter {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  filter: {
    key: "Name",
    operator: "EQUAL",
    value: "John Doe",
  },
  headers: [
    { cell: "A1", value: "Name" },
    { cell: "B1", value: "Age" },
    { cell: "C1", value: "Address" },
    { cell: "D1", value: "Phone" },
    { cell: "E1", value: "Email" },
  ],
  filterOperators: [
    { key: "EQUAL", label: "=" },
    { key: "NOT_EQUAL", label: "!=" },
    { key: "GREATER_THAN", label: ">" },
    { key: "LESS_THAN", label: "<" },
    { key: "GREATER_THAN_OR_EQUAL", label: ">=" },
    { key: "LESS_THAN_OR_EQUAL", label: "<=" },
    { key: "CONTAINS", label: "Contains" },
    { key: "NOT_CONTAINS", label: "Not Contains" },
    { key: "STARTS_WITH", label: "Starts With" },
    { key: "ENDS_WITH", label: "Ends With" },
  ],
};
