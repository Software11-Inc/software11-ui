import { IDate } from "./date.model";
import { IUser } from "./user.model";

export interface IFigureChange {
  id: string;
  cell: string;
  initialValue: string;
  initialName: string;
  finalValue: string;
  finalName: string;
}

export interface IDatasetChange {
  additions?: IFigureChange[];
  edits?: IFigureChange[];
  deletions?: IFigureChange[];
  generationDate: IDate;
  author: IUser;
  versionNumber: number;
}

export interface IDatasetChanges {
  [key: string]: IDatasetChange;
}
