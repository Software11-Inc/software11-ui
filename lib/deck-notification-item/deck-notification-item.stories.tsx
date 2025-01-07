import { accordionClasses } from "@mui/joy/Accordion";
import AccordionGroup from "@mui/joy/AccordionGroup";
import { accordionSummaryClasses } from "@mui/joy/AccordionSummary";
import { Meta, StoryFn } from "@storybook/react";
import { accordionGroupStyles, getBackgroundColor } from "../accordion.style";
import { DeckNotificationItem } from "./deck-notification-item.component";
import { DeckNotificationItemProps } from "./deck-notification-item.types";
import { colors, deckSnackbarTextIcon } from "../story-types";

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
    source: {
      control: { type: "select" },
      options: ["web", "excel", "powerpoint"],
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
  title: {
    component: (
      <div>
        This <a className="deck-link">is</a> a test title
      </div>
    ),
  },
  description: {
    text: "This is a test description",
  },
  defaultExpanded: true,
  fade: true,
  actionButtons: [
    {
      buttonKey: "unread",
      text: "Mark as unread",
      variant: "soft",
      action: () => {
        console.log("Mark as unread clicked");
      },
    },
    {
      buttonKey: "archive",
      text: "Archive",
      variant: "soft",
      action: () => {
        console.log("Archive clicked");
      },
    },
    {
      buttonKey: "action",
      text: "Action",
      variant: "solid",
      action: () => {
        console.log("Action clicked");
      },
    },
  ],
  author: {
    firstName: "John",
    lastName: "Doe",
    email: "email@email.com",
    profilePhoto: "https://avatar.iran.liara.run/public",
  },
  sourceProject: {
    id: "1",
    name: "Example Project",
    description: "This is an example project",
  },
  action: "Create dataset",
  objectName: "Example Dataset",
};
