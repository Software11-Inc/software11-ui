import OpenInNewRounded from "@mui/icons-material/OpenInNewRounded";
import TroubleshootRounded from "@mui/icons-material/TroubleshootRounded";
import { Meta, StoryFn } from "@storybook/react";
import { PowerpointIcon } from "../deck-icons";
import { DeckChatAction } from "./deck-chat-action.component";

export default {
  title: "Chat/Components/Action",
  component: DeckChatAction,
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: {
        type: "select",
      },
      options: [-1, 0, 1, 2, 3],
      description: "Status of the action.",
      table: {
        category: "Props",
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
      description: "Loading state of the action.",
      table: {
        category: "Props",
      },
    },
    actionName: {
      control: {
        type: "text",
      },
      description: "Name of the action.",
      table: {
        category: "Props",
      },
    },
    resourceName: {
      control: {
        type: "text",
      },
      description: "Name of the resource.",
      table: {
        category: "Props",
      },
    },
    resourceLocation: {
      control: {
        type: "text",
      },
      description: "Location of the resource.",
      table: {
        category: "Props",
      },
    },
    resourceShowDelay: {
      control: {
        type: "number",
      },
      description: "Delay before showing the resource.",
      table: {
        category: "Props",
      },
    },
    onResourceClick: {
      action: "onResourceClick",
      description: "Callback function triggered when the resource is clicked.",
      table: {
        category: "Events",
      },
    },
    onTypingComplete: {
      action: "onTypingComplete",
      description: "Callback function triggered when the typing is complete.",
      table: {
        category: "Events",
      },
    },
    icon: {
      description: "Icon to be displayed.",
      table: {
        category: "Icons",
      },
    },
    resourceIcon: {
      description: "Icon for the resource.",
      table: {
        category: "Icons",
      },
    },
    resourceLocationActionIcon: {
      description: "Icon for the resource location action.",
      table: {
        category: "Icons",
      },
    },
  },
} as Meta<typeof DeckChatAction>;

const Template: StoryFn<typeof DeckChatAction> = (args) => <DeckChatAction {...args} />;

export const Default = Template.bind({});

Default.args = {
  icon: <TroubleshootRounded />,
  status: 0,
  loading: false,
  actionName: "Searching",
  resourceIcon: <PowerpointIcon height={12} width={12} />,
  resourceName: "Slide Templates",
  resourceShowDelay: 50,
  resourceLocation: "https://www.deckcraft.io/aseet/slide-templates/longer-name/extra-longer-name",
  resourceLocationActionIcon: <OpenInNewRounded />,
};
