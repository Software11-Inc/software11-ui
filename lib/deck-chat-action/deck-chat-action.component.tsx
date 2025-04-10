import Box from "@mui/joy/Box";
import React from "react";
import { DeckIconButton } from "../deck-icon-button";
import { DeckStatus } from "../deck-status";
import { DeckTypingText } from "../deck-typing-text";
import { DeckChatActionProps } from "./deck-chat-action.types";
import { chatActionStyle } from "./deck-chat-actions.styles";
import LinearProgress from "@mui/joy/LinearProgress";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const DeckChatAction: React.FC<DeckChatActionProps> = ({
  icon,
  status = 0,
  progress,
  showStatus = false,
  loading = false,
  isTyping = false,
  actionName,
  resourceName,
  resourceIcon,
  resourceLocation,
  resourceLocationActionIcon,
  resourceShowDelay = 0,
  onResourceClick = () => {},
  onTypingComplete = () => {},
  typingSpeed,
}) => {
  const [isActionNameTyped, setIsActionNameTyped] = React.useState(false);
  const [isResourceNameTyped, setIsResourceNameTyped] = React.useState(false);

  React.useEffect(() => {
    setIsActionNameTyped(false);
  }, [actionName]);

  React.useEffect(() => {
    setIsResourceNameTyped(false);
  }, [resourceName]);

  React.useEffect(() => {
    if (!isTyping) {
      setIsActionNameTyped(true);
      setIsResourceNameTyped(true);
    }
  }, [isTyping]);

  const handleTypingComplete = async () => {
    if (resourceShowDelay) {
      await delay(resourceShowDelay);
    }
    setIsActionNameTyped(true);
  };

  const handleResourceNameTypingComplete = async () => {
    if (resourceShowDelay) {
      await delay(resourceShowDelay);
    }
    setIsResourceNameTyped(true);
  };

  const isDeterminate = !!progress && progress >= 0 && progress <= 100;

  return (
    <Box className="deck-chat-action" sx={chatActionStyle}>
      <div className="deck-chat-action--content">
        <div className="deck-chat-action--icon">
          {icon}
          {showStatus && (
            <div className="deck-chat-action--icon-status">
              <DeckStatus status={status} loading={loading} />
            </div>
          )}
        </div>
        <div className="deck-chat-action--action">
          <DeckTypingText
            text={actionName}
            isTyping={isTyping}
            onTypingComplete={handleTypingComplete}
            typingSpeed={typingSpeed}
          />
        </div>

        {isActionNameTyped && !loading && (
          <div className="deck-chat-action--resource">
            <>
              <div className="deck-chat-action--resource-icon">{resourceIcon}</div>
              <div className="deck-chat-action--resource-name">
                <DeckTypingText
                  text={resourceName}
                  isTyping={isTyping}
                  onTypingComplete={handleResourceNameTypingComplete}
                  typingSpeed={typingSpeed}
                />
              </div>
            </>
          </div>
        )}
        {isActionNameTyped && loading && (
          <div className="deck-chat-action--progress">
            <LinearProgress variant="solid" determinate={isDeterminate} value={isDeterminate ? progress : undefined} />
          </div>
        )}
      </div>
      <div className={["deck-chat-action--footer", isResourceNameTyped && !loading ? "show" : "hide"].join(" ")}>
        <div className="deck-chat-action--location">
          <span className="deck-chat-action--location-text">
            {isResourceNameTyped && (
              <DeckTypingText
                text={resourceLocation}
                isTyping={isTyping}
                onTypingComplete={onTypingComplete}
                typingSpeed={typingSpeed}
              />
            )}
          </span>
          {resourceLocationActionIcon && (
            <div className="deck-chat-action--location-action">
              <DeckIconButton icon={resourceLocationActionIcon} onClick={onResourceClick} variant="plain" size="xs" />
            </div>
          )}
        </div>
      </div>
    </Box>
  );
};
