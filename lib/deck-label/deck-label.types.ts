interface RowProperties {
  text: string;
  limit?: number;
}

export interface DeckLabelProps {
  title?: RowProperties;
  description?: RowProperties;
  color?: "primary" | "neutral" | "danger" | "warning" | "success";
  size?: "sm" | "md" | "lg";
  mt?: number;
  order?: number;
}
