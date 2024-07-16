import { Meta, StoryFn } from "@storybook/react";
import { ITableFigure } from "../models/figure.model";
import { DeckDatasetData } from "./deck-dataset-data.component";

export default {
  title: "Powerpoint/Dataset Details/Data",
  component: DeckDatasetData,
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
} as Meta<typeof DeckDatasetData>;

export const Default: StoryFn<typeof DeckDatasetData> = (args) => <DeckDatasetData {...args} />;

Default.storyName = "Excel Table";

Default.args = {
  hasStatus: true,
  hasActions: true,
  compact: false,
  level: 0,
  size: "sm",
  type: "excel-table",
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
    "Group 3": [
      {
        id: "figure-10",
        name: {
          cell: "A10",
          value: "Name 10",
        },
        figure: {
          cell: "B10",
          value: "Value 10",
        },
      },
      {
        id: "figure-11",
        name: {
          cell: "A11",
          value: "Name 11",
        },
        figure: {
          cell: "B11",
          value: "Value 11",
        },
      },
      {
        id: "figure-12",
        name: {
          cell: "A12",
          value: "Name 12",
        },
        figure: {
          cell: "B12",
          value: "Value 12",
        },
      },
    ],
    "Group 4": [
      {
        id: "figure-13",
        name: {
          cell: "A13",
          value: "Name 13",
        },
        figure: {
          cell: "B13",
          value: "Value 13",
        },
      },
      {
        id: "figure-14",
        name: {
          cell: "A14",
          value: "Name 14",
        },
        figure: {
          cell: "B14",
          value: "Value 14",
        },
      },
      {
        id: "figure-15",
        name: {
          cell: "A15",
          value: "Name 15",
        },
        figure: {
          cell: "B15",
          value: "Value 15",
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
        slideID: "slide-1",
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
        slideID: "slide-2",
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
        slideID: "slide-3",
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
        slideID: "slide-6",
        figureName: "figure-6",
        latestFigureValue: "Value 6",
        synced: false,
        sourceDataset: {
          datasetID: "dataset-1",
          datasetFigureID: "figure-6",
        },
      },
    ],
    "figure-8": [
      {
        shapeID: "shape-8",
        shapeIndex: 8,
        instanceID: "instance-8",
        slideID: "slide-8",
        figureName: "figure-8",
        latestFigureValue: "Value 8",
        synced: false,
        sourceDataset: {
          datasetID: "dataset-1",
          datasetFigureID: "figure-8",
        },
      },
    ],
    "figure-9": [
      {
        shapeID: "shape-9",
        shapeIndex: 9,
        instanceID: "instance-9",
        slideID: "slide-9",
        figureName: "figure-9",
        latestFigureValue: "Value 9",
        synced: false,
        sourceDataset: {
          datasetID: "dataset-1",
          datasetFigureID: "figure-9",
        },
      },
    ],
    "figure-12": [
      {
        shapeID: "shape-12",
        shapeIndex: 12,
        instanceID: "instance-12",
        slideID: "slide-12",
        figureName: "figure-12",
        latestFigureValue: "Value 12",
        synced: false,
        sourceDataset: {
          datasetID: "dataset-1",
          datasetFigureID: "figure-12",
        },
      },
    ],
  },
  apiChanges: {
    "figure-8": [
      {
        shapeID: "shape-8",
        shapeIndex: 8,
        value: "Value 8 from API",
      },
    ],
  },
  userChanges: {
    "figure-12": [
      {
        shapeID: "shape-12",
        shapeIndex: 12,
        value: "Value 12 from User",
      },
    ],
  },
  onAddShape: (figureID: string) => console.log("Add shape", figureID),
  onResetShapes: (figureID: string, shapeIDs: string[]) => console.log("Reset shapes", figureID, shapeIDs),
  onSyncShapes: (figureID: string, shapeIDs: string[]) => console.log("Sync shapes", figureID, shapeIDs),
  onSettings: (figure: ITableFigure) => console.log("Open settings", figure),
};

export const Matrix: StoryFn<typeof DeckDatasetData> = (args) => <DeckDatasetData {...args} />;

Matrix.storyName = "Excel Matrix";

Matrix.args = {
  type: "excel-matrix",
  hasStatus: true,
  hasActions: true,
  compact: false,
  data: {
    "Group 1": {
      "Subgroup 1": [
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
      "Subgroup 2": [
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
    "Group 2": {
      "Subgroup 1": [
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
      "Subgroup 2": [
        {
          id: "figure-10",
          name: {
            cell: "A10",
            value: "Name 10",
          },
          figure: {
            cell: "B10",
            value: "Value 10",
          },
        },
        {
          id: "figure-11",
          name: {
            cell: "A11",
            value: "Name 11",
          },
          figure: {
            cell: "B11",
            value: "Value 11",
          },
        },
        {
          id: "figure-12",
          name: {
            cell: "A12",
            value: "Name 12",
          },
          figure: {
            cell: "B12",
            value: "Value 12",
          },
        },
      ],
      "Subgroup 3": [
        {
          id: "figure-13",
          name: {
            cell: "A13",
            value: "Name 13",
          },
          figure: {
            cell: "B13",
            value: "Value 13",
          },
        },
        {
          id: "figure-14",
          name: {
            cell: "A14",
            value: "Name 14",
          },
          figure: {
            cell: "B14",
            value: "Value 14",
          },
        },
        {
          id: "figure-15",
          name: {
            cell: "A15",
            value: "Name 15",
          },
          figure: {
            cell: "B15",
            value: "Value 15",
          },
        },
      ],
    },
  },
  shapes: {
    "figure-1": [
      {
        shapeID: "shape-1",
        shapeIndex: 1,
        instanceID: "instance-1",
        slideID: "slide-1",
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
        slideID: "slide-2",
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
        slideID: "slide-3",
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
        slideID: "slide-6",
        figureName: "figure-6",
        latestFigureValue: "Value 6",
        synced: false,
        sourceDataset: {
          datasetID: "dataset-1",
          datasetFigureID: "figure-6",
        },
      },
    ],
    "figure-8": [
      {
        shapeID: "shape-8",
        shapeIndex: 8,
        instanceID: "instance-8",
        slideID: "slide-8",
        figureName: "figure-8",
        latestFigureValue: "Value 8",
        synced: false,
        sourceDataset: {
          datasetID: "dataset-1",
          datasetFigureID: "figure-8",
        },
      },
    ],
    "figure-9": [
      {
        shapeID: "shape-9",
        shapeIndex: 9,
        instanceID: "instance-9",
        slideID: "slide-9",
        figureName: "figure-9",
        latestFigureValue: "Value 9",
        synced: false,
        sourceDataset: {
          datasetID: "dataset-1",
          datasetFigureID: "figure-9",
        },
      },
    ],
    "figure-12": [
      {
        shapeID: "shape-12",
        shapeIndex: 12,
        instanceID: "instance-12",
        slideID: "slide-12",
        figureName: "figure-12",
        latestFigureValue: "Value 12",
        synced: false,
        sourceDataset: {
          datasetID: "dataset-1",
          datasetFigureID: "figure-12",
        },
      },
    ],
  },
  apiChanges: {
    "figure-8": [
      {
        shapeID: "shape-8",
        shapeIndex: 8,
        value: "Value 8 from API",
      },
    ],
  },
  userChanges: {
    "figure-12": [
      {
        shapeID: "shape-12",
        shapeIndex: 12,
        value: "Value 12 from User",
      },
    ],
  },
  onAddShape: (figureID: string) => console.log("Add shape", figureID),
  onResetShapes: (figureID: string, shapeIDs: string[]) => console.log("Reset shapes", figureID, shapeIDs),
  onSyncShapes: (figureID: string, shapeIDs: string[]) => console.log("Sync shapes", figureID, shapeIDs),
  onSettings: (figure: ITableFigure) => console.log("Open settings", figure),
};
