export interface DeckChatActionProps {
  icon?: React.ReactNode;
  showStatus?: boolean;
  status?: number;
  loading?: boolean;
  progress?: number;
  isTyping?: boolean;
  actionName?: string;
  resourceName?: string;
  resourceIcon?: React.ReactNode;
  resourceLocation?: string;
  resourceLocationActionIcon?: React.ReactNode;
  resourceShowDelay?: number;
  onResourceClick?: () => void;
  onTypingComplete?: () => void;
  typingSpeed?: number;
}
