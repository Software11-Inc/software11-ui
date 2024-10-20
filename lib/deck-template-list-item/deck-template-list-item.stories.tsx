import { Meta, StoryFn } from "@storybook/react";
import { DeckTemplateListItem } from "./deck-template-list-item.component";
import { base64Image } from "../deck-slide-upload-item/image-example";

export default {
  title: "Deck Template List Item",
  component: DeckTemplateListItem,
} as Meta<typeof DeckTemplateListItem>;

const Template: StoryFn<typeof DeckTemplateListItem> = (args) => <DeckTemplateListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  template: {
    name: "My Template",
    description: "This is a template description.",
    previewImage: base64Image,
  },
  onOpen: () => console.log("Open"),
  onEdit: () => console.log("Preview"),
  onRun: () => console.log("Run"),
  onRemove: () => console.log("Remove"),
};
