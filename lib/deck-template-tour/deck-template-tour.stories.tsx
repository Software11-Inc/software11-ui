import { Meta, StoryFn } from "@storybook/react";
import { DeckTemplateTour } from "./deck-template-tour.component";

export default {
  title: "Pages/Template/Components/DeckTemplateTour",
  component: DeckTemplateTour,
} as Meta<typeof DeckTemplateTour>;

const Template: StoryFn<typeof DeckTemplateTour> = (args) => <DeckTemplateTour {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: true,
  onClose: () => {},
};
