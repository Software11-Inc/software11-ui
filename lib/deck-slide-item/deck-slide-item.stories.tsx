import { Meta, StoryFn } from "@storybook/react";
import { DeckSlideItem } from "./deck-slide-item.component";
import { ItemState } from "./deck-slide-item.types";
import AirplayRounded from "@mui/icons-material/AirplayRounded";
import MoveUpRounded from "@mui/icons-material/MoveUpRounded";

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

  menuItems: [
    {
      icon: (
        <AirplayRounded
          sx={{
            color: "var(--joy-palette-primary-500)",
          }}
        />
      ),
      title: {
        text: "Open details",
      },
      description: {
        text: "Open the slide details",
      },
      onClick: () => {
        alert("Slide inserted");
      },
    },
    {
      icon: (
        <MoveUpRounded
          sx={{
            color: "var(--joy-palette-primary-500)",
          }}
        />
      ),
      title: {
        text: "Upload new version",
      },
      description: {
        text: "Upload a new version of the slide",
      },
      onClick: () => {
        alert("Slide upgraded");
      },
    },
  ],
};
