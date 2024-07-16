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
  hasApiChanges: false,
  hasUserChanges: false,
};
