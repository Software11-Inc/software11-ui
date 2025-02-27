import { Meta, StoryFn } from "@storybook/react";
import { DeckHeaderSearch } from "./deck-header-search.component";

export default {
  title: "Layout/Header/Components/Search",
  component: DeckHeaderSearch,
  parameters: {
    controls: { expanded: false },
  },
  argTypes: {
    searchValue: {
      description: "Search value",
      control: {
        type: "text",
      },
    },
    searchPlaceholder: {
      description: "Search placeholder",
      control: {
        type: "text",
      },
    },
    onSearchChange: { action: "search" },
  },
} as Meta<typeof DeckHeaderSearch>;

const Template: StoryFn<typeof DeckHeaderSearch> = (args) => <DeckHeaderSearch {...args} />;

export const Default = Template.bind({});

Default.args = {
  searchValue: "",
  searchPlaceholder: "Enter a search term",
  onSearchChange: (value: string) => {
    console.log(value);
  },
};
