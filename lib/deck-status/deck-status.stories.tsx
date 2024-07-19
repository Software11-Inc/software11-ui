import { Meta, StoryFn } from "@storybook/react";
import { DeckStatus } from "./deck-status.component";

export default {
  title: "UI/Status",
  component: DeckStatus,
} as Meta<typeof DeckStatus>;

export const Default: StoryFn<typeof DeckStatus> = (args) => <DeckStatus {...args} />;

Default.args = {
  status: 1,
  loading: false,
};
