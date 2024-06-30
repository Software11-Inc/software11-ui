import { Meta, StoryFn } from "@storybook/react";
import { DeckDatasetDataSubcategory } from "./deck-dataset-data-subcategory.component";

export default {
  title: "Powerpoint/Pages/Dataset Details/Data Subcategory",
  component: DeckDatasetDataSubcategory,
} as Meta<typeof DeckDatasetDataSubcategory>;

export const Default: StoryFn<typeof DeckDatasetDataSubcategory> = (args) => <DeckDatasetDataSubcategory {...args} />;

Default.storyName = "Default";

Default.args = {
  type: "excel-matrix",
  groupName: "Group Name",
  items: {
    "Subcategory 1": [
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
    ],
    "Subcategory 2": [
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
  },
  compact: false,
  level: 0,
  size: "sm",
  hasStatus: true,
  hasActions: true,
};