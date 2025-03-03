import { DatasetType, IDynamicDatasetAddition, ITableColumn, ITableDataset, RangeDirection } from "./dataset.model";
import { IDefaultItem } from "./default-item.model";
import { IWorkspaceFileContainer } from "./project.model";
import { ISheet } from "./sheet.model";

export type ExcelTemplateType = "single" | "multiple";

export interface ISingleExcelTemplate {
  range?: string;
  direction?: RangeDirection;
  datasetType: DatasetType;
  primaryColumn?: ITableColumn;
  secondaryColumn?: ITableColumn;
  headers?: ITableColumn[];
  data?: Array<Array<string>>;
}

export type TemplateConfig = ISingleExcelTemplate; // | IMultipleExcelTemplate;

export interface IExcelTemplate extends IDefaultItem {
  description?: string;
  type?: ExcelTemplateType;
  config?: TemplateConfig;
  selectedSheets?: ISheet[];
}

export interface IExcelTemplateDataMap {
  container: IWorkspaceFileContainer;
  datasets: Array<ITableDataset & IDynamicDatasetAddition>;
}
