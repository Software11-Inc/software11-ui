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
  gap,
  required,
  separator,
  italic,
}) => {
  return (
    <Box className={className} sx={deckLabelStyle(color, size, order, mt, gap, italic)}>
      {title?.text && (
        <Box className={`${className}__title`} sx={textStyle(title.limit, true)}>
          <span>{title.text}</span>
          {required && <span className="deck-required">*</span>}
        </Box>
      )}
      {Boolean(separator) && <Box className={`${className}__separator`}>{separator}</Box>}
      {description?.text && (
        <Box className={`${className}__description`} sx={textStyle(description.limit, description?.bold)}>
          <span>{description.text}</span>
        </Box>
      )}
    </Box>
  );
};
