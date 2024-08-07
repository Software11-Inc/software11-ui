import { Dataset } from "./dataset.model";
import { IDate } from "./date.model";
import { IUser } from "./user.model";

export interface IDatasetSourceProject {
  id: string;
  name: string;
}

export interface IDatasetSourceFile {
  name: string;
  tab: string;
  type: string;
}

export interface IDatasetTreeResponse {
  id: string;
  name: string;
  sourceProject?: IDatasetSourceProject;
  sourceFile?: IDatasetSourceFile;
  user?: IUser;
  lastUpdated: IDate;
}

export interface IKeyData {
  label: string;
  type?: string;
  description: string;
}

export interface IProjectGroup {
  header: IKeyData;
  data: IFile[];
}

export interface IFile {
  header: IKeyData;
  data: IFileSheet[];
}

export interface IFileSheet {
  header: IKeyData;
  data: Dataset[];
}
