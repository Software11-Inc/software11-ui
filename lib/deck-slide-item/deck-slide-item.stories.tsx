import { ILibrarySlide } from "@models";
import { Meta, StoryFn } from "@storybook/react";
import { DeckSlideItem } from "./deck-slide-item.component";
import { ItemState } from "./deck-slide-item.types";

export default {
  title: "Pages/Library/Slides/Slide",
  component: DeckSlideItem,
  argTypes: {
    onInsert: { action: "inserted" },
    state: {
      options: Object.values(ItemState),
      control: {
        type: "radio",
      },
    },
  },
} as Meta<typeof DeckSlideItem>;

const Template: StoryFn<typeof DeckSlideItem> = (args) => <DeckSlideItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  state: ItemState.DEFAULT,
  errorMessage: {
    error: "error-001",
    message: "Example of error message",
    detail: "Make sure that you enter some descriptive details of error",
  },
  item: {
    id: "1",
    name: "Slide Name",
    previewImageURL: "https://via.placeholder.com/450",
    latestUpdateTime: {
      _seconds: 1632201600,
    },
  } as ILibrarySlide,
};
