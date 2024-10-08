import { Dataset } from "@models";
import { Meta, StoryFn } from "@storybook/react";
import { DeckDatasetItem } from "./deck-dataset-item.component";

export default {
  title: "Pages/Library/Data/Dataset",
  component: DeckDatasetItem,
  argTypes: {
    onClick: { action: "clicked" },
    onMouseEnter: { action: "mouse entered" },
  },
} as Meta<typeof DeckDatasetItem>;

const Template: StoryFn<typeof DeckDatasetItem> = (args) => <DeckDatasetItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  loaded: true,
  loading: false,
  item: {
    id: "1",
    name: "Dataset Name",
    type: "default",
    lastUpdated: {
      _seconds: 1725982055,
      _nanoseconds: 444000000,
    },
  } as Dataset,
};
