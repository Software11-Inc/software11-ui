import { Meta, StoryFn } from "@storybook/react";
import { IWorkspaceFile } from "../models/project.model";
import { DeckSelectProject } from "./deck-select-project.component";

export default {
  title: "Pages/Welcome/Project",
  component: DeckSelectProject,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta<typeof DeckSelectProject>;

const Template: StoryFn<typeof DeckSelectProject> = (args) => <DeckSelectProject {...args} />;

export const Default = Template.bind({});

Default.args = {
  checked: false,
  project: {
    name: "Project Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    files: [
      {
        fileType: "excel",
      },
      {
        fileType: "excel",
      },
      {
        fileType: "excel",
      },
      {
        fileType: "excel",
      },
      {
        fileType: "excel",
      },
      {
        fileType: "excel",
      },
      {
        fileType: "excel",
      },
      {
        fileType: "excel",
      },
      {
        fileType: "powerpoint",
      },
      {
        fileType: "powerpoint",
      },
      {
        fileType: "google-sheet",
      },
    ] as any as IWorkspaceFile[],
  },
};
