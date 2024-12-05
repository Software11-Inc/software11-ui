import { Meta, StoryFn } from "@storybook/react";
import { DeckDatasetWidget } from "./deck-dataset-widget.component";
import { FigureUserChangeMap } from "../models/dataset-changes.model";

export default {
  title: "Pages/Home/DeckDatasetWidget",
  component: DeckDatasetWidget,
  argTypes: {
    name: {
      control: {
        type: "text",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
    onSelectCell: { action: "onSelectCell" },
    onOpen: { action: "onOpen" },
    changes: {
      control: {
        type: "object",
      },
    },
    highlighted: {
      control: {
        type: "boolean",
      },
    },
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

const mockChanges: FigureUserChangeMap = {
  figure1: {
    id: "figure1",
    old: {
      id: "figure1",
      name: {
        cell: "A1",
        value: "Old Name 1",
      },
      figure: {
        cell: "B1",
        value: "100",
      },
      groupName: "Group 1",
      isGroupName: true,
      subgroupName: "Subgroup A",
      isSubgroupName: false,
    },
    new: {
      id: "figure1",
      name: {
        cell: "A1",
        value: "New Name 1",
      },
      figure: {
        cell: "B1",
        value: "150",
      },
      groupName: "Group 1",
      isGroupName: true,
      subgroupName: "Subgroup A",
      isSubgroupName: false,
    },
  },
  figure2: {
    id: "figure2",
    old: {
      id: "figure2",
      name: {
        cell: "A2",
        value: "Old Name 2",
      },
      figure: {
        cell: "B2",
        value: "200",
      },
      groupName: "Group 2",
      isGroupName: false,
      subgroupName: "Subgroup B",
      isSubgroupName: true,
    },
    new: {
      id: "figure2",
      name: {
        cell: "A2",
        value: "Old Name 2",
      },
      figure: {
        cell: "B2",
        value: "250",
      },
      groupName: "Group 2",
      isGroupName: false,
      subgroupName: "Subgroup B",
      isSubgroupName: true,
    },
  },
  figure3: {
    id: "figure3",
    old: {
      id: "figure3",
      name: {
        cell: "A3",
        value: "Old Name 3",
      },
      figure: {
        cell: "B3",
        value: "300",
      },
      groupName: "Group 3",
      isGroupName: false,
    },
    new: {
      id: "figure3",
      name: {
        cell: "A3",
        value: "New Name 3",
      },
      figure: {
        cell: "B3",
        value: "300",
      },
      groupName: "Group 3",
      isGroupName: false,
    },
  },
};

Changed.args = {
  changes: mockChanges,
};
