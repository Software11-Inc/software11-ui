import { ISingleExcelTemplate } from "@models";

export interface IDeckTemplateExcelSinglePreviewProps {
  templateName?: string;
  templateDescription?: string;
  config?: ISingleExcelTemplate;
  openConfig?: () => void;
  selectRange?: (range?: string) => void;
}
