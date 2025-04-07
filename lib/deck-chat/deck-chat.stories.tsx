import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { DeckChatHeadline } from "../deck-chat-headline";
import { DeckChatAction } from "../deck-chat-action";
import CloudSyncRounded from "@mui/icons-material/CloudSyncRounded";
import { PowerpointIcon } from "../deck-icons";
import OpenInNewRounded from "@mui/icons-material/OpenInNewRounded";
import { DeckChatBodyText } from "../deck-chat-body-text";
import Box from "@mui/joy/Box";
import { DeckGridCarousel } from "../deck-grid-carousel";
import { getBackgroundColor } from "../accordion.style";
import { DeckChatMenuButton } from "../deck-chat-menu-button";
import ShortcutRounded from "@mui/icons-material/ShortcutRounded";
import { DeckChatConfirmButton } from "../deck-chat-confirm-button";

export default {
  title: "Chat/Preview",
  parameters: { actions: { argTypesRegex: "^on.*" } },
} as Meta;

const TemplateComponet: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isHeadlineTyped, setIsHeadlineTyped] = React.useState(false);
  const [isActionTyped, setIsActionTyped] = React.useState(false);
  const [isSecondHeadlineTyped, setIsSecondHeadlineTyped] = React.useState(false);
  const [isBodyTextTyped, setIsBodyTextTyped] = React.useState(false);

  const handleHeadlineTypingComplete = () => {
    setIsHeadlineTyped(true);
  };

  const handleActionTypingComplete = () => {
    setIsActionTyped(true);
  };

  const handleSecondHeadlineTypingComplete = () => {
    setIsSecondHeadlineTyped(true);
  };

  const handleBodyTextTypingComplete = () => {
    setIsBodyTextTyped(true);
  };

  React.useEffect(() => {
    window.scrollTo({ top: ref.current?.offsetTop, behavior: "smooth" });
  }, [isBodyTextTyped]);

  return (
    <>
      <Box className="deck-chat-preview" sx={{ p: 2 }}>
        <DeckChatHeadline
          headline="Sure, I can help with that!"
          isTyping={true}
          onTypingComplete={handleHeadlineTypingComplete}
        ></DeckChatHeadline>
        {isHeadlineTyped && (
          <DeckChatAction
            actionName="Retrieving"
            resourceIcon={<PowerpointIcon width={12} height={12} />}
            loading={true}
            resourceName="Investor Deck"
            resourceLocation="https://deckcraft.io/projects/investor-deck"
            resourceLocationActionIcon={<OpenInNewRounded />}
            icon={<CloudSyncRounded />}
            onTypingComplete={handleActionTypingComplete}
          />
        )}
        {isActionTyped && (
          <DeckChatHeadline
            headline="Here you go!"
            isTyping={true}
            onTypingComplete={handleSecondHeadlineTypingComplete}
          />
        )}
        {isSecondHeadlineTyped && (
          <DeckGridCarousel
            rows={2}
            columns={2}
            itemTemplate={() => (
              <Box
                sx={{
                  aspectRatio: "16/9",
                  bgcolor: getBackgroundColor(2),
                }}
              ></Box>
            )}
          />
        )}
        {isSecondHeadlineTyped && (
          <DeckChatBodyText
            text="Here are the latest slides that we pulled for you please let me know if you need anything else."
            onTypingComplete={handleBodyTextTypingComplete}
          />
        )}
        {isBodyTextTyped && (
          <>
            <Box sx={{ display: "flex", flexDirection: "column", fontSize: "12px", gap: 1 }}>
              <DeckChatMenuButton
                text="Show me slide about a topic"
                icon={
                  <ShortcutRounded
                    sx={{
                      transform: "rotate(180deg)",
                    }}
                  />
                }
                onClick={() => {}}
              />
              <DeckChatMenuButton
                text="Build me a deck from Scratch"
                icon={
                  <ShortcutRounded
                    sx={{
                      transform: "rotate(180deg)",
                    }}
                  />
                }
                onClick={() => {}}
              />
            </Box>
          </>
        )}
      </Box>
      {isBodyTextTyped && (
        <Box ref={ref}>
          <DeckChatConfirmButton text="Show me slide about a topic" onClick={() => {}} />
        </Box>
      )}
    </>
  );
};

const Template: StoryFn = () => <TemplateComponet />;

export const SlideExample = Template.bind({});

SlideExample.parameters = {
  layout: "fullscreen",
};
