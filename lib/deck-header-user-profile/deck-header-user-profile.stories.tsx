import { Meta, StoryFn } from "@storybook/react";
import { DeckHeaderUserProfile } from "./deck-header-user-profile.component";

export default {
  title: "Layout/Header/Components/User Profile",
  component: DeckHeaderUserProfile,
} as Meta<typeof DeckHeaderUserProfile>;

const Template: StoryFn<typeof DeckHeaderUserProfile> = (args) => (
  <DeckHeaderUserProfile {...args} />
);

export const Default = Template.bind({});

Default.args = {
  fullName: "John Doe",
  role: "Admin".toUpperCase(),
  email: "john.doe@gmail.com",
  avatarUrl: undefined,
  isRight: false,
};
