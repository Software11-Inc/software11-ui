import { Dataset } from "@models";

export interface IDeckDatasetItemProps {
  item: Dataset;
  loaded?: boolean;
  loading?: boolean;
  actionIcon?: React.ReactElement;
  onClick?: () => void;
  onMouseEnter?: () => void;
}
