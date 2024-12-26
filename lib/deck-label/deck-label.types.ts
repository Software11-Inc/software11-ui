// TODO: Move to a shared location
export interface RowProperties {
  text?: string;
  component?: React.ReactNode;
  limit?: number;
  bold?: boolean;
}

export interface DeckLabelProps {
  title?: RowProperties;
  description?: RowProperties;
  color?: "primary" | "neutral" | "danger" | "warning" | "success";
  size?: "xs" | "sm" | "md" | "lg";
  mt?: number;
  order?: number;
  gap?: number;
  required?: boolean;
  italic?: boolean;
  separator?: React.ReactNode;
}
