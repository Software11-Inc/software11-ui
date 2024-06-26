import { Meta, StoryFn } from "@storybook/react";
import { DeckDatasetDataGroup } from "./deck-dataset-data-group.component";

export default {
  argTypes: {
    type: {
      options: ["default", "excel-table", "excel-matrix", "excel-default"],
      control: { type: "select" },
      table: {
        disable: true,
      },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
  },
} as Meta<typeof DeckDatasetDataGroup>;

export const Default: StoryFn<typeof DeckDatasetDataGroup> = (args) => (
  <DeckDatasetDataGroup {...args} />
);

Default.storyName = "Default";

Default.args = {
  groupName: "Group Name",
  items: [
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
  ],
  size: "sm",
  type: "excel-table",
  compact: false,
  hasActions: true,
  hasStatus: true,
  level: 0,
};
