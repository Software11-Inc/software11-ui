import React from "react";
import {
  IAlphabeticalViewProps,
  IAlphabeticalViewState,
  IDeckAlphabeticalController,
} from "./deck-alphabetical-view.types";
import Box from "@mui/joy/Box";
import {
  alphabeticalViewContentClass,
  alphabeticalViewNavButtonClass,
  alphabeticalViewNavButtonLetterClass,
  alphabeticalViewNavClass,
  alphabeticalViewNavInnerClass,
  alphabeticalViewSectionClass,
  alphabeticalViewSectionTitleClass,
  alphabeticalViewStyle,
} from "./deck-alphabetical-view.styles";

export class DeckAlphabeticalView extends React.Component<IAlphabeticalViewProps, IAlphabeticalViewState> {
  private readonly _controller: IDeckAlphabeticalController;

  constructor(props: IAlphabeticalViewProps) {
    super(props);
    if (!props.controller) {
      throw new Error("Controller is required");
    }
    this._controller = props.controller;
    this.state = {
      letters: this._controller.alphabet,
      activeLetter: "ANY",
    };
  }

  render(): React.ReactNode {
    const { items, itemTemplate } = this.props;
    const { letters, activeLetter } = this.state;

    const entries = Object.entries(items);
    const navEntries = Object.entries(letters);

    const existingLetters = Object.keys(items);

    return (
      <Box sx={alphabeticalViewStyle}>
        <Box className={alphabeticalViewContentClass}>
          {entries.map(([letter, group]) => {
            return (
              <React.Fragment key={letter}>
                <Box className={alphabeticalViewSectionClass} data-id={letter}>
                  <Box className={alphabeticalViewSectionTitleClass}>{letters[letter as keyof typeof letters]}</Box>
                </Box>
                <Box>{itemTemplate(group)}</Box>
              </React.Fragment>
            );
          })}
        </Box>
        <Box className={alphabeticalViewNavClass}>
          <Box className={alphabeticalViewNavInnerClass}>
            {navEntries.map(([key, letter]) => {
              const active = key === activeLetter;
              const activeClass = active ? "active" : "";
              const hasItems = existingLetters.includes(key);
              const disabledClass = hasItems ? "" : "disabled";
              return (
                <Box
                  key={key}
                  data-id={key}
                  className={[alphabeticalViewNavButtonClass, activeClass, disabledClass].join(" ").trim()}
                >
                  <Box className={alphabeticalViewNavButtonLetterClass}>{letter}</Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    );
  }
}
