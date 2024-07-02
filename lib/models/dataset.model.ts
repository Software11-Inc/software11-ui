import { IDatasetChange } from "./dataset-changes.model";
import { IDefaultItem } from "./default-item.model";
import { IDefaultFigure, IExcelFigure } from "./figure.model";

export type DatasetType = "custom" | "default" | "excel-table" | "excel-data" | "excel-matrix" | "excel-default";

export type HeaderPosition = "top" | "left";

export interface IMetaDataset {
  type: DatasetType;
  sheetId?: string;
  changes?: IDatasetChange[];

  // FILE LOCATION
  sourceProject?: {
    id: string;
    name: string;
    description?: string;
  };

  sourceFile?: {
    route?: string;
    name?: string;
    sheetID?: string;
    sheetName?: string;
    description?: string;
    type?: string;
  };

  hasData: boolean;
  hasChanges: boolean;
  lastFetch: number;
}

export interface IDefaultDataset extends IDefaultItem, IMetaDataset {
  latestData?: IDefaultFigure[];
}

export interface ITableDataset extends IDefaultItem, IMetaDataset {
  data?: IExcelFigure[];
}

export type Dataset = IDefaultDataset & ITableDataset;
