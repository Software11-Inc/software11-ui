import { ICellFigureItem } from "../models/figure.model";
import { ISortItem, ISortOperator } from "../models/template.model";

export interface DeckRepeaterFormSortProps {
  sortOperators?: ISortOperator[];
  headers?: ICellFigureItem[];
  sortItem?: ISortItem;
  updateSort?: (field: keyof ISortItem, value: any) => void;
  onRemove?: () => void;
}
