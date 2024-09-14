import Box from "@mui/joy/Box";
import React from "react";
import { Subject } from "rxjs/internal/Subject";
import { takeUntil } from "rxjs/internal/operators/takeUntil";
import { DeckLottieLoading } from "../deck-lottie-loading";
import {
  alphabeticalViewContentClass,
  alphabeticalViewLoadingClass,
  alphabeticalViewNavButtonClass,
  alphabeticalViewNavButtonLetterClass,
  alphabeticalViewNavClass,
  alphabeticalViewNavInnerClass,
  alphabeticalViewSectionClass,
  alphabeticalViewSectionItemClass,
  alphabeticalViewSectionTitleClass,
  alphabeticalViewStyle,
} from "./deck-alphabetical-view.styles";
import {
  IAlphabeticalViewProps,
  IAlphabeticalViewState,
  IDeckAlphabeticalController,
} from "./deck-alphabetical-view.types";

export class DeckAlphabeticalView<T> extends React.Component<IAlphabeticalViewProps<T>, IAlphabeticalViewState> {
  private readonly _controller: IDeckAlphabeticalController;
  private _observer!: IntersectionObserver;
  private readonly _destroy$ = new Subject<void>();

  constructor(props: IAlphabeticalViewProps<T>) {
    super(props);
    if (!props.controller) {
      throw new Error("Controller is required");
    }
    this._controller = props.controller;
    this.state = {
      letters: this._controller.alphabet,
      activeLetter: "#",
    };
  }

  componentDidMount(): void {
    this._initObserver();
    const { type } = this.props;
    switch (type) {
      case "page": {
        this._controller.scrollSpy().pipe(takeUntil(this._destroy$)).subscribe();
        break;
      }
    }
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

  public reloadObserver(): void {
    this._removeObserver();
    this._initObserver();
  }

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
    const { items, itemTemplate, loaded, loading, emptyTemplate } = this.props;
    const { letters, activeLetter } = this.state;

    const entries = Object.entries(items);
    const navEntries = Object.entries(letters);

    const existingLetters = Object.keys(items);

    return (
      <Box sx={alphabeticalViewStyle}>
        <Box className={alphabeticalViewContentClass}>
          {!loaded && loading && (
            <Box className={alphabeticalViewLoadingClass}>
              <DeckLottieLoading />
            </Box>
          )}
          {loaded &&
            entries.map(([letter, group]) => {
              return (
                <React.Fragment key={letter}>
                  <Box className={alphabeticalViewSectionClass} data-id={letter}>
                    <Box className={alphabeticalViewSectionTitleClass}>{letters[letter as keyof typeof letters]}</Box>
                    <Box className={alphabeticalViewSectionItemClass}>
                      {group.map((item: any) => itemTemplate(item))}
                    </Box>
                  </Box>
                </React.Fragment>
              );
            })}
          {loaded && !entries.length && emptyTemplate}
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
