import { ICellFigureItem, IFilterItem, IFilterOperator, ITableFigure } from "@models";

export interface DeckRepeaterFormFilterProps {
  figures?: ITableFigure[];
  filterOperators?: IFilterOperator[];
  filter?: IFilterItem;
  headers?: ICellFigureItem[];
  onRemove?: () => void;
  updateFilter?: (field: keyof IFilterItem, value: any) => void;
}
