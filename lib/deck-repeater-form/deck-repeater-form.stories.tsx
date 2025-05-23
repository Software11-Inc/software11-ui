import { Meta, StoryFn } from "@storybook/react";
import { DeckRepeaterForm } from "./deck-repeater-form.component";

export default {
  title: "Pages/Template/Components/DeckRepeaterForm",
  component: DeckRepeaterForm,
  argTypes: {
    headers: {
      control: {
        type: "object",
      },
      description: "Headers for the repeater form.",
      table: {
        category: "Props",
      },
    },
    figures: {
      control: {
        type: "object",
      },
      description: "Figures for the repeater form.",
      table: {
        category: "Props",
      },
    },
    filter: {
      control: {
        type: "object",
      },
      description: "Filter for the repeater form.",
      table: {
        category: "Props",
      },
    },
    sort: {
      control: {
        type: "object",
      },
      description: "Sort for the repeater form.",
      table: {
        category: "Props",
      },
    },
    addFilter: {
      action: "addFilter",
      description: "Callback function when a filter is added.",
      table: {
        category: "Events",
      },
    },
    removeFilter: {
      action: "removeFilter",
      description: "Callback function when a filter is removed.",
      table: {
        category: "Events",
      },
    },
    updateFilter: {
      action: "updateFilter",
      description: "Callback function when a filter is updated.",
      table: {
        category: "Events",
      },
    },
    addSort: {
      action: "addSort",
      description: "Callback function when a sort is added.",
      table: {
        category: "Events",
      },
    },
    removeSort: {
      action: "removeSort",
      description: "Callback function when a sort is removed.",
      table: {
        category: "Events",
      },
    },
    updateSort: {
      action: "updateSort",
      description: "Callback function when a sort is updated.",
      table: {
        category: "Events",
      },
    },
  },
} as Meta<typeof DeckRepeaterForm>;

const Template: StoryFn<typeof DeckRepeaterForm> = (args) => <DeckRepeaterForm {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  headers: [
    { cell: "A1", value: "Name" },
    { cell: "B1", value: "Age" },
    { cell: "C1", value: "Address" },
    { cell: "D1", value: "Phone" },
    { cell: "E1", value: "Email" },
  ],
  figures: [
    {
      id: "1",
      name: {
        cell: "A1",
        value: "Name",
      },
      figure: {
        cell: "A2",
        value: "John Doe",
      },
    },
    {
      id: "2",
      name: {
        cell: "B1",
        value: "Age",
      },
      figure: {
        cell: "B2",
        value: "25",
      },
    },
    {
      id: "3",
      name: {
        cell: "C1",
        value: "Address",
      },
      figure: {
        cell: "C2",
        value: "1234 Main St",
      },
    },
    {
      id: "4",
      name: {
        cell: "D1",
        value: "Phone",
      },
      figure: {
        cell: "D2",
        value: "555-555-5555",
      },
    },
    {
      id: "5",
      name: {
        cell: "E1",
        value: "Email",
      },
      figure: {
        cell: "E2",
        value: "example@email.com",
      },
    },
    {
      id: "6",
      name: {
        cell: "A1",
        value: "Name",
      },
      figure: {
        cell: "A3",
        value: "Jane Doe",
      },
    },
    {
      id: "7",
      name: {
        cell: "B1",
        value: "Age",
      },
      figure: {
        cell: "B3",
        value: "30",
      },
    },
    {
      id: "8",
      name: {
        cell: "C1",
        value: "Address",
      },
      figure: {
        cell: "C3",
        value: "1234 Elm St",
      },
    },
    {
      id: "9",
      name: {
        cell: "D1",
        value: "Phone",
      },
      figure: {
        cell: "D3",
        value: "555-555-5555",
      },
    },
    {
      id: "10",
      name: {
        cell: "E1",
        value: "Email",
      },
      figure: {
        cell: "E3",
        value: "example@email.com",
      },
    },
    {
      id: "11",
      name: {
        cell: "A1",
        value: "Name",
      },
      figure: {
        cell: "A4",
        value: "John Smith",
      },
    },
    {
      id: "12",
      name: {
        cell: "B1",
        value: "Age",
      },
      figure: {
        cell: "B4",
        value: "35",
      },
    },
    {
      id: "13",
      name: {
        cell: "C1",
        value: "Address",
      },
      figure: {
        cell: "C4",
        value: "1234 Oak St",
      },
    },
    {
      id: "14",
      name: {
        cell: "D1",
        value: "Phone",
      },
      figure: {
        cell: "D4",
        value: "555-555-5555",
      },
    },
    {
      id: "15",
      name: {
        cell: "E1",
        value: "Email",
      },
      figure: {
        cell: "E4",
        value: "example@email.com",
      },
    },
  ],
  filter: [
    {
      key: "A1",
      operator: "EQUAL",
      value: "John Doe",
    },
    {
      key: "B1",
      operator: "GREATER_THAN",
      value: "25",
    },
    {
      key: "C1",
      operator: "CONTAINS",
      value: "Main",
    },
  ],
  sort: [
    {
      key: "A1",
      operator: "ASC",
    },
  ],
};

Primary.parameters = {
  layout: "fullscreen",
};
