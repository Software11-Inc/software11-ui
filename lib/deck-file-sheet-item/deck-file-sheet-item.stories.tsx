import { Dataset } from "@models";
import { Meta, StoryFn } from "@storybook/react";
import { DeckDatasetItem } from "../deck-dataset-item";
import { DeckFileSheetItem } from "./deck-file-sheet-item.component";

export default {
  title: "Pages/Library/Data/Sheet",
  component: DeckFileSheetItem,
} as Meta<typeof DeckFileSheetItem>;

const Template: StoryFn<typeof DeckFileSheetItem> = (args) => <DeckFileSheetItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  sheet: {
    header: {
      label: "Sheet Name",
      description: "",
    },
    data: [
      {
        id: "1",
        name: "Dataset Name",
        type: "default",
        lastUpdated: {
          _seconds: 1632201600,
        },
      } as Dataset,
      {
        id: "2",
        name: "Dataset Name",
        type: "excel-table",
        lastUpdated: {
          _seconds: 1632201600,
        },
      } as Dataset,
    ],
  },
  itemTemplate: (item: Dataset) => <DeckDatasetItem item={item} loaded />,
};
