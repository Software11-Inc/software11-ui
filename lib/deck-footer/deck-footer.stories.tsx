import { Meta, StoryFn } from "@storybook/react";
import { DeckFooter } from "./deck-footer.component";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import React from "react";

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
  actions: <div></div>,
  back: {
    action: () => console.log("Back"),
    iconStart: <ChevronLeft />,
  },
  fit: false,
};

Default.parameters = {
  layout: "fullscreen",
};
