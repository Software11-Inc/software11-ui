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
    status: "warning",
    message: "Example of error message",
    detail: "Make sure that you enter some descriptive details of error",
  },
  title: {
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit",
    link: true,
    onClick: () => {
      alert("Link clicked");
    },
  },
  description: {
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  previewImage: "https://placehold.co/400",

  onImageClick: () => {
    alert("Image clicked");
  },

  buttonText: "Click to insert",

  onOpen: () => {
    alert("Details opened");
  },

  onUpgrade: () => {
    alert("Slide upgraded");
  },
};
