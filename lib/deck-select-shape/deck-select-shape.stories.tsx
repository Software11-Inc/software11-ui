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
  checked: false,
  shape: {
    value: "Shape Name",
    slideID: "1",
    shapeIndex: 1,
  },
};
