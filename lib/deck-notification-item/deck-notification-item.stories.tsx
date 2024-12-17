import { Meta, StoryFn } from "@storybook/react";
import { DeckNotificationItemProps } from "./deck-notification-item.types";
import { DeckNotificationItem } from "./deck-notification-item.component";
import AccordionGroup from "@mui/joy/AccordionGroup";
import { accordionGroupStyles, getBackgroundColor } from "../accordion.style";
import { accordionClasses } from "@mui/joy/Accordion";
import { accordionSummaryClasses } from "@mui/joy/AccordionSummary";

export default {
  title: "UI/Deck Notification Item",
  component: DeckNotificationItem,
  argTypes: {
    onClear: { action: "onClear" },
    onClick: { action: "onClick" },
    expanded: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<DeckNotificationItemProps>;

const testAccordionClassName = "test-accordion";

const Template: StoryFn<DeckNotificationItemProps> = (args) => (
  <AccordionGroup
    className={testAccordionClassName}
    sx={{
      ...accordionGroupStyles(testAccordionClassName, false, 1, "sm", false),
      [`&.${testAccordionClassName} .${accordionClasses.root}`]: {
        bgcolor: getBackgroundColor(2),
      },
      [`&.${testAccordionClassName} .${accordionSummaryClasses.button}`]: {
        "&:hover": {
          bgcolor: `${getBackgroundColor(2)} !important`,
          boxShadow: "unset !important",
        },
      },
    }}
  >
    <DeckNotificationItem {...args} />
  </AccordionGroup>
);

export const Default = Template.bind({});

Default.args = {
  fileTypes: ["excel", "powerpoint"],
  title: "New Notification",
  description: "Last updated 2 hours ago",
  message: "This is a test message",
  defaultExpanded: true,
};
