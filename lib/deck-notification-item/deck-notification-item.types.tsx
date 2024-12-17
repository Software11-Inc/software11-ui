export interface DeckNotificationItemProps {
  title?: string;
  description?: string;
  message?: string;
  fileTypes?: string[];
  defaultExpanded?: boolean;
  expanded?: boolean;
  onClick?: () => void;
  onClear?: () => void;
}
