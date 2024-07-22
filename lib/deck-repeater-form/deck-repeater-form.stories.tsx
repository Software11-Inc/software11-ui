import { Meta, StoryFn } from "@storybook/react";
import { DeckRepeaterForm } from "./deck-repeater-form.component";

export default {
  title: "DeckRepeaterForm",
  component: DeckRepeaterForm,
} as Meta<typeof DeckRepeaterForm>;

const Template: StoryFn<typeof DeckRepeaterForm> = (args) => <DeckRepeaterForm {...args} />;

export const Primary = Template.bind({});
