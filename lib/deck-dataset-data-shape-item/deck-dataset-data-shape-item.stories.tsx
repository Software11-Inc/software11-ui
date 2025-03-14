import { IDynamicShape } from "@models";
import { Meta, StoryFn } from "@storybook/react";
import { DeckDatasetDataShapeItem } from "./deck-dataset-data-shape-item.component";

export default {
  title: "DeckDatasetDataShapeItem",
  component: DeckDatasetDataShapeItem,
  argTypes: {
    onDelete: { action: "onDelete" },
    onReset: { action: "onReset" },
    onSync: { action: "onSync" },
    onCopy: { action: "onCopy" },
    onMouseEnter: { action: "onMouseEnter" },
  },
} as Meta<typeof DeckDatasetDataShapeItem>;

const Template: StoryFn<typeof DeckDatasetDataShapeItem> = (props) => {
  return <DeckDatasetDataShapeItem {...props} />;
};

export const Default = Template.bind({});

Default.args = {
  figureName: "Figure Name",
  shape: {
    latestFigureValue: "Latest Figure Value",
  } as IDynamicShape,
  isSelected: false,
  apiChange: {
    shapeID: "Shape ID",
    shapeIndex: 0,
    value: "API Change Value",
  },
  userChange: {
    shapeID: "Shape ID",
    shapeIndex: 0,
    value: "User Change Value",
  },
  onUnlink: () => {},
  syncTooltip: {
    title: {
      text: "Sync",
    },
    description: {
      text: "Sync the shape with the dataset's figure.",
      limit: 5,
    },
  },
  resetTooltip: {
    title: {
      text: "Reset shape",
    },
    description: {
      text: "You made changes to this shape. Reset it to the dataset's figure.",
      limit: 5,
    },
  },
  unlinkTooltip: {
    title: {
      text: "Remove connection",
    },
    description: {
      text: "Remove the connection between this shape and the dataset's figure. It keeps the shape on the slide but removes from the cloud.",
      limit: 5,
    },
  },
  deleteTooltip: {
    title: {
      text: "Delete",
    },
    description: {
      text: "Delete this shape from the slide and the cloud.",
      limit: 5,
    },
  },
};

export const Empty = Template.bind({});

Empty.args = {
  figureName: "Figure Name",
  shape: undefined,
  isSelected: false,
  emptyValue: "Empty Value",
  onUnlink: () => {},
};
