import { Meta, StoryFn } from "@storybook/react";
import { DeckRepeaterFormSort } from "./deck-repeater-form-sort.component";

export default {
  title: "DeckRepeaterFormSort",
  component: DeckRepeaterFormSort,
} as Meta<typeof DeckRepeaterFormSort>;

const Template: StoryFn<typeof DeckRepeaterFormSort> = (args) => <DeckRepeaterFormSort {...args} />;

export const Primary = Template.bind({});
