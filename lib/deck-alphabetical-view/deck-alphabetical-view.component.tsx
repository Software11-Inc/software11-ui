import Box from "@mui/joy/Box";
import { debounce } from "lodash";
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
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
  const { items, itemTemplate, type, loaded, loading, emptyTemplate } = props;

  const letters = defaultLetters;
  const [activeLetter, setActiveLetter] = useState<string>("#");
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Use useCallback to memoize the function
  const updateHeights = useCallback(() => {
    switch (type) {
      case "page": {
        // Select subheader elements for "page" mode
        const subheaderElements = document.querySelectorAll(".page-section.deck-sticky");
        let subheadersHeight = 0;
        subheaderElements.forEach((el) => {
          subheadersHeight += el.getBoundingClientRect().height;
        });

        // Update CSS variable for subheaders height
        document.documentElement.style.setProperty("--subheaders-height", `${subheadersHeight}px`);

        // Calculate footer height for "page" mode
        const footerElement = document.querySelector(".deck-footer");
        const footerHeight = footerElement ? footerElement.getBoundingClientRect().height : 0;

        // Update CSS variable for footer height
        document.documentElement.style.setProperty("--footer-height", `${footerHeight}px`);
        break;
      }
      case "drawer": {
        // Select subheader elements for "drawer" mode inside ".MuiDrawer-root"
        const drawerElement = document.querySelector(".MuiDrawer-root");
        if (drawerElement) {
          const subheaderElements = drawerElement.querySelectorAll(".page-section.deck-sticky");
          let subheadersHeight = 0;
          subheaderElements.forEach((el) => {
            subheadersHeight += el.getBoundingClientRect().height;
          });

          // Update CSS variable for subheaders height in drawer mode
          document.documentElement.style.setProperty("--subheaders-height", `${subheadersHeight}px`);

          // Calculate footer height for "drawer" mode inside ".MuiDrawer-root"
          const footerElement = drawerElement.querySelector(".deck-footer");
          const footerHeight = footerElement ? footerElement.getBoundingClientRect().height : 0;

          // Update CSS variable for footer height in drawer mode
          document.documentElement.style.setProperty("--footer-height", `${footerHeight}px`);
        }
        break;
      }
      default: {
        break;
      }
    }
  }, [type]);

  useImperativeHandle(
    ref,
    () => ({
      updateHeights,
    }),
    [updateHeights]
  );

  useEffect(() => {
    const debouncedUpdateHeights = debounce(updateHeights, 100);
    window.addEventListener("resize", debouncedUpdateHeights);
    debouncedUpdateHeights();
    return () => {
      window.removeEventListener("resize", debouncedUpdateHeights);
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
                onMouseEnter={() => scrollToLetter(key)}
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
