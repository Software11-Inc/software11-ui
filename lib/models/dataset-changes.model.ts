import { DatasetID } from "./dataset.model";
import { IDate } from "./date.model";
import { ITableFigure } from "./figure.model";
import { IUser } from "./user.model";

/**
 * Interface representing a single change made to a figure within a dataset.
 * This includes changes to cell values and names.
 */
export interface IFigureChange {
  id: string; // Unique identifier for the figure change
  cell: string; // Identifier of the cell that was changed
  initialValue: string; // The initial value of the cell before the change
  initialName: string; // The initial name of the figure before the change
  finalValue: string; // The final value of the cell after the change
  finalName: string; // The final name of the figure after the change
}

/**
 * Interface representing a collection of changes made to a dataset.
 * This includes additions, edits, and deletions of figures, along with metadata about the change.
 */
export interface IDatasetChange {
  additions?: IFigureChange[]; // Optional array of figure additions
  edits?: IFigureChange[]; // Optional array of figure edits
  deletions?: IFigureChange[]; // Optional array of figure deletions
  generationDate: IDate; // The date when the changes were generated
  author: IUser; // The user who authored the changes
  versionNumber: number; // The version number of the dataset after applying the changes
}

/**
 * Interface representing a map of dataset changes, keyed by a string identifier.
 * This allows for tracking multiple sets of changes across different versions or aspects of a dataset.
 */
export interface IDatasetChanges {
  [key: string]: IDatasetChange; // Map of dataset changes, keyed by an identifier
}

type FigureID = string;

export type DatasetFigureChangeMap = Record<FigureID, IFigureChange>;

export type DatasetChangeMap = Record<DatasetID, DatasetFigureChangeMap>;

export interface IFigureUserChange {
  id: FigureID;
  old: ITableFigure;
  new: ITableFigure;
}

export type FigureUserChangeMap = Record<FigureID, IFigureUserChange>;
export type DatasetUserChangeMap = Record<DatasetID, FigureUserChangeMap>;

export interface IDatasetUpdateFigure extends ITableFigure {
  id: string;
}
