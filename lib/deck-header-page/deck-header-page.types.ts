export interface DeckHeaderPageProps {
  title?: string;
  description?: string;

  loading?: boolean;
  onSync?: () => void;
  onDelete?: () => void;
}
