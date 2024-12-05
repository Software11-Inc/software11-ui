import { Meta, StoryFn } from "@storybook/react";
import { IDeckTemplateExcelSheetSelectProps } from "./deck-template-excel-sheet-select.types";
import { DeckTemplateExcelSheetSelect } from "./deck-template-excel-sheet-select.component";

export default {
  title: "Pages/Template/Excel/Sheet Select",
  argTypes: {
    selectSheet: { action: "selectSheet" },
    selectRange: { action: "selectRange" },
  },
} as Meta<IDeckTemplateExcelSheetSelectProps>;

const Template: StoryFn<IDeckTemplateExcelSheetSelectProps> = (args) => <DeckTemplateExcelSheetSelect {...args} />;

export const Default = Template.bind({});

Default.args = {
  fileContainers: [
    {
      containerIndex: 0,
      containerID: "container-1",
      sheetID: "sheet-1",
      containerName: "Container 1",
    },
    {
      containerIndex: 2,
      containerID: "container-3",
      sheetID: "sheet-3",
      containerName: "Container 3",
    },
  ],
  sheets: [
    {
      name: "Sheet 1",
      index: 0,
      id: "sheet-1",
    },
    {
      name: "Sheet 2",
      index: 1,
      id: "sheet-2",
    },
    {
      name: "Sheet 3",
      index: 2,
      id: "sheet-3",
    },
  ],
};
