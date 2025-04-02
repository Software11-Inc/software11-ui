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

  "&:hover": {
    boxShadow: "var(--focus-shadow)",
  },
};

const tooltipStyle: SxProps = {
  aspectRatio: "16 / 9",
  height: "6rem",
};

Default.args = {
  columns: 4,
  rows: 2,
  activeIndex: 0,
  spacing: 16,
  items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  showControls: true,
  header: <DeckLabel title={{ text: "Grid Carousel" }} />,
  itemTemplate: ({ item }) => (
    <Tooltip title={<Box sx={tooltipStyle}></Box>} variant="soft" arrow>
      <Box sx={itemStyle}>
        <pre style={{ margin: "unset" }}>{JSON.stringify(item, null, 2)}</pre>
      </Box>
    </Tooltip>
  ),
};
