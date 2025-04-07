import { DeckTypingTextProps } from "./deck-typing-text.types";
import React, { useEffect } from "react";

export const DeckTypingText: React.FC<DeckTypingTextProps> = ({
  text = "",
  isTyping = true,
  typingSpeed = 50,
  onTypingComplete = () => {},
}) => {
  const [displayText, setDisplayText] = React.useState("");

  useEffect(() => {
    if (!isTyping) {
      setDisplayText(text);
      return;
    }
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        onTypingComplete();
      }
    }, typingSpeed);

    return () => {
      clearInterval(interval);
    };
  }, [text, typingSpeed, isTyping]);

  return <span className="deck-typing-text">{displayText}</span>;
};
