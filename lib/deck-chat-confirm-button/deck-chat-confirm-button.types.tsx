export interface DeckChatConfirmButtonProps {
  text: string;
  isTyping?: boolean;
  onClick: () => void;
  onTypingComplete?: () => void;
}
