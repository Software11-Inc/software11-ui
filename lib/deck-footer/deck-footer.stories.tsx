import ChevronLeft from "@mui/icons-material/ChevronLeft";
import Button from "@mui/joy/Button";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { DeckFooter } from "./deck-footer.component";

export default {
  title: "Layout/Footer",
  component: DeckFooter,
} as Meta<typeof DeckFooter>;

const Template: StoryFn<typeof DeckFooter> = (args) => (
  <React.Fragment>
    <div className="app">
      <main className="app-content">
        <div className="page">
          <div className="page-content"></div>
          <DeckFooter {...args} />
        </div>
      </main>
    </div>
  </React.Fragment>
);

export const Default = Template.bind({});

Default.args = {
  hidden: false,
  className: "deck-footer",
  actions: (
    <React.Fragment>
      <Button
        size="sm"
        sx={{
          minHeight: "unset",
          py: 1,
          fontSize: "0.75rem",
          lineHeight: "1rem",
        }}
        fullWidth
      >
        TEXT BUTTON
      </Button>
    </React.Fragment>
  ),
  back: {
    action: () => console.log("Back"),
    iconStart: <ChevronLeft />,
  },
  fit: false,
};

Default.parameters = {
  layout: "fullscreen",
};
