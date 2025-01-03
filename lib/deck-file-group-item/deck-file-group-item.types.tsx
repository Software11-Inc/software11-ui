import { IFile, IFileSheet } from "@models";

export interface IDeckFileGroupItemProps {
  file: IFile;
  defaultExpanded?: boolean;
  open?: boolean;
  itemTemplate?: (item: IFileSheet) => JSX.Element;
  emptyTemplate?: JSX.Element;
}
