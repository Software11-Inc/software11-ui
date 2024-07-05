import { Dataset, IFileSheet } from "@models";

export interface IDeckFileSheetItemProps {
  sheet: IFileSheet;
  itemTemplate: (item: Dataset) => JSX.Element;
}
