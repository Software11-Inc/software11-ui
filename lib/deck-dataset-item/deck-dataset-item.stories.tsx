import { Meta, StoryFn } from "@storybook/react";
import { DeckDatasetItem } from "./deck-dataset-item.component";
import { Dataset } from "@models";

export default {
  title: "Pages/Library/Data/Dataset List Item",
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
  item: {
    id: "1",
    name: "Dataset Name",
    type: "default",
    lastUpdated: {
      _seconds: 1632201600,
    },
  } as Dataset,
};
