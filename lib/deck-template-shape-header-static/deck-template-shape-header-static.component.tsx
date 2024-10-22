import Box from "@mui/joy/Box";
import { IDeckTemplateShapeHeaderStatic } from "./deck-template-shape-header-static.types";
import React from "react";
import Typography from "@mui/joy/Typography";
import {
  boxStyle,
  emptyTypographySlotProps,
  typographySlotProps,
  valueTypographySlotProps,
} from "./deck-template-shape-header-static.styles";

export const DeckTemplateShapeHeaderStatic: React.FC<IDeckTemplateShapeHeaderStatic> = ({
  prefix = "Placeholder",
  separator = "•",
  value = "",
  hasShape = false,
  emptyValue = "Shape not found on slide",
}) => {
  if (hasShape) {
    return (
      <React.Fragment>
        <Box sx={boxStyle}>
          <Typography slotProps={typographySlotProps}>{prefix}</Typography>
          <Typography slotProps={typographySlotProps}>{separator}</Typography>
          <Typography slotProps={valueTypographySlotProps}>{value}</Typography>
        </Box>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Box sx={boxStyle}>
        <Typography slotProps={emptyTypographySlotProps}>{emptyValue}</Typography>
      </Box>
    </React.Fragment>
  );
};
