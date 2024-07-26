import { Meta, StoryFn } from "@storybook/react";
import { DeckSlideUploadItem } from "./deck-slide-upload-item.component";
import { IDeckSlideUploadItem } from "./deck-slide-upload-item.types";
import { base64Image } from "./image-example";

export default {
  title: "lib/deck-slide-upload-item",
  component: DeckSlideUploadItem,
  argTypes: {
    onSave: { action: "onSave" },
    onIgnore: { action: "onIgnore" },
    onContinue: { action: "onContinue" },
    onEdit: { action: "onEdit" },
  },
} as Meta<typeof DeckSlideUploadItem>;

const Template: StoryFn<IDeckSlideUploadItem> = (args) => <DeckSlideUploadItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  slideName: "Slide 1",
  item: {
    name: "Slide 1",
    tags: ["tag1", "tag2"],
  },
  loaded: true,
  loading: false,
  disabled: false,
  ignore: false,
  saved: false,
  base64Image: base64Image,
};
