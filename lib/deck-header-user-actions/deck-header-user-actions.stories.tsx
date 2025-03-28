import { Meta, StoryFn } from "@storybook/react";
import { DeckHeaderUserActions } from "./deck-header-user-actions.component";

export default {
  title: "Layout/Header/Components/User Actions",
  component: DeckHeaderUserActions,
  argTypes: {
    onNotifications: { action: "onNotifications" },
    onLogout: { action: "onLogout" },
  },
} as Meta<typeof DeckHeaderUserActions>;

const Template: StoryFn<typeof DeckHeaderUserActions> = (args) => <DeckHeaderUserActions {...args} />;

export const Default = Template.bind({});
