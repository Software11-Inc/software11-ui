import { AlphabetKey } from "../deck-alphabetical-view";
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

type SheetName = string;
export type SheetGroup = Record<SheetName, Dataset[]>;

type FileName = string;
export type FileGroup = Record<FileName, { key: IKeyData; value: SheetGroup }>;

type ProjectName = string;
export type ProjectGroup = Record<ProjectName, { key: IKeyData; value: FileGroup }>;

export type DatasetTree = Partial<Record<AlphabetKey, ProjectGroup>>;
