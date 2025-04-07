import { Meta } from "@storybook/react";
import * as React from "react";
import { DeckChatHeadline } from "../deck-chat-headline";

export default {
  title: "Chat/Preview",
  parameters: { actions: { argTypesRegex: "^on.*" } },
} as Meta;

const Template: React.FC = () => (
  <div className="deck-chat-preview">
    <DeckChatHeadline
      headline="Sure, I can help with that!"
      isTyping={true}
      typingSpeed={50}
      onTypingComplete={() => {
        console.log("Headline typing complete");
      }}
    ></DeckChatHeadline>
  </div>
);

export const Default = Template.bind({});
