import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import { Box } from "@mui/joy";
import React, { useEffect, useLayoutEffect, useMemo } from "react";
import { DeckIconButton } from "../deck-icon-button";
import { DeckGridCarouselProps } from "./deck-grid-carousel.types";
import { containerStyle, gridStyle } from "./deck-grid-carousel.styles";

function* chunks<T>(arr: T[], n: number): Generator<T[], void> {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

export const DeckGridCarousel: React.FC<DeckGridCarouselProps> = ({
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  columns = 4,
  rows = 2,
  activeIndex = 0,
  spacing = 16,
  itemTemplate,
  showControls = true,
  header = null,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const [active, setActive] = React.useState(activeIndex);

  const [containerWidth, setContainerWidth] = React.useState(0);

  const [displayedItemsCount, setDisplayedItemsCount] = React.useState(0);

  const totalItemsCount = useMemo(() => items.length, [items]);

  useEffect(() => {
    if (activeIndex !== active) {
      setActive(activeIndex);
    }
  }, [activeIndex]);

  const [itemWidth, setItemWidth] = React.useState(0);

  const itemChunks = useMemo(() => {
    return [...chunks(items, rows)];
  }, [items, rows]);

  useLayoutEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        // Update width immediately after DOM updates
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    updateWidth();

    // Optional: Use ResizeObserver to track container size changes
    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const itemWidth = (containerWidth - (columns - 1) * spacing) / columns;
    setItemWidth(itemWidth);

    const displayedItemsCount = columns * rows;
    setDisplayedItemsCount(displayedItemsCount);
  }, [containerWidth, columns, rows, spacing]);

  const hasPrev = useMemo(() => active > 0, [active]);

  const hasNext = useMemo(() => {
    return rows * active + displayedItemsCount < totalItemsCount;
  }, [displayedItemsCount, rows, totalItemsCount, active]);

  const handlePrev = () => {
    if (hasPrev) {
      setActive(active - 1);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      setActive(active + 1);
    }
  };

  const startColIndex = useMemo(() => active, [active]);

  const endColIndex = useMemo(() => active + columns, [active, columns]);

  const ready = containerWidth > 0 && itemWidth > 0 && displayedItemsCount > 0;

  return (
    <React.Fragment>
      <Box className="deck-grid-container" ref={containerRef} sx={containerStyle}>
        {(header || showControls) && (
          <Box className="deck-grid-carousel--header">
            <Box className="deck-grid-carousel--title">{header}</Box>
            {showControls && (
              <Box className="deck-grid-carousel--controls">
                <DeckIconButton size="xs" icon={<ChevronLeftRounded />} disabled={!hasPrev} onClick={handlePrev} />
                <DeckIconButton size="xs" icon={<ChevronRightRounded />} disabled={!hasNext} onClick={handleNext} />
              </Box>
            )}
          </Box>
        )}
        {ready && (
          <Box className="deck-grid-carousel" sx={gridStyle(itemChunks.length, itemWidth, active, spacing)}>
            {itemChunks.map((chunk, index) => {
              const isHidden = index < startColIndex || index >= endColIndex;
              return (
                <div
                  key={index}
                  className={[`deck-grid-carousel--column`, isHidden ? "hidden" : ""].join(" ").trim()}
                  data-width={itemWidth}
                >
                  {chunk.map((item, index) => {
                    return (
                      <div key={index} className={[`deck-grid-carousel--item`, isHidden ? "hidden" : ""].join(" ")}>
                        {itemTemplate({ item, hidden: isHidden })}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </Box>
        )}
      </Box>
    </React.Fragment>
  );
};
