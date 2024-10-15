import { Dataset, IFileSheet } from "@models";
import { Meta, StoryFn } from "@storybook/react";
import { DeckDatasetItem } from "../deck-dataset-item";
import { DeckFileSheetItem } from "../deck-file-sheet-item/deck-file-sheet-item.component";
import { DeckFileGroupItem } from "./deck-file-group-item.component";

export default {
  title: "Pages/Library/Data/File",
  component: DeckFileGroupItem,
} as Meta<typeof DeckFileGroupItem>;

const Template: StoryFn<typeof DeckFileGroupItem> = (args) => <DeckFileGroupItem {...args} />;

export const Default = Template.bind({});

const datasetMap: Record<string, Dataset> = {
  "1": {
    id: "1",
    name: "Dataset Name",
    type: "default",
    lastUpdated: {
      _seconds: 1632201600,
    },
  } as Dataset,
  "2": {
    id: "2",
    name: "Dataset Name",
    type: "excel-table",
    lastUpdated: {
      _seconds: 1632201600,
    },
  } as Dataset,
  "3": {
    id: "3",
    name: "Dataset Name",
    type: "excel-table",
    lastUpdated: {
      _seconds: 1632201600,
    },
  } as Dataset,
  "4": {
    id: "4",
    name: "Dataset Name",
    type: "excel-table",
    lastUpdated: {
      _seconds: 1632201600,
    },
  } as Dataset,
};

Default.args = {
  file: {
    header: {
      label: "File Name",
      description: "Windows",
      type: "excel",
    },
    data: [
      {
        header: {
          label: "Sheet Name",
          description: "",
        },
        data: ["1", "2"],
      } as IFileSheet,
      {
        header: {
          label: "Sheet Name 2",
          description: "",
        },
        data: ["3", "4"],
      } as IFileSheet,
    ],
  },
  itemTemplate: (item: IFileSheet) => (
    <DeckFileSheetItem sheet={item} itemTemplate={(id: string) => <DeckDatasetItem item={datasetMap[id]} loaded />} />
  ),
};
