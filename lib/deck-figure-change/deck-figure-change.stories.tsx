import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { DeckFigureChange } from "./deck-figure-change.component";

export default {
  title: "DeckFigureChange",
  component: DeckFigureChange,
} as Meta<typeof DeckFigureChange>;

const Template: StoryFn<typeof DeckFigureChange> = (args) => (
  <React.Fragment>
    <DeckFigureChange {...args} />
  </React.Fragment>
);

export const Default = Template.bind({});

Default.args = {
  change: {
    author: {
      email: "valentin.shtanko@aimtraction.com",
      firstName: "Valentyn",
      lastName: "Shtanko",
      role: "user",
      profilePhoto:
        "https://firebasestorage.googleapis.com/v0/b/sw11dev.appspot.com/o/profile-photos%2Funnamed.jpg?alt=media&token=80eb432a-0c12-43da-b793-27a1d3810b00&_gl=1*1o9jxfg*_ga*MTA3OTc0NDc0MS4xNjk1OTEzODM2*_ga_CW55HF8NVT*MTY5NzA3ODkwOC4yNS4xLjE2OTcwNzkyMjYuMjcuMC4w",
      username: "vs",
      userID: "3PJaCmuEv2f09tLbRYXHS32LaT43",
    },
    createdAt: {
      _seconds: 1716315613,
      _nanoseconds: 889000000,
    },
    versionNumber: 132,
    additions: [
      {
        initialValue: "",
        finalValue: "22",
        cell: "B2",
        initialName: "",
        finalName: "Name 1",
        id: "ymt4Hc5G0ogKbFstfoGC",
      },
      {
        initialValue: "",
        finalValue: "12",
        cell: "B3",
        initialName: "",
        finalName: "Name 2",
        id: "0m3G7rk6zqI1pv4QPKUF",
      },
      {
        initialValue: "",
        finalValue: "18",
        cell: "B4",
        initialName: "",
        finalName: "Name 3",
        id: "NvWyNKk1QOP4nS2aGKdD",
      },
      {
        initialValue: "",
        finalValue: "24",
        cell: "B5",
        initialName: "",
        finalName: "Name 4",
        id: "qKlJcv1bgwIZoWXPuDd6",
      },
      {
        initialValue: "",
        finalValue:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ligula ante, malesuada at blandit at, facilisis in dui. Cras ipsum nunc, dignissim sed urna nec, hendrerit porta ipsum. Cras elementum quis turpis sed condimentum. Duis ac libero metus. Mauris ut justo dolor. Donec non orci at nisi fringilla tincidunt. Duis dui ligula, auctor nec vulputate vitae, lobortis ut tellus. Quisque a leo suscipit, dapibus urna sed, vestibulum elit. Nam pharetra augue nec est suscipit, sit amet tristique libero tincidunt. Proin molestie vestibulum orci, eu porta metus luctus eget.",
        cell: "B6",
        initialName: "",
        finalName: "Name 5",
        id: "67LuGThqIrcaM5617cmc",
      },
    ],
    edits: [
      {
        initialValue: "22",
        finalValue: "25",
        cell: "B2",
        initialName: "Name 1",
        finalName: "Name 1",
        id: "ymt4Hc5G0ogKbFstfosGC",
      },
      {
        initialValue: "12",
        finalValue: "15",
        cell: "B3",
        initialName: "Name 2",
        finalName: "Name 2",
        id: "0m3G7rk6zqI1pv4QPsKUF",
      },
      {
        initialValue: "18",
        finalValue: "21",
        cell: "B4",
        initialName: "Name 3",
        finalName: "Name 3",
        id: "NvWyNKk1QOP4nS2aGsKdD",
      },
      {
        initialValue: "24",
        finalValue:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ligula ante, malesuada at blandit at, facilisis in dui. Cras ipsum nunc, dignissim sed urna nec, hendrerit porta ipsum. Cras elementum quis turpis sed condimentum. Duis ac libero metus. Mauris ut justo dolor. Donec non orci at nisi fringilla tincidunt. Duis dui ligula, auctor nec vulputate vitae, lobortis ut tellus. Quisque a leo suscipit, dapibus urna sed, vestibulum elit. Nam pharetra augue nec est suscipit, sit amet tristique libero tincidunt. Proin molestie vestibulum orci, eu porta metus luctus eget.",
        cell: "B5",
        initialName: "Name 4",
        finalName: "Name 4",
        id: "qKlJcv1bgwIZoWXPusDd6",
      },
      {
        initialValue: "30",
        finalValue: "33",
        cell: "B6",
        initialName: "Name 5",
        finalName: "Name 5",
        id: "67LuGThqIrcaM561s7cmc",
      },
    ],
  },
};
