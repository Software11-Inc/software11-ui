import { Meta, StoryFn } from "@storybook/react";
import { DeckRepeaterFormFilter } from "./deck-repeater-form-filter.component";

export default {
  title: "DeckRepeaterFormFilter",
  component: DeckRepeaterFormFilter,
} as Meta<typeof DeckRepeaterFormFilter>;

const Template: StoryFn<typeof DeckRepeaterFormFilter> = (args) => <DeckRepeaterFormFilter {...args} />;

export const Primary = Template.bind({});
