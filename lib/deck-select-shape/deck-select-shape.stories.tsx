import { Meta, StoryFn } from "@storybook/react";
import { DeckSelectShape } from "./deck-select-shape.component";

export default {
  title: "UI/Select Shapes",
  component: DeckSelectShape,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta<typeof DeckSelectShape>;

const Template: StoryFn<typeof DeckSelectShape> = (args) => <DeckSelectShape {...args} />;

export const Default = Template.bind({});

Default.args = {
  loading: false,
  checked: false,
  datasetName: "Dataset Name",
  shape: {
    value: "Shape Name",
    slideID: "1",
    shapeIndex: 1,
  },
  figure: {
    id: "1",
    name: {
      cell: "D1",
      value: "Figure Name",
    },
    figure: {
      cell: "D7",
      value: "TypeScript-based framework for building web.",
    },
  },
};
