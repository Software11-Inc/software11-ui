import { Size } from "../models/common.model";

export interface IDeckTemplateShapeName {
  value: string;
  placeholder?: string;
  size?: Size;
  readonly?: boolean;
  onChange?: (value: string) => void;
}
