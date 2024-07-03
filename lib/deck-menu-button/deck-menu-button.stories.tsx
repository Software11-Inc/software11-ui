import CloudCircleRounded from "@mui/icons-material/CloudCircleRounded";
import { Meta, StoryFn } from "@storybook/react";
import { colors, variants } from "../story-types";
import { DeckMenuButton } from "./deck-menu-button.component";

export default {
  title: "UI/Buttons/Menu Button",
  component: DeckMenuButton,
  argTypes: {
    action: { action: "clicked" },
    color: {
      control: {
        type: "select",
      },
      options: colors,
    },
    variant: {
      control: {
        type: "select",
      },
      options: variants,
    },
  },
} as Meta<typeof DeckMenuButton>;

export const Default: StoryFn<typeof DeckMenuButton> = (args) => <DeckMenuButton key="test" {...args} />;

Default.args = {
  buttonKey: "test-button",
  color: "primary",
  variant: "solid",
  header: "Lorem ipsum dolor sit amet",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices id mi eu euismod.",
  iconStart: <CloudCircleRounded />,
};
