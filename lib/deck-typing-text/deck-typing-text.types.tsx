export interface DeckTypingTextProps {
  text?: string;
  isTyping?: boolean;
  typingSpeed?: number;
  onTypingComplete?: () => void;
}
