import { Meta, StoryFn } from "@storybook/react";
import { DeckSelectTags } from "./deck-select-tags.component";
import { colors, sizes, variants } from "../story-types";

export default {
  title: "UI/Form/Select Tags",
  component: DeckSelectTags,
  argTypes: {
    title: {
      control: {
        type: "text",
      },
      description: "Title of the tags",
      table: {
        category: "Props",
        defaultValue: {
          summary: "Tags",
        },
      },
    },
    description: {
      control: {
        type: "text",
      },
      description: "Description of the tags",
      table: {
        category: "Props",
        defaultValue: {
          summary:
            "Tag with descriptive words so you can index and search them later, ie. revenue, cogs, costs, people, etc.",
        },
      },
    },
    tags: {
      control: {
        type: "object",
      },
      description: "Array of tags",
      table: {
        category: "Props",
        defaultValue: {
          summary: "[]",
        },
      },
    },
    size: {
      control: {
        type: "select",
      },
      options: sizes,
      description: "Size of the tags",
      table: {
        category: "Props",
        defaultValue: {
          summary: "sm",
        },
      },
    },
    variant: {
      control: {
        type: "select",
      },
      options: variants,
      description: "Variant of the tags",
      table: {
        category: "Props",
        defaultValue: {
          summary: "soft",
        },
      },
    },
    color: {
      control: {
        type: "select",
      },
      options: colors,
      description: "Color of the tags",
      table: {
        category: "Props",
        defaultValue: {
          summary: "primary",
        },
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
      description: "Disable the tags",
      table: {
        category: "Props",
        defaultValue: {
          summary: "false",
        },
      },
    },
    onChange: {
      action: "onChange",
      table: {
        category: "Events",
      },
    },
  },
} as Meta<typeof DeckSelectTags>;

const Template: StoryFn<typeof DeckSelectTags> = (args) => <DeckSelectTags {...args} />;

export const Default = Template.bind({});

Default.args = {
  tags: ["tag1", "tag2", "tag3"],
};
