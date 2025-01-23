import { RowProperties } from "../deck-label/deck-label.types";

export interface DeckImageCardProps {
  imageSrc: string;
  title: RowProperties;
  description: RowProperties;
  insertText?: string;
  onImageClick?: () => void;
}
