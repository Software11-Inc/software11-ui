export interface DeckGridCarouselProps {
  items?: any[];
  columns?: number;
  rows?: number;
  spacing?: number;
  activeIndex?: number;
  itemTemplate: React.FC<any>;
  showControls?: boolean;
  header?: React.ReactNode;
}
