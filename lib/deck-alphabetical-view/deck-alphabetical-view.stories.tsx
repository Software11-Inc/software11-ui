import Box from "@mui/joy/Box";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { DeckHeader } from "../deck-header";
import { DeckLabel } from "../deck-label";
import { DeckAlphabeticalView } from "./deck-alphabetical-view.component";
import { DeckAlphabeticalController } from "./deck-alphabetical-view.controller";
import Skeleton from "@mui/joy/Skeleton";

export default {
  title: "UI/Alphabetical View",
  component: DeckAlphabeticalView,
  argTypes: {
    onSearch: { action: "search" },
  },
} as Meta<typeof DeckAlphabeticalView>;

type ExampleItem = {
  id: string;
  name: string;
};

export const Default: StoryFn<typeof DeckAlphabeticalView<ExampleItem>> = (args) => (
  <React.Fragment>
    <div className="app">
      <main className="app-content">
        <div className="page">
          <DeckHeader
            title={""}
            description={""}
            fullName={""}
            role={""}
            email={""}
            avatarUrl={""}
            showNavigation={false}
            onLogout={function (): void {
              throw new Error("Function not implemented.");
            }}
            onBack={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <div className="page-content">
            <Box
              className="page-section sticky deck-sticky"
              sx={{
                display: "flex",
                pb: "1rem !important",
                height: "2.5rem",
              }}
            >
              <Skeleton height={"1.5rem"} sx={{ position: "relative" }} />
            </Box>
            <div className="page-section active">
              <DeckAlphabeticalView<ExampleItem> {...args} />
            </div>
          </div>
        </div>
      </main>
    </div>
  </React.Fragment>
);

Default.parameters = {
  layout: "fullscreen",
};

Default.args = {
  hasSearch: false,
  loaded: true,
  loading: false,
  controller: new DeckAlphabeticalController(),
  type: "page",
  items: {
    ANY: [
      { id: "1", name: "#1" },
      { id: "2", name: "#2" },
      { id: "3", name: "#3" },
    ],
    A: [
      { id: "1", name: "A1" },
      { id: "2", name: "A2" },
      { id: "3", name: "A3" },
    ],
    B: [
      { id: "3", name: "B1" },
      { id: "4", name: "B2" },
    ],
    C: [
      { id: "5", name: "C1" },
      { id: "6", name: "C2" },
    ],
    D: [
      { id: "7", name: "D1" },
      { id: "8", name: "D2" },
    ],
    E: [
      { id: "9", name: "E1" },
      { id: "10", name: "E2" },
    ],
    F: [
      { id: "11", name: "F1" },
      { id: "12", name: "F2" },
    ],
    G: [
      { id: "13", name: "G1" },
      { id: "14", name: "G2" },
    ],
    H: [
      { id: "15", name: "H1" },
      { id: "16", name: "H2" },
    ],
    I: [
      { id: "17", name: "I1" },
      { id: "18", name: "I2" },
    ],
    J: [
      { id: "19", name: "J1" },
      { id: "20", name: "J2" },
    ],
    K: [
      { id: "21", name: "K1" },
      { id: "22", name: "K2" },
    ],
    L: [
      { id: "23", name: "L1" },
      { id: "24", name: "L2" },
    ],
    M: [
      { id: "25", name: "M1" },
      { id: "26", name: "M2" },
    ],
    N: [
      { id: "27", name: "N1" },
      { id: "28", name: "N2" },
    ],
    U: [
      { id: "29", name: "U1" },
      { id: "30", name: "U2" },
    ],
    V: [
      { id: "31", name: "V1" },
      { id: "32", name: "V2" },
    ],
    W: [
      { id: "33", name: "W1" },
      { id: "34", name: "W2" },
    ],
    X: [
      { id: "35", name: "X1" },
      { id: "36", name: "X2" },
    ],
    Y: [
      { id: "37", name: "Y1" },
      { id: "38", name: "Y2" },
    ],
    Z: [
      { id: "39", name: "Z1" },
      { id: "40", name: "Z2" },
    ],
  },
  itemTemplate: (item: any) => {
    return (
      <Box
        sx={{
          p: 1,
          borderRadius: "var(--border-radius)",
          bgcolor: "background.surface",
        }}
        key={item.id}
      >
        <DeckLabel
          title={{
            text: item.name,
          }}
        />
      </Box>
    );
  },
};
