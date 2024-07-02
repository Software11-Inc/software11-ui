import { IDefaultItem } from "./default-item.model";
import { TemplateShapes } from "./template-shape.model";

/**
 * Enum defining various filter operators for use in filtering datasets.
 * Includes standard comparison operators and string-specific operators like CONTAINS.
 */
export enum FilterOperatorEnum {
  EQUAL = "EQUAL",
  NOT_EQUAL = "NOT_EQUAL",
  GREATER_THAN = "GREATER_THAN",
  LESS_THAN = "LESS_THAN",
  GREATER_THAN_OR_EQUAL = "GREATER_THAN_OR_EQUAL",
  LESS_THAN_OR_EQUAL = "LESS_THAN_OR_EQUAL",
  CONTAINS = "CONTAINS",
  NOT_CONTAINS = "NOT_CONTAINS",
  STARTS_WITH = "STARTS_WITH",
  ENDS_WITH = "ENDS_WITH",
}

/** Type alias for filter operator keys, derived from the FilterOperatorEnum. */
export type FilterOperatorType = keyof typeof FilterOperatorEnum;

/**
 * Interface representing a filter operator with a key and human-readable label.
 */
export interface IFilterOperator {
  key: FilterOperatorType;
  label: string;
}

/**
 * Interface for defining a filter item, including the field key, operator, and value to filter by.
 */
export interface IFilterItem {
  key: string;
  operator: FilterOperatorType;
  value: string;
}

/**
 * Enum defining sort operators, specifically ascending (ASC) and descending (DESC) order.
 */
export enum SortOperatorEnum {
  ASC = "ASC",
  DESC = "DESC",
}

/** Type alias for sort operator keys, derived from the SortOperatorEnum. */
export type SortOperatorType = keyof typeof SortOperatorEnum;

/**
 * Interface representing a sort operator with a key and human-readable label.
 */
export interface ISortOperator {
  key: SortOperatorType;
  label: string;
}

/**
 * Interface for defining a sort item, including the field key and operator (ASC or DESC) to sort by.
 */
export interface ISortItem {
  key: string;
  operator: SortOperatorType;
}

/**
 * Interface representing a repeater, which applies a set of filters and sort criteria to a dataset.
 * Optionally includes an identifier for the repeater and the dataset it applies to.
 */
export interface IRepeater {
  id?: string;
  datasetID?: string;
  filter: IFilterItem[];
  sort: ISortItem[];
}

/** Type alias for a record of repeaters, keyed by a string identifier. */
export type DatasetRepeater = Record<string, IRepeater>;

/**
 * Interface extending IDefaultItem for templates, including properties for repeaters and shapes.
 * Templates define how data is presented, including filtering and sorting criteria.
 */
export interface ITemplate extends IDefaultItem {
  repeaters: DatasetRepeater;
  shapes: TemplateShapes;
}
