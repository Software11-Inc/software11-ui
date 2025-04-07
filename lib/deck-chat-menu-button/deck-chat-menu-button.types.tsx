export interface DeckChatMenuButtonProps {
  text: string;
  isTyping?: boolean;
  icon: React.ReactNode;
  onClick: () => void;
  onTypingComplete?: () => void;
}
