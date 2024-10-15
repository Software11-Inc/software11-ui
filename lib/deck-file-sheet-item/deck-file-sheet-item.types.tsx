import { IFileSheet } from "@models";

export interface IDeckFileSheetItemProps {
  sheet: IFileSheet;
  itemTemplate: (ID: string) => JSX.Element;
}
