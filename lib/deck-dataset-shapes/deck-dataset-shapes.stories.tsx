import { Meta, StoryFn } from "@storybook/react";
import { DeckDatasetShapes } from "./deck-dataset-shapes.component";

export default {
  title: "Powerpoint/Home/Dataset Shapes",
  argTypes: {
    onSyncDataset: { action: "sync-dataset" },
    onResetFigure: { action: "reset-figure" },
    onSyncFigure: { action: "sync-figure" },
    onOpenDataset: { action: "open-dataset" },
    onSelectShapes: { action: "select-shapes" },
    onSettings: { action: "settings" },
  },
} as Meta<typeof DeckDatasetShapes>;

export const Default: StoryFn<typeof DeckDatasetShapes> = (args) => <DeckDatasetShapes {...args} />;

Default.args = {
  loaded: true,
  name: "Dataset 1",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  hasChanges: false,
  loading: false,
  highlighted: false,
  highlightedShapes: ["1"],
  loadingShapes: ["shape-2", "shape-3", "shape-5"],
  apiChanges: {
    "figure-1": [
      {
        shapeID: "shape-1",
        shapeIndex: 0,
        value: "200",
      },
    ],
    "figure-4": [
      {
        shapeID: "shape-5",
        shapeIndex: 4,
        value: "400",
      },
    ],
  },
  userChanges: {
    "figure-3": [
      {
        shapeID: "shape-4",
        shapeIndex: 3,
        value: "300",
      },
    ],
    "figure-1": [
      {
        shapeID: "shape-1",
        shapeIndex: 0,
        value: "100",
      },
    ],
    "figure-10": [
      {
        shapeID: "shape-1",
        shapeIndex: 0,
        value: "100",
      },
    ],
  },
  shapes: {
    "figure-1": [
      {
        shapeID: "shape-1",
        shapeIndex: 0,
        instanceID: "instance-1",
        containerID: "container-1",
        containerIndex: 0,
        figureName: "Figure 1",
        latestFigureValue: "100",
        synced: true,
        sourceDataset: {
          datasetID: "dataset-1",
          figureID: "figure-1",
        },
      },
      {
        shapeID: "shape-2",
        shapeIndex: 1,
        instanceID: "instance-2",
        containerID: "container-1",
        containerIndex: 1,
        figureName: "Figure 1",
        latestFigureValue: "100",
        synced: true,
        sourceDataset: {
          datasetID: "dataset-1",
          figureID: "figure-1",
        },
      },
    ],
    "figure-2": [
      {
        shapeID: "shape-3",
        shapeIndex: 2,
        instanceID: "instance-3",
        containerID: "container-1",
        containerIndex: 2,
        figureName: "Figure 2",
        latestFigureValue: "200",
        synced: false,
        sourceDataset: {
          datasetID: "dataset-1",
          figureID: "figure-2",
        },
      },
    ],
    "figure-3": [
      {
        shapeID: "shape-4",
        shapeIndex: 3,
        instanceID: "instance-4",
        containerID: "container-1",
        containerIndex: 3,
        figureName: "Figure 3",
        latestFigureValue: "300",
        synced: true,
        sourceDataset: {
          datasetID: "dataset-1",
          figureID: "figure-3",
        },
      },
    ],
    "figure-4": [
      {
        shapeID: "shape-5",
        shapeIndex: 4,
        instanceID: "instance-5",
        containerID: "container-1",
        containerIndex: 4,
        figureName: "Figure 4",
        latestFigureValue: "400",
        synced: true,
        sourceDataset: {
          datasetID: "dataset-1",
          figureID: "figure-4",
        },
      },
    ],
    "figure-5": [
      {
        shapeID: "shape-6",
        shapeIndex: 5,
        instanceID: "instance-6",
        containerID: "container-1",
        containerIndex: 5,
        figureName: "Figure 5",
        latestFigureValue: "500",
        synced: true,
        sourceDataset: {
          datasetID: "dataset-1",
          figureID: "figure-5",
        },
      },
    ],
  },
};
