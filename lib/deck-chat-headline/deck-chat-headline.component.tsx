import React from "react";
import { DeckChatHeadlineProps } from "./deck-chat-headline.types";
import { DeckTypingText } from "../deck-typing-text";

export const DeckChatHeadline: React.FC<DeckChatHeadlineProps> = ({
  headline,
  isTyping,
  onTypingComplete,
  typingSpeed,
}) => {
  return (
    <div className="deck-chat-headline">
      <h1>
        {isTyping ? (
          <DeckTypingText text={headline} typingSpeed={typingSpeed} onTypingComplete={onTypingComplete} />
        ) : (
          <span>{headline}</span>
        )}
      </h1>
    </div>
  );
};
