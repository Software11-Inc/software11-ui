import { Meta, StoryFn } from "@storybook/react";
import { DeckFileList } from "./deck-file-list.component";

export default {
  title: "UI/File List",
  component: DeckFileList,
} as Meta<typeof DeckFileList>;

const Template: StoryFn<typeof DeckFileList> = (args) => <DeckFileList {...args} />;
export const Default = Template.bind({});

Default.args = {
  types: ["excel", "powerpoint", "google sheet", "google slide"],
};
