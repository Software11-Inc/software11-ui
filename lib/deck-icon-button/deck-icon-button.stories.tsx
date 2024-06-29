import SyncRounded from "@mui/icons-material/SyncRounded";
import { Meta, StoryFn } from "@storybook/react";
import { colors, sizes, variants } from "../story-types";
import { DeckIconButton } from "./deck-icon-button.component";

export default {
  title: "UI/Buttons/Icon button",
  component: DeckIconButton,
  parameters: {
    controls: { expanded: false },
  },
  argTypes: {
    size: {
      description: "Size of the button",
      control: { type: "radio" },
      options: sizes,
    },
    variant: {
      description: "Variant of the button",
      control: { type: "inline-radio" },
      options: variants,
    },
    color: {
      description: "Color of the button",
      control: { type: "select" },
      options: colors,
    },
    onClick: {
      description: "Click event handler",
      action: "clicked",
    },
    icon: {
      description: "Icon of the button",
      control: { type: "object" },
    },
  },
} as Meta<typeof DeckIconButton>;

const Template: StoryFn<typeof DeckIconButton> = (args) => <DeckIconButton {...args} />;

export const SyncButton = Template.bind({});

SyncButton.args = {
  size: "lg",
  variant: "soft",
  color: "primary",
  rounded: true,
  icon: <SyncRounded />,
};
