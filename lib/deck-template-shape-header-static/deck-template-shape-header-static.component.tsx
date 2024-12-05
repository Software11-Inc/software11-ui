import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import React from "react";
import {
  boxStyle,
  emptyTypographySlotProps,
  typographySlotProps,
  valueTypographySlotProps,
} from "./deck-template-shape-header-static.styles";
import { IDeckTemplateShapeHeaderStatic } from "./deck-template-shape-header-static.types";

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
