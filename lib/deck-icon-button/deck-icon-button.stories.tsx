import SyncRounded from "@mui/icons-material/SyncRounded";
import Box from "@mui/joy/Box";
import { Meta, StoryFn } from "@storybook/react";
import { DeckIconButton } from "./deck-icon-button.component";

export default {
  title: "UI/Buttons/Icon button",
  component: DeckIconButton,
  parameters: {
    controls: { expanded: true },
  },
  args: {
    size: "sm",
    variant: "plain",
    color: "primary",
    disabled: false,
    hidden: false,
    rounded: false,
    icon: <SyncRounded />,
  },
  argTypes: {
    size: {
      description: "Size of the button",
      control: {
        type: "radio",
      },
      options: ["sm", "md", "lg"],
    },
    variant: {
      description: "Variant of the button",
      type: "string",
      control: {
        type: "inline-radio",
      },

      options: ["plain", "soft", "outlined", "solid"],
    },
    color: {
      description: "Color of the button",
      control: {
        type: "select",
      },
      options: ["primary", "neutral", "warning", "success", "danger"],
    },
    onClick: {
      description: "Click event handler",
      action: "clicked",
    },
  },
} as Meta<typeof DeckIconButton>;

const Template: StoryFn<typeof DeckIconButton> = (args) => (
  <Box
    sx={{
      p: 1,
      width: "3rem",
      aspectRatio: "1/1",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "background.surface",
      boxShadow: "var(--focus-shadow)",
      boxSizing: "content-box",
    }}
  >
    <DeckIconButton {...args} />
  </Box>
);

export const SyncButton = Template.bind({});

SyncButton.args = {
  // Add props here
  icon: <SyncRounded />,
  size: "sm",
};
