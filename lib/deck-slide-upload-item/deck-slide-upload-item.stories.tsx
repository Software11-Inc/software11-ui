import { Meta, StoryFn } from "@storybook/react";
import { DeckSlideUploadItem } from "./deck-slide-upload-item.component";
import { IDeckSlideUploadItem, UploadGeneralState, UploadLoadingState } from "./deck-slide-upload-item.types";
import { base64Image } from "./image-example";

export default {
  title: "Pages/Library/Slides/Upload Slide",
  component: DeckSlideUploadItem,
  argTypes: {
    onSave: { action: "onSave" },
    onIgnore: { action: "onIgnore" },
    onContinue: { action: "onContinue" },
    onEdit: { action: "onEdit" },
    onCancel: { action: "onCancel" },
    onReset: { action: "onReset" },
    onRetry: { action: "onRetry" },
    generalState: {
      options: Object.values(UploadGeneralState),
      control: {
        type: "radio",
      },
    },
    loadingState: {
      options: Object.values(UploadLoadingState),
      control: {
        type: "radio",
      },
    },
  },
} as Meta<typeof DeckSlideUploadItem>;

const Template: StoryFn<IDeckSlideUploadItem> = (args) => <DeckSlideUploadItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  progress: 50,
  loaded: true,
  disabled: false,
  generalState: UploadGeneralState.NONE,
  loadingState: UploadLoadingState.NONE,
  errorMessage: {
    status: "warning",
    message: "Example of error message",
    detail: "Make sure that you enter some descriptive details of error",
  },
  slideName: "Slide 1",
  item: {
    name: "Slide 1",
    tags: ["tag1", "tag2"],
  },
  base64Image: base64Image,
};
