import { Meta, StoryFn } from "@storybook/react";
import { DeckActiveProject } from "./deck-active-project.component";

export default {
  title: "Pages/Home/Active Project",
  component: DeckActiveProject,
  parameters: {
    controls: {
      expanded: false,
    },
  },
  argTypes: {
    projectName: {
      description: "Name of the project",
      control: {
        type: "text",
      },
    },
    projectDescription: {
      description: "Description of the project",
      control: {
        type: "text",
      },
    },
    projectStatus: {
      description: "Status of the project",
      control: {
        type: "number",
      },
    },
    hasChanges: {
      description: "Has changes in the project",
      control: {
        type: "boolean",
      },
    },
    loading: {
      description: "Loading state",
      control: {
        type: "boolean",
      },
    },
    onSync: { action: "sync" },
    onDisconnect: { action: "disconnect" },
  },
} as Meta<typeof DeckActiveProject>;

export const Default: StoryFn<typeof DeckActiveProject> = (args) => (
  <DeckActiveProject {...args} />
);

Default.args = {
  projectName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  projectDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac lobortis dui. Duis a suscipit leo, vel imperdiet mi. Nulla facilisi. Sed tempor mi id sem ornare elementum. Praesent tempus turpis at consectetur lobortis.",
  projectStatus: 0,
  hasChanges: true,
  loading: false,
};
