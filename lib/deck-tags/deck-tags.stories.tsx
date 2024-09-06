import { Meta, StoryFn } from "@storybook/react";
import { DeckTags } from "./deck-tags.component";

export default {
  componet: DeckTags,
  title: "UI/Tags",
} as Meta<typeof DeckTags>;

const Template: StoryFn<typeof DeckTags> = (args) => <DeckTags {...args} />;

export const Default = Template.bind({});

Default.args = {
  limit: 5,
  tags: [
    "Annual Report",
    "Quarterly Review",
    "Investment Strategy",
    "Market Analysis",
    "Portfolio Update",
    "Risk Assessment",
    "Growth Plan",
    "Operational Efficiency",
    "Stakeholder Briefing",
    "Financial Forecast",
  ],
};
