import { Dataset, IFileSheet } from "@models";
import { Meta, StoryFn } from "@storybook/react";
import { DeckDatasetItem } from "../deck-dataset-item";
import { DeckFileGroupItem } from "../deck-file-group-item";
import { DeckFileSheetItem } from "../deck-file-sheet-item";
import { DeckProjectItem } from "./deck-project-item.component";

export default {
  title: "DeckProjectItem",
  component: DeckProjectItem,
} as Meta<typeof DeckProjectItem>;

const Template: StoryFn<typeof DeckProjectItem> = (args) => <DeckProjectItem {...args} />;

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
          } as IFileSheet,
          {
            header: {
              label: "Sheet Name 2",
              description: "",
            },
            data: [
              {
                id: "3",
                name: "Dataset Name",
                type: "default",
                lastUpdated: {
                  _seconds: 1632201600,
                },
              } as Dataset,
              {
                id: "4",
                name: "Dataset Name",
                type: "excel-table",
                lastUpdated: {
                  _seconds: 1632201600,
                },
              } as Dataset,
            ],
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
          } as IFileSheet,
          {
            header: {
              label: "Sheet Name 2",
              description: "",
            },
            data: [
              {
                id: "3",
                name: "Dataset Name",
                type: "default",
                lastUpdated: {
                  _seconds: 1632201600,
                },
              } as Dataset,
              {
                id: "4",
                name: "Dataset Name",
                type: "excel-table",
                lastUpdated: {
                  _seconds: 1632201600,
                },
              } as Dataset,
            ],
          } as IFileSheet,
        ],
      },
    ],
  },
  itemTemplate: (item) => (
    <DeckFileGroupItem
      file={item}
      itemTemplate={(item: IFileSheet) => (
        <DeckFileSheetItem sheet={item} itemTemplate={(item: Dataset) => <DeckDatasetItem item={item} loaded />} />
      )}
    />
  ),
};
