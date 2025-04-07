import Box from "@mui/joy/Box";
import React from "react";
import { DeckTypingText } from "../deck-typing-text";
import { headlineStyle } from "./deck-chat-headline.styles";
import { DeckChatHeadlineProps } from "./deck-chat-headline.types";

export const DeckChatHeadline: React.FC<DeckChatHeadlineProps> = ({
  headline,
  isTyping,
  onTypingComplete,
  typingSpeed,
}) => {
  return (
    <Box className="deck-chat-headline" sx={headlineStyle}>
      <h1>
        {isTyping ? (
          <DeckTypingText text={headline} typingSpeed={typingSpeed} onTypingComplete={onTypingComplete} />
        ) : (
          <span>{headline}</span>
        )}
      </h1>
    </Box>
  );
};
