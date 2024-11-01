import { Dataset } from "@models";

export interface IDeckDatasetItemProps {
  item: Dataset;
  loaded?: boolean;
  loading?: boolean;
  actionIcon?: React.ReactElement;
  hasAction?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
}
