import { RowProperties } from "../deck-label/deck-label.types";

export interface DeckHeaderProjectProps {
  status?: number;
  title?: RowProperties;
  description?: RowProperties;
  isRight?: boolean;
  onStatusClick?: () => void;
}
