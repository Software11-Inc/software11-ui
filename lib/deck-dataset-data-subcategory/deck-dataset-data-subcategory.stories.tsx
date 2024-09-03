import { Meta, StoryFn } from "@storybook/react";
import { datasetTypes, sizes } from "../story-types";
import { DeckDatasetDataSubcategory } from "./deck-dataset-data-subcategory.component";

export default {
  title: "Powerpoint/Dataset Details/Data/Components/Subcategory",
  component: DeckDatasetDataSubcategory,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: datasetTypes,
        table: {
          disable: true,
        },
      },
    },
    size: {
      control: {
        type: "select",
        options: sizes,
      },
    },
    onAddShape: {
      action: "add-shape",
    },
    onResetShapes: {
      action: "reset-shapes",
    },
    onSyncShapes: {
      action: "sync-shapes",
    },
    onSettings: {
      action: "open-settings",
    },
  },
} as Meta<typeof DeckDatasetDataSubcategory>;

export const Default: StoryFn<typeof DeckDatasetDataSubcategory> = (args) => <DeckDatasetDataSubcategory {...args} />;

Default.storyName = "Default";

Default.args = {
  type: "excel-matrix",
  groupName: "Group Name",
  compact: false,
  level: 0,
  size: "sm",
  hasStatus: true,
  hasActions: true,
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
    "Subcategory 3": [
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
  shapes: {
    "figure-1": [
      {
        shapeID: "shape-1",
        shapeIndex: 1,
        instanceID: "instance-1",
        containerID: "slide-1",
        containerIndex: 1,
        figureName: "figure-1",
        latestFigureValue: "Value 1",
        synced: false,
        sourceDataset: {
          datasetID: "dataset-1",
          datasetFigureID: "figure-1",
        },
      },
    ],
    "figure-2": [
      {
        shapeID: "shape-2",
        shapeIndex: 2,
        instanceID: "instance-2",
        containerID: "slide-2",
        containerIndex: 2,
        figureName: "figure-2",
        latestFigureValue: "Value 2",
        synced: false,
        sourceDataset: {
          datasetID: "dataset-1",
          datasetFigureID: "figure-2",
        },
      },
    ],
    "figure-3": [
      {
        shapeID: "shape-3",
        shapeIndex: 3,
        instanceID: "instance-3",
        containerID: "slide-3",
        containerIndex: 3,
        figureName: "figure-3",
        latestFigureValue: "Value 3",
        synced: false,
        sourceDataset: {
          datasetID: "dataset-1",
          datasetFigureID: "figure-3",
        },
      },
    ],
    "figure-6": [
      {
        shapeID: "shape-6",
        shapeIndex: 6,
        instanceID: "instance-6",
        containerID: "slide-6",
        containerIndex: 6,
        figureName: "figure-6",
        latestFigureValue: "Value 6",
        synced: false,
        sourceDataset: {
          datasetID: "dataset-1",
          datasetFigureID: "figure-6",
        },
      },
    ],
  },
  apiChanges: {
    "figure-1": [
      {
        shapeID: "shape-1",
        shapeIndex: 1,
        value: "Value 1 from API",
      },
    ],
  },
  userChanges: {
    "figure-6": [
      {
        shapeID: "shape-6",
        shapeIndex: 6,
        value: "Value 6 from User",
      },
    ],
  },
};
