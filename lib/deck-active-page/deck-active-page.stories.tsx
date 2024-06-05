import { Meta, StoryFn } from "@storybook/react";
import { DeckActivePage } from "./deck-active-page.component";

export default {
  title: "Pages/Home/Components/Active Page",
  component: DeckActivePage,
  parameters: {
    controls: { expanded: false },
  },
  argTypes: {
    pages: {
      description: "List of pages",
      control: {
        type: "object",
      },
    },
    activePage: {
      description: "Active page",
      control: {
        type: "object",
      },
    },
    prefix: {
      description: "Prefix for the page",
      control: {
        type: "text",
      },
    },
    onChangePage: { action: "changePage" },
  },
} as Meta<typeof DeckActivePage>;

export const Sheet: StoryFn<typeof DeckActivePage> = (args) => (
  <DeckActivePage {...args} />
);

Sheet.args = {
  pages: [
    {
      id: "1",
      index: 0,
      name: "Lorem ipsum",
    },
    {
      id: "2",
      index: 1,
      name: "dolor sit amet",
    },
    {
      id: "3",
      index: 2,
      name: "consectetur adipiscing",
    },
  ],
  activePage: {
    id: "1",
    index: 0,
    name: "Lorem ipsum",
  },
};

export const Slide: StoryFn<typeof DeckActivePage> = (args) => (
  <DeckActivePage {...args} />
);

Slide.args = {
  pages: [
    {
      id: "1",
      index: 0,
    },
    {
      id: "2",
      index: 1,
    },
    {
      id: "3",
      index: 2,
    },
  ],
  activePage: {
    id: "1",
    index: 0,
  },
  prefix: "Slide",
};
