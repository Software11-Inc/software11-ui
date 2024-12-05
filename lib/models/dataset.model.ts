import { IDatasetChange } from "./dataset-changes.model";
import { IDefaultItem } from "./default-item.model";
import { IDefaultFigure, IExcelFigure } from "./figure.model";

/**
 * Defines the possible types of datasets within the system,
 * including various Excel-specific formats and custom or default types.
 */
export type DatasetType =
  | "custom"
  | "default"
  | "excel-table"
  | "excel-data"
  | "excel-matrix"
  | "excel-default"
  | "google-sheet-table";

/**
 * Specifies the possible positions for headers in datasets,
 * allowing for flexibility in data representation.
 */
export type HeaderPosition = "top" | "left";

/**
 * Interface for metadata associated with a dataset,
 * including its type, source information, and change history.
 */
export interface IMetaDataset {
  type: DatasetType; // The type of dataset
  sheetID?: string; // Optional ID of the Excel sheet (for Excel-based datasets)
  changes?: IDatasetChange[]; // Optional array of changes made to the dataset

  // Information about the project from which the dataset originates
  sourceProject?: {
    id: string; // ID of the source project
    name: string; // Name of the source project
    description?: string; // Optional description of the source project
  };

  // Information about the file from which the dataset originates
  sourceFile?: {
    route?: string; // Optional file path or route
    name?: string; // Optional name of the file
    sheetID?: string; // Optional ID of the sheet within the file
    sheetName?: string; // Optional name of the sheet within the file
    description?: string; // Optional description of the file
    type?: string; // Optional type of the file
  };

  hasData: boolean; // Flag indicating if the dataset contains data
  hasChanges: boolean; // Flag indicating if the dataset has undergone changes
  lastFetch: number; // Timestamp of the last data fetch
}

/**
 * Interface for a default dataset, extending both IDefaultItem for common item properties
 * and IMetaDataset for dataset-specific metadata. It may contain an array of default figures.
 */
export interface IDefaultDataset extends IDefaultItem, IMetaDataset {
  latestData?: IDefaultFigure[]; // Optional array of the latest figures in the dataset
}

/**
 * Interface for a table dataset, extending both IDefaultItem for common item properties
 * and IMetaDataset for dataset-specific metadata. It is specifically designed for datasets
 * that contain Excel figures.
 */
export interface ITableDataset extends IDefaultItem, IMetaDataset {
  data?: IExcelFigure[]; // Optional array of Excel figures in the dataset
  latestData?: IExcelFigure[]; // Optional array of the latest Excel figures in the dataset
}

/**
 * Union type representing a dataset that can be either a default dataset or a table dataset,
 * allowing for a flexible data structure that can accommodate various types of datasets.
 */
export type Dataset = IDefaultDataset & ITableDataset;

export interface ICell {
  column: string;
  row: number;
}

export interface ITableColumn {
  cell: ICell;
  value: string;
}

export type SheetID = string;
export type DatasetID = string;

export type RangeDirection = "horizontal" | "vertical" | "square";

export interface IDataConnection {
  range: string;
  containerID: string;
  type: DatasetType;
  primaryColumn?: ITableColumn;
  secondaryColumn?: ITableColumn;
  direction?: RangeDirection;
}

export type DataConnections = Record<DatasetID, IDataConnection>;
export type DatasetMapping = Record<SheetID, DataConnections>;

export interface IAddDataset {
  sheetID: SheetID;
  datasetID: DatasetID;
  range: string;
  containerID: string;
  values: Array<Array<string>>;
  type: DatasetType;
  primaryColumn?: ITableColumn;
  secondaryColumn?: ITableColumn;
}

export interface IRemoveDataset {
  sheetID: SheetID;
  datasetID: DatasetID;
}

export interface IBindingContext {
  datasetID: string;
  sheetID: string;
  range: string;
}
