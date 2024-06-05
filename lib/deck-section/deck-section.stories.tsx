import SyncRounded from "@mui/icons-material/SyncRounded";
import WidgetsRounded from "@mui/icons-material/WidgetsRounded";
import Box from "@mui/joy/Box";
import Skeleton from "@mui/joy/Skeleton";
import { Meta, StoryFn } from "@storybook/react";
import { DeckSection } from "./deck-section.component";

export default {
  title: "Layout/Section",
  component: DeckSection,
  parameters: {
    controls: {
      expanded: false,
    },
  },
  argsTypes: {
    separator: {
      description: "Section separator",
      control: {
        type: "object",
      },
      table: {
        disabled: true,
      },
    },
    action: {
      description: "Section action",
      control: {
        type: "object",
      },
    },
    content: {
      description: "Section content",
      control: {
        type: "object",
      },
    },
    hidden: {
      description: "Hide section",
      control: {
        type: "boolean",
      },
    },
    defaultExpanded: {
      description: "Default expanded",
      control: {
        type: "boolean",
      },
    },
    immutable: {
      description: "Immutable",
      control: {
        type: "boolean",
      },
    },
    actionIcon: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof DeckSection>;

const SkeletonContent = () => (
  <Box
    sx={{
      height: "3rem",
      overflow: "hidden",
      position: "relative",
    }}
  >
    <Skeleton color="primary" />
  </Box>
);

const Template: StoryFn<typeof DeckSection> = (args) => (
  <Box
    sx={{
      p: "var(--spacing)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--spacing)",
    }}
  >
    <DeckSection {...args} />

    <SkeletonContent />
    <SkeletonContent />
  </Box>
);

export const Default = Template.bind({});

Default.args = {
  separator: {
    title: "Section Title",
    description: "section description",
    count: 5,
    color: "primary",
  },
  action: {
    text: "Sync",
    color: "primary",
    variant: "soft",
    onClick: () => {},
  },
  defaultExpanded: true,
  hidden: false,
  immutable: false,
  separatorIcon: <WidgetsRounded />,
  actionIcon: <SyncRounded />,
  content: (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: "var(--spacing)" }}
    >
      <SkeletonContent />
      <SkeletonContent />
      <SkeletonContent />
    </Box>
  ),
};

Default.parameters = {
  layout: "fullscreen",
};
