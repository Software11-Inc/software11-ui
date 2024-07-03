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
  alphabeticalViewSearchClass,
  alphabeticalViewSectionClass,
  alphabeticalViewSectionItemClass,
  alphabeticalViewSectionTitleClass,
  alphabeticalViewStyle,
} from "./deck-alphabetical-view.styles";
import { Subject } from "rxjs/internal/Subject";
import { DeckSearchBar } from "../deck-search-bar";

export class DeckAlphabeticalView extends React.Component<IAlphabeticalViewProps, IAlphabeticalViewState> {
  private readonly _controller: IDeckAlphabeticalController;
  private _observer!: IntersectionObserver;
  private readonly _destroy$ = new Subject<void>();

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

  componentDidMount(): void {
    this._initObserver();
  }

  componentWillUnmount(): void {
    this._removeObserver();
    this._destroy$.next();
    this._destroy$.complete();
  }

  private _handleObserver = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.isIntersecting) {
          const key = (entry.target as any).dataset.id;
          this.setState({
            activeLetter: key,
          });
        }
      }
    });
  };

  private _initObserver(): void {
    let options = {
      threshold: 1,
      rootMargin: "0px",
    };
    this._observer = new IntersectionObserver(this._handleObserver, options);

    const sections = document.querySelectorAll(`.${alphabeticalViewSectionClass}`);
    sections.forEach((section) => {
      this._observer.observe(section);
    });
  }

  private _removeObserver(): void {
    this._observer.disconnect();
  }

  private _scrollToLetter = (letter: string): void => {
    const letters = Object.keys(this.state.letters);
    if (!letter || !letters.includes(letter)) {
      return;
    }
    const section = document.querySelector(`.${alphabeticalViewSectionClass}[data-id="${letter}"]`);
    if (!section) {
      return;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  render(): React.ReactNode {
    const { items, itemTemplate, hasSearch, onSearch } = this.props;
    const { letters, activeLetter } = this.state;

    const entries = Object.entries(items);
    const navEntries = Object.entries(letters);

    const existingLetters = Object.keys(items);

    return (
      <Box sx={alphabeticalViewStyle}>
        <Box className={alphabeticalViewContentClass}>
          {hasSearch && (
            <Box className={alphabeticalViewSearchClass}>
              <DeckSearchBar onSearch={onSearch} />
            </Box>
          )}

          {entries.map(([letter, group]) => {
            return (
              <React.Fragment key={letter}>
                <Box className={alphabeticalViewSectionClass} data-id={letter}>
                  <Box className={alphabeticalViewSectionTitleClass}>{letters[letter as keyof typeof letters]}</Box>
                  <Box className={alphabeticalViewSectionItemClass}>{group.map((item: any) => itemTemplate(item))}</Box>
                </Box>
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
                  onMouseEnter={() => this._scrollToLetter(key)}
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
