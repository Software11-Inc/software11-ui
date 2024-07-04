export interface IDeckSelectTagsProps {
  tags: string[];
  onChange: (tags: string[]) => void;
}

export interface IDeckSelectTagsState {
  inputTag: string;
}
