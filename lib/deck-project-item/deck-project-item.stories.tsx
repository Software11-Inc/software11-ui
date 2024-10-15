import { Dataset, IFile, IFileSheet } from "@models";
import { Meta, StoryFn } from "@storybook/react";
import { DeckDatasetItem } from "../deck-dataset-item";
import { DeckFileGroupItem } from "../deck-file-group-item";
import { DeckFileSheetItem } from "../deck-file-sheet-item";
import { DeckProjectItem } from "./deck-project-item.component";

export default {
  title: "Pages/Library/Data/Project",
  component: DeckProjectItem,
} as Meta<typeof DeckProjectItem>;

const Template: StoryFn<typeof DeckProjectItem<IFile>> = (args) => <DeckProjectItem {...args} />;

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

export const Primary = Template.bind({});
Primary.args = {
  project: {
    header: {
      label: "Project",
      description: "Project description",
    },
    data: [
      {
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
      {
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
            data: ["3", "4"],
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
    ],
  },
  itemTemplate: (item) => (
    <DeckFileGroupItem
      file={item}
      itemTemplate={(item: IFileSheet) => (
        <DeckFileSheetItem
          sheet={item}
          itemTemplate={(id: string) => <DeckDatasetItem item={datasetMap[id]} loaded />}
        />
      )}
    />
  ),
};
