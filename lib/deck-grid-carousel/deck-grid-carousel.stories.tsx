import { Meta, StoryFn } from "@storybook/react";
import { DeckGridCarousel } from "./deck-grid-carousel.component";
import { SxProps } from "@mui/joy/styles/types";
import Box from "@mui/joy/Box";
import Tooltip from "@mui/joy/Tooltip";
import { DeckLabel } from "../deck-label";

export default {
  title: "UI/Grid Carousel",
  component: DeckGridCarousel,
} as Meta<typeof DeckGridCarousel>;

const Template: StoryFn<typeof DeckGridCarousel> = (args) => <DeckGridCarousel {...args} />;

export const Default = Template.bind({});

const itemStyle: SxProps = {
  aspectRatio: "16 / 9",
  bgcolor: "var(--joy-palette-background-level1)",
  boxShadow: "var(--focus-shadow)",
  overflow: "hidden",

  "&:hover": {
    boxShadow: "var(--focus-shadow)",
  },

  img: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
};

const tooltipStyle: SxProps = {
  aspectRatio: "16 / 9",
  height: "6rem",
};

const imageMap = [
  "https://placehold.co/600x400.png",
  "https://placehold.co/620x420.png",
  "https://placehold.co/640x440.png",
  "https://placehold.co/660x460.png",
  "https://placehold.co/680x480.png",
  "https://placehold.co/700x500.png",
  "https://placehold.co/720x520.png",
  "https://placehold.co/740x540.png",
  "https://placehold.co/760x560.png",
  "https://placehold.co/780x580.png",
  "https://placehold.co/800x600.png",
  "https://placehold.co/820x620.png",
  "https://placehold.co/840x640.png",
];

Default.args = {
  columns: 4,
  rows: 2,
  activeIndex: 0,
  spacing: 16,
  items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  showControls: true,
  header: <DeckLabel title={{ text: "Grid Carousel" }} />,
  itemTemplate: ({ item, hidden }) => (
    <Tooltip title={<Box sx={tooltipStyle}></Box>} variant="soft" arrow>
      <Box sx={itemStyle}>
        <pre style={{ margin: "unset" }}>{JSON.stringify(item, null, 2)}</pre>
        <img src={imageMap[item]} loading="lazy" style={{ display: hidden ? "none" : "block" }} />
      </Box>
    </Tooltip>
  ),
};
