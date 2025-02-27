import { Meta, StoryFn } from "@storybook/react";
import { sizes } from "../story-types";
import { DeckLabel } from "./deck-label.component";

export default {
  title: "UI/Label",
  component: DeckLabel,
  parameters: {
    controls: {
      expanded: false,
    },
  },
  argTypes: {
    size: {
      description: "Size of the button",
      control: {
        type: "radio",
      },
      options: ["xs", ...sizes],
    },
    color: {
      description: "Color of the button",
      control: {
        type: "select",
      },
      options: ["primary", "neutral", "warning", "success", "danger"],
    },
  },
} as Meta<typeof DeckLabel>;

const Template: StoryFn<typeof DeckLabel> = (args) => <DeckLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  required: true,
  title: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac lobortis dui.",
    limit: 1,
    link: true,
    lineHeight: "1.5",
  },
  description: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac lobortis dui. Duis a suscipit leo, vel imperdiet mi. Nulla facilisi. Sed tempor mi id sem ornare elementum. Praesent tempus turpis at consectetur lobortis.",
    limit: 2,
  },
  color: "primary",
  size: "md",
  italic: false,
};
