import Box from "@mui/joy/Box";
import React from "react";
import { DeckIconButton } from "../deck-icon-button";
import { DeckStatus } from "../deck-status";
import { DeckTypingText } from "../deck-typing-text";
import { DeckChatActionProps } from "./deck-chat-action.types";
import { chatActionStyle } from "./deck-chat-actions.styles";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const DeckChatAction: React.FC<DeckChatActionProps> = ({
  icon,
  status = 0,
  showStatus = false,
  loading = false,
  actionName,
  resourceName,
  resourceIcon,
  resourceLocation,
  resourceLocationActionIcon,
  resourceShowDelay = 0,
  onResourceClick = () => {},
  onTypingComplete = () => {},
}) => {
  const [isActionNameTyped, setIsActionNameTyped] = React.useState(false);
  const [isResourceNameTyped, setIsResourceNameTyped] = React.useState(false);

  React.useEffect(() => {
    setIsActionNameTyped(false);
  }, [actionName]);

  React.useEffect(() => {
    setIsResourceNameTyped(false);
  }, [resourceName]);

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
          <DeckTypingText text={actionName} onTypingComplete={handleTypingComplete} />
        </div>

        <div className="deck-chat-action--resource">
          {isActionNameTyped && (
            <>
              <div className="deck-chat-action--resource-icon">{resourceIcon}</div>
              <div className="deck-chat-action--resource-name">
                <DeckTypingText text={resourceName} onTypingComplete={handleResourceNameTypingComplete} />
              </div>
            </>
          )}
        </div>
      </div>
      <div className={["deck-chat-action--footer", isResourceNameTyped ? "show" : "hide"].join(" ")}>
        <div className="deck-chat-action--location">
          <span className="deck-chat-action--location-text">
            {isResourceNameTyped && <DeckTypingText text={resourceLocation} onTypingComplete={onTypingComplete} />}
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
