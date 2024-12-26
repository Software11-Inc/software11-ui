import { accordionClasses } from "@mui/joy/Accordion";
import AccordionGroup from "@mui/joy/AccordionGroup";
import { accordionSummaryClasses } from "@mui/joy/AccordionSummary";
import { Meta, StoryFn } from "@storybook/react";
import { accordionGroupStyles, getBackgroundColor } from "../accordion.style";
import { DeckNotificationItem } from "./deck-notification-item.component";
import { DeckNotificationItemProps } from "./deck-notification-item.types";
import { deckSnackbarTextIcon } from "../models/notification.model";
import { colors } from "../story-types";

export default {
  title: "UI/Deck Notification Item",
  component: DeckNotificationItem,
  argTypes: {
    onClear: { action: "onClear" },
    onClick: { action: "onClick" },
    expanded: { control: { type: "boolean" } },
    textIcon: {
      options: [null, ...deckSnackbarTextIcon],
      control: { type: "select" },
    },
    color: {
      control: { type: "select" },
      options: colors,
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
  title: {
    text: "This is a test title",
  },
  description: {
    text: "This is a test description",
  },
  message: "This is a test message",
  defaultExpanded: true,
  fade: true,
  action: {
    text: "Action",
    variant: "solid",
    action: () => {
      console.log("Action clicked");
    },
  },
};
