import { Meta, StoryFn } from "@storybook/react";
import { DeckSelectTags } from "./deck-select-tags.component";

export default {
  title: "UI/Form/Select Tags",
  component: DeckSelectTags,
  argTypes: {
    onChange: { action: "onChange" },
  },
} as Meta<typeof DeckSelectTags>;

const Template: StoryFn<typeof DeckSelectTags> = (args) => <DeckSelectTags {...args} />;

export const Default = Template.bind({});

Default.args = {
  tags: ["tag1", "tag2", "tag3"],
};
