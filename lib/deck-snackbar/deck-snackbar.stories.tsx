import CloseRounded from "@mui/icons-material/CloseRounded";
import WarningRounded from "@mui/icons-material/WarningRounded";
import { Meta, StoryFn } from "@storybook/react";
import { DeckIconButton } from "../deck-icon-button";
import { colors } from "../story-types";
import { DeckSnackbar } from "./deck-snackbar.component";

export default {
  title: "DeckSnackbar",
  component: DeckSnackbar,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: colors,
    },
    handleClose: { action: "handleClose" },
  },
} as Meta<typeof DeckSnackbar>;

const Template: StoryFn<typeof DeckSnackbar> = (args) => <DeckSnackbar {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: "primary",
  open: true,
  title: "Snackbar Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta eu neque ut egestas. Cras ac felis quam. Donec interdum ligula eget dignissim consectetur. Vivamus faucibus non augue ultricies aliquet. Vivamus fermentum fringilla turpis quis hendrerit. Sed nec nulla augue. Proin pharetra porta volutpat. Cras vitae augue at tellus vulputate lobortis.",

  startDecorator: <WarningRounded />,
  endDecorator: <DeckIconButton icon={<CloseRounded />} />,
};
