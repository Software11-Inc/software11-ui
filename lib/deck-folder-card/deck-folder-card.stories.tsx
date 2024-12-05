import { Meta, StoryFn } from "@storybook/react";
import { sizes } from "../story-types";
import { DeckFolderCard } from "./deck-folder-card.component";

export default {
  title: "Pages/Library/Gallery/Folder Card",
  component: DeckFolderCard,
  argTypes: {
    onClick: { action: "click" },
    size: {
      control: {
        type: "select",
      },
      options: sizes,
    },
  },
} as Meta<typeof DeckFolderCard>;

const Template: StoryFn<typeof DeckFolderCard> = (args) => <DeckFolderCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: "sm",
  item: {
    name: "Folder Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit sollicitudin massa ut tincidunt. Aenean volutpat iaculis odio id semper. Praesent hendrerit neque interdum, commodo metus a, vulputate metus. Ut elit dolor, malesuada at euismod et, dapibus id tortor. Sed tincidunt porta magna, ac auctor enim luctus non. Quisque rhoncus urna a sem tristique elementum. Integer libero dui, hendrerit ac dui a, feugiat bibendum purus.",
    albumID: "albumID",
    tags: ["Quarterly Review", "Investment Strategy"],
    library: "library",
    generationUser: {
      firstName: "John",
      lastName: "Doe",
      email: "example.user@deckcraft.com",
      profilePhoto: "https://picsum.photos/50",
      username: "user",
      role: "user",
    },
    lastUpdated: {
      _seconds: 1725618910,
      _nanoseconds: 215000000,
    },
    images: [],
    itemsCount: 10,
  },
};
