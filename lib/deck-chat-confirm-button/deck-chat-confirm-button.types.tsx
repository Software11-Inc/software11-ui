export interface DeckChatConfirmButtonProps {
  text: string;
  isTyping?: boolean;
  typingSpeed?: number;
  onClick: () => void;
  onTypingComplete?: () => void;
}
