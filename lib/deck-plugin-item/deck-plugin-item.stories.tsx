import { Meta, StoryFn } from "@storybook/react";
import { DeckPluginItem } from "./deck-plugin-item.component";

export default {
  title: "Pages/Plugins/Plugin List Item",
  component: DeckPluginItem,
} as Meta<typeof DeckPluginItem>;

const Template: StoryFn<typeof DeckPluginItem> = (args) => <DeckPluginItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  plugin: {
    id: "1",
    name: "Plugin Name",
    description: "Plugin Description",
    logoSrc: "https://placehold.co/400",
    isRecommended: true,
  },
  active: true,
  onToggle: () => console.log("onToggle"),
  onOpen: () => console.log("onOpen"),
};
