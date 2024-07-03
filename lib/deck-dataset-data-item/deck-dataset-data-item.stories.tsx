import { ITableFigure } from "@models";
import { Meta, StoryFn } from "@storybook/react";
import { datasetTypes, sizes } from "../story-types";
import { DeckDatasetDataItem } from "./deck-dataset-data-item.component";

export default {
  title: "Powerpoint/Dataset Details/Data/Components/Item",
  argTypes: {
    type: {
      options: datasetTypes,
      control: { type: "select" },
      table: {
        disable: true,
      },
    },
    size: {
      options: sizes,
      control: { type: "select" },
    },
    onAdd: {
      action: "add-shape",
    },
    onReset: {
      action: "reset-shapes",
    },
    onSync: {
      action: "sync-shapes",
    },
    onSettings: {
      action: "open-settings",
    },
  },
} as Meta<typeof DeckDatasetDataItem>;

export const ExcelFigure: StoryFn<typeof DeckDatasetDataItem> = (args) => <DeckDatasetDataItem {...args} />;

ExcelFigure.storyName = "Table Figure (default)";

ExcelFigure.args = {
  type: "excel-table",
  hasStatus: true,
  hasActions: true,
  compact: false,
  level: 0,
  size: "sm",
  apiChanges: [],
  userChanges: [],
  shapes: [],
  figure: {
    id: "figure-1",
    name: {
      cell: "A1",
      value: "Name",
    },
    figure: {
      cell: "B1",
      value: "Value",
    },
  } as ITableFigure,
};

export const ExcelFigureInserted: StoryFn<typeof DeckDatasetDataItem> = (args) => <DeckDatasetDataItem {...args} />;

ExcelFigureInserted.storyName = "Table Figure (with shapes)";

ExcelFigureInserted.args = {
  type: "excel-table",
  hasStatus: true,
  hasActions: true,
  compact: false,
  level: 0,
  size: "sm",
  apiChanges: [],
  userChanges: [],
  shapes: [
    {
      shapeID: "shape-1",
      shapeIndex: 0,
      instanceID: "instance-1",
      slideID: "slide-1",
      figureName: "Name",
      latestFigureValue: "Value",
      synced: false,
      sourceDataset: {
        datasetID: "dataset-1",
        datasetFigureID: "figure-1",
      },
    },
    {
      shapeID: "shape-2",
      shapeIndex: 1,
      instanceID: "instance-2",
      slideID: "slide-2",
      figureName: "Name",
      latestFigureValue: "Value",
      synced: false,
      sourceDataset: {
        datasetID: "dataset-1",
        datasetFigureID: "figure-1",
      },
    },
  ],
  figure: {
    id: "figure-1",
    name: {
      cell: "A1",
      value: "Name",
    },
    figure: {
      cell: "B1",
      value: "Value",
    },
  } as ITableFigure,
};

export const ExcelFigureApiChanges: StoryFn<typeof DeckDatasetDataItem> = (args) => <DeckDatasetDataItem {...args} />;

ExcelFigureApiChanges.storyName = "Table Figure (unsynced)";

ExcelFigureApiChanges.args = {
  type: "excel-table",
  hasStatus: true,
  hasActions: true,
  compact: false,
  level: 0,
  size: "sm",
  apiChanges: [
    {
      shapeID: "shape-1",
      shapeIndex: 0,
      value: "New Value",
    },
  ],
  userChanges: [],
  shapes: [
    {
      shapeID: "shape-1",
      shapeIndex: 0,
      instanceID: "instance-1",
      slideID: "slide-1",
      figureName: "Name",
      latestFigureValue: "Value",
      synced: false,
      sourceDataset: {
        datasetID: "dataset-1",
        datasetFigureID: "figure-1",
      },
    },
  ],
  figure: {
    id: "figure-1",
    name: {
      cell: "A1",
      value: "Name",
    },
    figure: {
      cell: "B1",
      value: "Value",
    },
  } as ITableFigure,
};

export const ExcelFigureUserChanges: StoryFn<typeof DeckDatasetDataItem> = (args) => <DeckDatasetDataItem {...args} />;

ExcelFigureUserChanges.storyName = "Table Figure (user changes)";

ExcelFigureUserChanges.args = {
  type: "excel-table",
  hasStatus: true,
  hasActions: true,
  compact: false,
  level: 0,
  size: "sm",
  apiChanges: [],
  userChanges: [
    {
      shapeID: "shape-1",
      shapeIndex: 0,
      value: "New Value",
    },
  ],
  shapes: [
    {
      shapeID: "shape-1",
      shapeIndex: 0,
      instanceID: "instance-1",
      slideID: "slide-1",
      figureName: "Name",
      latestFigureValue: "Value",
      synced: false,
      sourceDataset: {
        datasetID: "dataset-1",
        datasetFigureID: "figure-1",
      },
    },
  ],
  figure: {
    id: "figure-1",
    name: {
      cell: "A1",
      value: "Name",
    },
    figure: {
      cell: "B1",
      value: "Value",
    },
  } as ITableFigure,
};

export const DefaultFigure: StoryFn<typeof DeckDatasetDataItem> = (args) => <DeckDatasetDataItem {...args} />;

DefaultFigure.args = {
  type: "default",
  hasStatus: true,
  hasActions: true,
  compact: false,
  level: 0,
  size: "sm",
  figure: {
    id: "figure-2",
    name: "Name",
    value: "Value",
  },
};
