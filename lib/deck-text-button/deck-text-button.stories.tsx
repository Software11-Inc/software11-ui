import { Meta, StoryFn } from "@storybook/react";
import { DeckTextButton } from "./deck-text-button.component";
import { colors, variants } from "../story-types";
import ShortcutRounded from "@mui/icons-material/ShortcutRounded";

export default {
  title: "UI/Buttons/Text Button",
  component: DeckTextButton,
  argTypes: {
    text: {
      control: "text",
      description: "Text to be displayed on the button",
    },
    icon: {
      description: "Icon to be displayed on the button",
    },
    action: {
      description: "Function to be called when the button is clicked",
    },
    disabled: {
      control: "boolean",
      description: "Disable the button",
    },
    color: {
      control: "select",
      options: colors,
      description: "Color of the button",
    },
    variant: {
      control: "select",
      options: variants,
      description: "Variant of the button",
    },
  },
} as Meta<typeof DeckTextButton>;

const Template: StoryFn<typeof DeckTextButton> = (args) => <DeckTextButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "Text Button",
  action: () => console.log("Text Button"),
};

export const MenuButton = Template.bind({});

MenuButton.args = {
  text: "Menu Button",
  endIcon: (
    <ShortcutRounded
      sx={{
        transform: "rotate(180deg)",
        fontSize: "14px !important",
      }}
    />
  ),
  action: () => console.log("Menu Button"),
  fullWidth: true,
  textAlign: "flex-start",
  uppercase: false,
};
