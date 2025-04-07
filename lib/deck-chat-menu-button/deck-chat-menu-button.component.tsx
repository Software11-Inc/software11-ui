import Box from "@mui/joy/Box";
import React from "react";
import { DeckTypingText } from "../deck-typing-text";
import { DeckChatMenuButtonProps } from "./deck-chat-menu-button.types";
import { menuButtonStyles } from "./deck-chat-menu-button.styles";

export const DeckChatMenuButton: React.FC<DeckChatMenuButtonProps> = ({
  text,
  isTyping = false,
  icon,
  onClick,
  onTypingComplete,
}) => {
  return (
    <Box className="deck-chat-menu-button" sx={menuButtonStyles} onClick={onClick}>
      <span className="deck-chat-menu-button--text">
        <DeckTypingText isTyping={isTyping} onTypingComplete={onTypingComplete} text={text} />
      </span>
      <span className="deck-chat-menu-button--icon">{icon}</span>
    </Box>
  );
};
