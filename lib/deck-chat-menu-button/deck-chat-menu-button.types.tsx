export interface DeckChatMenuButtonProps {
  text: string;
  isTyping?: boolean;
  typingSpeed?: number;
  icon: React.ReactNode;
  onClick: () => void;
  onTypingComplete?: () => void;
}
