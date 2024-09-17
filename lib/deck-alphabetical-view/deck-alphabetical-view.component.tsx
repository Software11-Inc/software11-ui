import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState, useCallback } from "react";
import Box from "@mui/joy/Box";
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
import { DeckAlphabeticalViewHandle, IAlphabeticalViewProps, defaultLetters } from "./deck-alphabetical-view.types";

function DeckAlphabeticalViewComponent<T>(
  props: IAlphabeticalViewProps<T>,
  ref: React.Ref<DeckAlphabeticalViewHandle>
) {
  const { items, itemTemplate, loaded, loading, emptyTemplate } = props;

  const letters = defaultLetters;
  const [activeLetter, setActiveLetter] = useState<string>("#");
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Use useCallback to memoize the function
  const updateHeights = useCallback(() => {
    const subheaderElements = document.querySelectorAll(".page-content .deck-sticky");
    let subheadersHeight = 0;
    subheaderElements.forEach((el) => {
      subheadersHeight += el.getBoundingClientRect().height;
    });

    // Update CSS variable for subheaders height
    document.documentElement.style.setProperty("--subheaders-height", `${subheadersHeight}px`);

    // Calculate footer height
    const footerElement = document.querySelector(".page-content .deck-footer");
    const footerHeight = footerElement ? footerElement.getBoundingClientRect().height : 0;

    // Update CSS variable for footer height
    document.documentElement.style.setProperty("--footer-height", `${footerHeight}px`);
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      updateHeights,
    }),
    [updateHeights]
  );

  useEffect(() => {
    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => {
      window.removeEventListener("resize", updateHeights);
    };
  }, [updateHeights]);

  useEffect(() => {
    const options = {
      threshold: 1,
      rootMargin: "0px",
    };

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const key = (entry.target as HTMLElement).dataset.id;
          if (key) {
            setActiveLetter(key);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, options);
    observerRef.current = observer;

    const sections = document.querySelectorAll(`.${alphabeticalViewSectionClass}`);
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [items]);

  // Memoize scrollToLetter to prevent unnecessary re-renders
  const scrollToLetter = useCallback(
    (letter: string) => {
      const letterKeys = Object.keys(letters);
      if (!letter || !letterKeys.includes(letter)) {
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
    },
    [letters]
  );

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
          entries.map(([letter, group]) => (
            <Box key={letter} className={alphabeticalViewSectionClass} data-id={letter}>
              <Box className={alphabeticalViewSectionTitleClass}>{letters[letter]}</Box>
              <Box className={alphabeticalViewSectionItemClass}>{group.map((item: T) => itemTemplate(item))}</Box>
            </Box>
          ))}
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
                onClick={() => scrollToLetter(key)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    scrollToLetter(key);
                  }
                }}
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

type DeckAlphabeticalViewType = <T>(
  props: IAlphabeticalViewProps<T> & {
    ref?: React.Ref<DeckAlphabeticalViewHandle>;
  }
) => React.ReactElement | null;

export const DeckAlphabeticalView = forwardRef(DeckAlphabeticalViewComponent) as DeckAlphabeticalViewType;
