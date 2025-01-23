import { Meta, StoryFn } from "@storybook/react";
import { DeckImageCardProps } from "./deck-image-card.types";
import { DeckImageCard } from "./deck-image-card.component";

export default {
  title: "Pages/Library/Gallery/Image Card",
  component: DeckImageCard,
} as Meta<DeckImageCardProps>;

const Template: StoryFn<DeckImageCardProps> = (args) => <DeckImageCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  imageSrc: "https://placehold.co/400",
  title: {
    text: "Card Title",
  },
  description: {
    text: "Card Description",
  },
  onImageClick: () => {
    console.log("Image Clicked");
  },
};
