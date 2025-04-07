import { Meta, StoryFn } from "@storybook/react";
import { DeckTemplatePreview } from "./deck-template-preview.component";

export default {
  title: "Pages/Template/Components/Deck Template Preview",
  component: DeckTemplatePreview,
} as Meta<typeof DeckTemplatePreview>;

const Template: StoryFn<typeof DeckTemplatePreview> = (args) => <DeckTemplatePreview {...args} />;

export const Default = Template.bind({});

Default.args = {
  item: {
    name: "Template Name",
    description: "Template Description",
  },
};
