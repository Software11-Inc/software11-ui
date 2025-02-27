export interface DeckHeaderSearchProps {
  searchPlaceholder: string;
  searchValue: string;
  onSearchChange: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}
