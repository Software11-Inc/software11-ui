import { Meta, StoryFn } from "@storybook/react";
import { DeckDatasetWidget } from "./deck-dataset-widget.component";

export default {
  title: "Pages/Home/DeckDatasetWidget",
  component: DeckDatasetWidget,
  argTypes: {
    onSelectCell: { action: "onSelectCell" },
  },
} as Meta<typeof DeckDatasetWidget>;

const Template: StoryFn<typeof DeckDatasetWidget> = (args) => <DeckDatasetWidget {...args} />;

export const Default = Template.bind({});

Default.args = {
  changes: {
    "figure-1": {
      id: "figure-1",
      cell: "A1",
      initialValue: "100",
      initialName: "Figure 1",
      finalValue: "200",
      finalName: "Figure 1",
    },
    "figure-2": {
      id: "figure-2",
      cell: "B123",
      initialValue: "200",
      initialName: "Figure 2",
      finalValue: "300",
      finalName: "Figure 2",
    },
  },
};
