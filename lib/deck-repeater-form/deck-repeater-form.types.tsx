import { ICellFigureItem, IFilterItem, ISortItem, ITableFigure } from "@models";

export interface IDeckRepeaterFormProps {
  figures?: ITableFigure[];
  headers?: ICellFigureItem[];
  filter?: IFilterItem[];
  sort?: ISortItem[];
  updateFilter?: (index: number, field: keyof IFilterItem, value: any) => void;
  addFilter?: () => void;
  removeFilter?: (index: number) => void;
  updateSort?: (index: number, field: keyof ISortItem, value: any) => void;
  addSort?: () => void;
  removeSort?: (index: number) => void;
}
