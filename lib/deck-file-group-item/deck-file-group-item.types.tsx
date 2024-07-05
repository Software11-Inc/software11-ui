import { IFile, IFileSheet } from "@models";

export interface IDeckFileGroupItemProps {
  file: IFile;
  itemTemplate: (item: IFileSheet) => JSX.Element;
}
