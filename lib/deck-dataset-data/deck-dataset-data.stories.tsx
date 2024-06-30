import { Meta, StoryFn } from "@storybook/react";
import { DeckDatasetData } from "./deck-dataset-data.component";

export default {
  title: "Powerpoint/Pages/Dataset Details/Data",
  component: DeckDatasetData,
} as Meta<typeof DeckDatasetData>;

export const Default: StoryFn<typeof DeckDatasetData> = (args) => <DeckDatasetData {...args} />;

Default.storyName = "Excel Table";

Default.args = {
  hasStatus: true,
  hasActions: true,
  compact: false,
  level: 0,
  size: "sm",
  data: {
    "Group 1": [
      {
        id: "figure-1",
        name: {
          cell: "A1",
          value: "Name 1",
        },
        figure: {
          cell: "B1",
          value: "Value 1",
        },
      },
      {
        id: "figure-2",
        name: {
          cell: "A2",
          value: "Name 2",
        },
        figure: {
          cell: "B2",
          value: "Value 2",
        },
      },
      {
        id: "figure-3",
        name: {
          cell: "A3",
          value: "Name 3",
        },
        figure: {
          cell: "B3",
          value: "Value 3",
        },
      },
      {
        id: "figure-4",
        name: {
          cell: "A4",
          value: "Name 4",
        },
        figure: {
          cell: "B4",
          value: "Value 4",
        },
      },
      {
        id: "figure-5",
        name: {
          cell: "A5",
          value: "Name 5",
        },
        figure: {
          cell: "B5",
          value: "Value 5",
        },
      },
      {
        id: "figure-6",
        name: {
          cell: "A6",
          value: "Name 6",
        },
        figure: {
          cell: "B6",
          value: "Value 6",
        },
      },
    ],
    "Group 2": [
      {
        id: "figure-7",
        name: {
          cell: "A7",
          value: "Name 7",
        },
        figure: {
          cell: "B7",
          value: "Value 7",
        },
      },
      {
        id: "figure-8",
        name: {
          cell: "A8",
          value: "Name 8",
        },
        figure: {
          cell: "B8",
          value: "Value 8",
        },
      },
      {
        id: "figure-9",
        name: {
          cell: "A9",
          value: "Name 9",
        },
        figure: {
          cell: "B9",
          value: "Value 9",
        },
      },
    ],
  },
};
