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
  name: "Dataset 1",
  description: "Dataset description",
  changes: {},
};

export const Changed = Template.bind({});

Changed.args = {
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
    "figure-3": {
      id: "figure-3",
      cell: "C1",
      initialValue: "300",
      initialName: "Figure 3",
      finalValue: "400",
      finalName: "Figure 3",
    },
    "figure-4": {
      id: "figure-4",
      cell: "D1",
      initialValue: "400",
      initialName: "Figure 4",
      finalValue: "500",
      finalName: "Figure 4",
    },
    "figure-5": {
      id: "figure-5",
      cell: "E1",
      initialValue: "500",
      initialName: "Figure 5",
      finalValue: "600",
      finalName: "Figure 5",
    },
    "figure-6": {
      id: "figure-6",
      cell: "F1",
      initialValue: "600",
      initialName: "Figure 6",
      finalValue: "700",
      finalName: "Figure 6",
    },
    "figure-7": {
      id: "figure-7",
      cell: "G1",
      initialValue: "700",
      initialName: "Figure 7",
      finalValue: "800",
      finalName: "Figure 7",
    },
    "figure-8": {
      id: "figure-8",
      cell: "H1",
      initialValue: "800",
      initialName: "Figure 8",
      finalValue: "900",
      finalName: "Figure 8",
    },
    "figure-9": {
      id: "figure-9",
      cell: "I1",
      initialValue: "900",
      initialName: "Figure 9",
      finalValue: "1000",
      finalName: "Figure 9",
    },
    "figure-10": {
      id: "figure-10",
      cell: "J1",
      initialValue: "1000",
      initialName: "Figure 10",
      finalValue: "1100",
      finalName: "Figure 10",
    },
    "figure-11": {
      id: "figure-11",
      cell: "K1",
      initialValue: "1100",
      initialName: "Figure 11",
      finalValue: "1200",
      finalName: "Figure 11",
    },
  },
};
