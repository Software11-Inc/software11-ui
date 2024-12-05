import { Meta, StoryFn } from "@storybook/react";
import { IDeckTemplateExcelSinglePreviewProps } from "./deck-template-excel-single-preview.types";
import { DeckTemplateExcelSinglePreview } from "./deck-template-excel-single-preview.component";

export default {
  title: "Pages/Template/Excel/Single Preview",
} as Meta<IDeckTemplateExcelSinglePreviewProps>;

const Template: StoryFn<IDeckTemplateExcelSinglePreviewProps> = (args) => <DeckTemplateExcelSinglePreview {...args} />;

export const Default = Template.bind({});

Default.args = {
  templateName: "Template Name",
  config: {
    direction: "horizontal",
    datasetType: "excel-default",
    range: "A1:D20",
    primaryColumn: {
      cell: {
        column: "A",
        row: 1,
      },
      value: "Name",
    },
    secondaryColumn: {
      cell: {
        column: "B",
        row: 1,
      },
      value: "Age",
    },
  },
  openConfig: () => {},
  selectRange: () => {},
};
