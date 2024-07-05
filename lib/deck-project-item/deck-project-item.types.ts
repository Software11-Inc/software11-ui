import { IFile, IProjectGroup } from "../models/dataset-tree.model";

export interface IDeckProjectItemProps {
  project: IProjectGroup;
  itemTemplate: (item: IFile) => React.ReactElement;
}
