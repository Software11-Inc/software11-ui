import { Meta } from "@storybook/react";
import { DeckLogo } from "./deck-logo.component";

export default {
  title: "UI/Logo",
  component: DeckLogo,
} as Meta<typeof DeckLogo>;

export const Default = (): React.ReactElement => <DeckLogo />;
