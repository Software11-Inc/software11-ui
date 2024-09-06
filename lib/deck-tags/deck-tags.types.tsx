import { Size } from "../models/common.model";

export interface IDeckTagProps {
  tag: string;
  size?: Size;
  onClick?: (tag: string) => void;
}

export interface IDeckTagsProps {
  tags: string[];
  limit?: number;
  size?: Size;
  onClick?: (tag: string) => void;
}
