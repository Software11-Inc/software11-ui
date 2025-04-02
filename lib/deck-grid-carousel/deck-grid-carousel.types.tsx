export interface DeckGridCarouselProps {
  items?: any[];
  columns?: number;
  rows?: number;
  spacing?: number;
  activeIndex?: number;
  itemTemplate: (props: { item: any; hidden: boolean }) => React.ReactNode;
  showControls?: boolean;
  header?: React.ReactNode;
}
