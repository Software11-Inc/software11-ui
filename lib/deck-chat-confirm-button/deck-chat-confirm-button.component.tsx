import Box from "@mui/joy/Box";
import { DeckChatConfirmButtonProps } from "./deck-chat-confirm-button.types";
import React from "react";
import { DeckTypingText } from "../deck-typing-text";
import { confirmButtonStyles } from "./deck-chat-confirm-button.styles";

export const DeckChatConfirmButton: React.FC<DeckChatConfirmButtonProps> = ({
  text,
  isTyping = false,
  typingSpeed,
  onClick,
  onTypingComplete,
}) => {
  return (
    <Box className="deck-chat-confirm-button" sx={confirmButtonStyles} onClick={onClick}>
      <span className="deck-chat-confirm-button--text">
        <DeckTypingText isTyping={isTyping} typingSpeed={typingSpeed} onTypingComplete={onTypingComplete} text={text} />
      </span>
    </Box>
  );
};
