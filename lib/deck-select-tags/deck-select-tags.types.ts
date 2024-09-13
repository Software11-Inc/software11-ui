export interface IDeckSelectTagsProps {
  tags: string[];
  size?: "sm" | "md" | "lg";
  onChange: (tags: string[]) => void;
  title?: string;
  description?: string;
  placeholder?: string;
}

export interface IDeckSelectTagsState {
  inputTag: string;
}
