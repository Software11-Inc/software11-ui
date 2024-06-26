/**
 * The `IMetaFigure` interface represents metadata for a figure.
 */
export interface IMetaFigure {
  /** Unique identifier for the figure */
  id: string;

  /** User who generated the figure */
  generationUser: string;

  /** User who last updated the figure */
  latestUpdateUser: string;

  /** Date when the figure was generated */
  generationDate: Date;

  /** Date when the figure was last updated */
  lastUpdated: Date;
}

/**
 * The `IDefaultFigure` interface represents a default figure.
 * It extends the `IMetaFigure` interface and adds a `name` and a `value`.
 */
export interface IDefaultFigure extends Partial<IMetaFigure> {
  /** Name of the figure */
  name: string;

  /** Value of the figure */
  value: string;
}

/**
 * The `IDefaultCreateFigure` interface represents the necessary data to create a default figure.
 */
export interface IDefaultCreateFigure {
  /** Name of the figure */
  name: string;

  /** Value of the figure */
  figure: string;
}

/**
 * The `IDefaultUpdateFigure` interface represents the necessary data to update a default figure.
 * It extends the `IDefaultCreateFigure` interface and adds an `id` property.
 */
export interface IDefaultUpdateFigure extends IDefaultCreateFigure {
  /** Unique identifier of the figure to be updated */
  id: string;
}

/**
 * The `ICellFigureItem` interface represents a cell figure item.
 */
export interface ICellFigureItem {
  /** Cell associated with the figure item */
  cell?: string;

  /** Value of the figure item */
  value?: string;
}

/**
 * The `IExcelFigure` interface represents an Excel figure.
 */
export interface IExcelFigure {
  /** Figure item in the Excel figure */
  figure: ICellFigureItem;

  /** Name item in the Excel figure */
  name: ICellFigureItem;
}

/**
 * The `ITableFigure` interface represents a table figure.
 * It extends the `IExcelFigure` and `IMetaFigure` interfaces and adds additional properties.
 */
export interface ITableFigure extends IExcelFigure, Partial<IMetaFigure> {
  /** The group name, used as a key from the primary column defined by the user */
  groupName?: string;

  /** Flag indicating whether the value is a group name */
  isGroupName?: boolean;

  /** The subgroup name, used as a key from the secondary column defined by the user */
  subgroupName?: string;

  /** Flag indicating whether the value is a subgroup name */
  isSubgroupName?: boolean;
}

export type IFigure = IDefaultFigure | ITableFigure;
