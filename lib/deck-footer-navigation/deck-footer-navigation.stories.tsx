import { Meta, StoryFn } from "@storybook/react";
import { DeckFooterNavigation } from "./deck-footer-navigation.component";
import AllInboxRounded from "@mui/icons-material/AllInboxRounded";
import CollectionsRounded from "@mui/icons-material/CollectionsRounded";
import PanoramaRounded from "@mui/icons-material/PanoramaRounded";
import Box from "@mui/joy/Box";

export default {
  title: "UI/Footer Navigation",
  component: DeckFooterNavigation,
} as Meta<typeof DeckFooterNavigation>;

const Template: StoryFn<typeof DeckFooterNavigation> = (args) => (
  <Box
    sx={{
      width: "100vw",
      height: "100vh",
    }}
  >
    <DeckFooterNavigation {...args} />
  </Box>
);

export const Default = Template.bind({});

Default.args = {
  activeIndex: 1,
  items: [
    { icon: <AllInboxRounded />, text: "Data", key: "data" },
    { icon: <PanoramaRounded />, text: "Slides", key: "slides" },
    { icon: <CollectionsRounded />, text: "Gallery", key: "gallery" },
  ],
};

Default.parameters = { layout: "fullscreen" };
