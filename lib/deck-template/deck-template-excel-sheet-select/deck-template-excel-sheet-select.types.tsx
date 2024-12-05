import { ISheet, IWorkspaceFileContainer } from "@models";

export interface IDeckTemplateExcelSheetSelectProps {
  error?: string;
  fileContainers: IWorkspaceFileContainer[];
  range: string;
  sheets: ISheet[];
  selectedSheets: ISheet[];
  onSave: (sheets: ISheet[]) => void;
  selectSheet?: (sheetID: string) => void;
  selectRange?: (range: string) => void;
}
