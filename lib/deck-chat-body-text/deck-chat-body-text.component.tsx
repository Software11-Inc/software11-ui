import { DeckTypingText } from "../deck-typing-text";
import { DeckChatBodyTextProps } from "./deck-chat-body-text.types";
import React from "react";

export const DeckChatBodyText: React.FC<DeckChatBodyTextProps> = ({
  text,
  isTyping = true,
  typingSpeed,
  onTypingComplete,
}) => {
  return (
    <p className="deck-chat-body-text">
      <DeckTypingText text={text} isTyping={isTyping} typingSpeed={typingSpeed} onTypingComplete={onTypingComplete} />
    </p>
  );
};
