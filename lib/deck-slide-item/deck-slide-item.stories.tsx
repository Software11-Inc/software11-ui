import { ILibrarySlide } from "@models";
import { Meta, StoryFn } from "@storybook/react";
import { DeckSlideItem } from "./deck-slide-item.component";

export default {
  title: "Pages/Library/Slides/Slide",
  component: DeckSlideItem,
  argTypes: {
    onInsert: { action: "inserted" },
  },
} as Meta<typeof DeckSlideItem>;

const Template: StoryFn<typeof DeckSlideItem> = (args) => <DeckSlideItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  item: {
    id: "1",
    name: "Slide Name",
    previewImageURL: "https://via.placeholder.com/450",
    latestUpdateTime: {
      _seconds: 1632201600,
    },
  } as ILibrarySlide,
};
