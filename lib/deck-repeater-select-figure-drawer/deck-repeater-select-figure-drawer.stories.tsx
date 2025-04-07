import { Meta, StoryFn } from "@storybook/react";
import { DeckRepeaterSelectFigureDrawer } from "./deck-repeater-select-figure-drawer.component";

export default {
  title: "Pages/Template/Components/DeckRepeaterSelectFigureDrawer",
  component: DeckRepeaterSelectFigureDrawer,
  argTypes: {
    figures: {
      description: "The figures to display in the drawer.",
      control: {
        type: "object",
      },
    },
    open: {
      description: "Whether the drawer is open or not.",
      control: {
        type: "boolean",
      },
    },
    onClose: {
      description: "The function to call when the drawer is closed.",
      action: "closed",
    },
    onSelect: {
      description: "The function to call when a figure is selected.",
      action: "selected",
    },
  },
} as Meta<typeof DeckRepeaterSelectFigureDrawer>;

const Template: StoryFn<typeof DeckRepeaterSelectFigureDrawer> = (args) => <DeckRepeaterSelectFigureDrawer {...args} />;

export const Default = Template.bind({});

Default.args = {
  selected: "1",
  figures: [
    {
      id: "1",
      name: {
        value: "Name 1",
        cell: "A1",
      },
      figure: {
        value: "Figure 1",
        cell: "B1",
      },
    },
    {
      id: "2",
      name: {
        value: "Name 2",
        cell: "A2",
      },
      figure: {
        value: "Figure 2",
        cell: "B2",
      },
    },
    {
      id: "3",
      name: {
        value: "Name 3",
        cell: "A3",
      },
      figure: {
        value: "Figure 3",
        cell: "B3",
      },
    },
    {
      id: "4",
      name: {
        value: "Name 4",
        cell: "A4",
      },
      figure: {
        value: "Figure 4",
        cell: "B4",
      },
    },
    {
      id: "5",
      name: {
        value: "Name 5",
        cell: "A5",
      },
      figure: {
        value: "Figure 5",
        cell: "B5",
      },
    },
    {
      id: "6",
      name: {
        value: "Name 6",
        cell: "A6",
      },
      figure: {
        value: "Figure 6",
        cell: "B6",
      },
    },
    {
      id: "7",
      name: {
        value: "Name 7",
        cell: "A7",
      },
      figure: {
        value: "Figure 7",
        cell: "B7",
      },
    },
    {
      id: "8",
      name: {
        value: "Name 8",
        cell: "A8",
      },
      figure: {
        value: "Figure 8",
        cell: "B8",
      },
    },
    {
      id: "9",
      name: {
        value: "Name 9",
        cell: "A9",
      },
      figure: {
        value: "Figure 9",
        cell: "B9",
      },
    },
    {
      id: "10",
      name: {
        value: "Name 10",
        cell: "A10",
      },
      figure: {
        value: "Figure 10",
        cell: "B10",
      },
    },
  ],
  open: true,
  onClose: () => console.log("closed"),
  onSelect: (value) => console.log("selected", value),
};
