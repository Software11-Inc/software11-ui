export interface DeckChatActionProps {
  icon?: React.ReactNode;
  status?: number;
  loading?: boolean;
  actionName?: string;
  resourceName?: string;
  resourceIcon?: React.ReactNode;
  resourceLocation?: string;
  resourceLocationActionIcon?: React.ReactNode;
  resourceShowDelay?: number;
  onResourceClick?: () => void;
}
