import { Box } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";
import React, { useEffect, useMemo } from "react";

const containerStyle = {
  overflow: "hidden",
  position: "relative",
  width: "100%",
};

const gridStyle = (chunks: number, itemWidth: number, index: number, spacing: number): SxProps => ({
  display: "block",

  "--data-chunks": chunks,
  "--data-item-width": `${itemWidth}px`,
  "--spacing": `${spacing}px`,

  width: "calc(var(--data-item-width) * var(--data-chunks) + var(--spacing) * (var(--data-chunks) - 1))",
  transform: `translateX(calc(var(--data-item-width) * -${index} - var(--spacing) * ${index}))`,
  transition: "transform 0.3s ease",

  [` .deck-grid-carousel--column`]: {
    width: "attr(data-width px)",
    float: "left",
    display: "flex",
    flexDirection: "column",
    gap: "var(--spacing)",
  },

  [` .deck-grid-carousel--column:not(:first-child)`]: {
    marginLeft: "var(--spacing)",
  },
});

function* chunks<T>(arr: T[], n: number): Generator<T[], void> {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

interface DeckGridCarouselProps {
  items?: any[];
  columns?: number;
  rows?: number;
  spacing?: number;
  activeIndex?: number;
  itemTemplate: React.FC<any>;
}

export const DeckGridCarousel: React.FC<DeckGridCarouselProps> = ({
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  columns = 4,
  rows = 2,
  activeIndex = 0,
  spacing = 16,
  itemTemplate,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const [containerWidth, setContainerWidth] = React.useState(0);
  const [itemWidth, setItemWidth] = React.useState(0);

  const getContainerWidth = (htmlElement: HTMLDivElement | null) => {
    if (!htmlElement) {
      return 0;
    }
    return htmlElement.clientWidth;
  };

  const itemChunks = useMemo(() => {
    return [...chunks(items, rows)];
  }, [items, rows]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const containerWidth = getContainerWidth(containerRef.current);
    setContainerWidth(containerWidth);
  }, [containerRef.current]);

  useEffect(() => {
    const itemWidth = (containerWidth - (columns - 1) * spacing) / columns;
    setItemWidth(itemWidth);
  }, [containerWidth, columns, spacing]);

  const handleResize = () => {
    const containerWidth = getContainerWidth(containerRef.current);
    setContainerWidth(containerWidth);
  };

  return (
    <React.Fragment>
      <Box className="deck-grid-container" ref={containerRef} sx={containerStyle}>
        <Box className="deck-grid-carousel" sx={gridStyle(itemChunks.length, itemWidth, activeIndex, spacing)}>
          {itemChunks.map((chunk, index) => {
            return (
              <div key={index} className="deck-grid-carousel--column" data-width={itemWidth}>
                {chunk.map((item, index) => {
                  return (
                    <div key={index} className="deck-grid-carousel--item">
                      {itemTemplate({ item })}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </Box>
      </Box>
    </React.Fragment>
  );
};
