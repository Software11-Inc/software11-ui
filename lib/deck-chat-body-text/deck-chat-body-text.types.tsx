export interface DeckChatBodyTextProps {
  text?: string;
  isTyping?: boolean;
  typingSpeed?: number;
  onTypingComplete?: () => void;
}
