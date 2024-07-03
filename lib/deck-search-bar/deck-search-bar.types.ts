export interface IDeckSearchBarProps {
  onSearch: (searchValue: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  showHint?: boolean;
  compact?: boolean;
}
