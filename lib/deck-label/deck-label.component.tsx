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
  const hasTitle = title?.text || title?.component;
  const hasDescription = description?.text || description?.component;
  return (
    <Box className={className} sx={deckLabelStyle(color, size, order, mt, gap, italic)}>
      {hasTitle && (
        <Box className={`${className}__title`} sx={textStyle(title.limit, true)}>
          {title?.component ? (
            <Box className={`${className}__component`}>{title.component}</Box>
          ) : (
            <span>{title.text}</span>
          )}
          {required && <span className="deck-required">*</span>}
        </Box>
      )}
      {Boolean(separator) && <Box className={`${className}__separator`}>{separator}</Box>}
      {hasDescription && (
        <Box className={`${className}__description`} sx={textStyle(description.limit, description?.bold)}>
          {description?.component ? (
            <Box className={`${className}__component`}>{description.component}</Box>
          ) : (
            <span>{description.text}</span>
          )}
        </Box>
      )}
    </Box>
  );
};
