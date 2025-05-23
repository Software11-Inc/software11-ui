import Box from "@mui/joy/Box";
import { Meta, StoryFn } from "@storybook/react";
import { DeckBreadcrumbItem } from "./deck-breadcrumb-item.component";

export default {
  title: "UI/Breadcrumbs/Item",
  component: DeckBreadcrumbItem,
} as Meta<typeof DeckBreadcrumbItem>;

const Template: StoryFn<typeof DeckBreadcrumbItem> = (args) => (
  <Box
    sx={{
      display: "flex",
      gap: "1rem",
      alignItems: "center",
    }}
  >
    <DeckBreadcrumbItem {...args} />
  </Box>
);

export const Default = Template.bind({});

Default.args = {
  item: {
    title: "Album name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    action: () => console.log("Action clicked"),
  },
};
