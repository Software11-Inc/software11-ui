import AcUnitRounded from '@mui/icons-material/AcUnitRounded';
import AddToDriveRounded from '@mui/icons-material/AddToDriveRounded';
import AdminPanelSettingsRounded from '@mui/icons-material/AdminPanelSettingsRounded';
import AllInboxRounded from "@mui/icons-material/AllInboxRounded";
import CollectionsRounded from "@mui/icons-material/CollectionsRounded";
import PanoramaRounded from "@mui/icons-material/PanoramaRounded";
import Box from "@mui/joy/Box";
import { Meta, StoryFn } from "@storybook/react";
import { DeckFooterNavigation } from "./deck-footer-navigation.component";

export default {
  title: "UI/Footer Navigation",
  component: DeckFooterNavigation,
  argTypes: {
    onTabChange: { action: "tabChange" },
  },
} as Meta<typeof DeckFooterNavigation>;

const Template: StoryFn<typeof DeckFooterNavigation> = (args) => (
  <Box
    sx={{
      width: "100vw",
      height: "100vh",
      bgcolor: "var(--joy-palette-background-level3)",
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
    { icon: <AcUnitRounded />, text: "Stuff", key: "cool-stuff" },
    { icon: <AddToDriveRounded />, text: "Drive", key: "drive" },
    { icon: <AdminPanelSettingsRounded />, text: "Settings", key: "settings" },
  ],
};

Default.parameters = { layout: "fullscreen" };
