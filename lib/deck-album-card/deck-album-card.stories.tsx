import { Meta, StoryFn } from "@storybook/react";
import { DeckAlbumCard } from "./deck-album-card.component";

export default {
  title: "Pages/Library/Gallery/Album Card",
  component: DeckAlbumCard,
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
    onClick: { action: "onClick" },
    onOpen: { action: "onOpen" },
  },
} as Meta<typeof DeckAlbumCard>;

const Template: StoryFn<typeof DeckAlbumCard> = (args) => <DeckAlbumCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: "sm",
  item: {
    id: "a2ZDWkWsYnTFS6IgE6Yn",
    name: "Album Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit sollicitudin massa ut tincidunt. Aenean volutpat iaculis odio id semper. Praesent hendrerit neque interdum, commodo metus a, vulputate metus. Ut elit dolor, malesuada at euismod et, dapibus id tortor. Sed tincidunt porta magna, ac auctor enim luctus non. Quisque rhoncus urna a sem tristique elementum. Integer libero dui, hendrerit ac dui a, feugiat bibendum purus.",
    tags: ["Risk Assessment", "Growth Plan", "Operational Efficiency", "Stakeholder Briefing"],
    itemsCount: Math.round(Math.random() * 1000),
    folders: [],
    createdAt: {
      _seconds: 1725618910,
      _nanoseconds: 215000000,
    },
    lastUpdated: {
      _seconds: 1725618910,
      _nanoseconds: 215000000,
    },
    generationUser: {
      firstName: "John",
      lastName: "Doe",
      email: "example.user@deckcraft.com",
      profilePhoto: "https://picsum.photos/50",
      username: "user",
      role: "user",
    },
  },
};
