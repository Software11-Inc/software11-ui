import { Meta, StoryFn } from "@storybook/react";
import { IDeckSnackbarMessageProps, deckSnackbarTextIcon } from "./deck-snackbar-message.types";
import { DeckSnackbarMessage } from "./deck-snackbar-message.component";
import { colors } from "../story-types";
import Box from "@mui/joy/Box";

export default {
  title: "UI/Snackbar/Message",
  argTypes: {
    textIcon: {
      options: [null, ...deckSnackbarTextIcon],
      control: { type: "select" },
    },
    color: {
      options: colors,
      control: { type: "select" },
    },
    onClose: { action: "onClose" },
  },
} as Meta<IDeckSnackbarMessageProps>;

const Template: StoryFn<IDeckSnackbarMessageProps> = (args) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {[...Array(30)].map((_, index) => (
        <DeckSnackbarMessage key={index} first={!index} {...args} />
      ))}
    </Box>
  );
};

export const Default = Template.bind({});

Default.args = {
  title:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed justo a diam feugiat condimentum. Nam ultricies, nisi eu porta porta, purus diam tempus erat, quis tristique lorem ex id turpis. Nulla sodales nulla sit amet consectetur aliquet. Vivamus augue nunc, lacinia quis turpis vel, tempus consequat felis. Proin suscipit porttitor mollis. Fusce ornare tellus sit amet lorem consectetur sagittis eget sit amet felis. Fusce id tincidunt erat. Vivamus scelerisque blandit justo, id vulputate lacus consectetur sed. Curabitur eros nisi, ultrices sed pellentesque mattis, sollicitudin non dolor. Mauris bibendum accumsan magna, convallis cursus tortor ultrices vitae.",
  message:
    "Donec ac lobortis sem. Pellentesque non magna gravida, placerat nisi ut, mattis purus. Cras sollicitudin dolor ut sapien mattis elementum. Duis aliquam quam ut auctor aliquam. Donec malesuada ex tristique fermentum mollis. Duis faucibus augue ut nunc dictum, a malesuada diam pretium. Nulla sagittis sit amet lorem ut bibendum. Vivamus pharetra neque dolor, sed ullamcorper risus vestibulum a.",
  autoHideDuration: 5000,
} as IDeckSnackbarMessageProps;

Default.parameters = {
  layout: "fullscreen",
};
