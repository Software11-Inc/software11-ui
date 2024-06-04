import Box from "@mui/joy/Box";
import React from "react";
import { className, deckLabelStyle, textStyle } from "./deck-label.styles";
import { DeckLabelProps } from "./deck-label.types";

export const DeckLabel: React.FC<DeckLabelProps> = ({
  title,
  description,
  color,
  size,
  order,
  mt,
}) => {
  return (
    <Box className={className} sx={deckLabelStyle(color, size, order, mt)}>
      {title?.text && (
        <Box className={`${className}__title`} sx={textStyle(title.limit)}>
          <span>{title.text}</span>
        </Box>
      )}
      {description?.text && (
        <Box
          className={`${className}__description`}
          sx={textStyle(description.limit)}
        >
          <span>{description.text}</span>
        </Box>
      )}
    </Box>
  );
};
