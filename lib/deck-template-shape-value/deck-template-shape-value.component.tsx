import Box from "@mui/joy/Box";
import { IDeckTemplateShapeValue } from "./deck-template-shape-value.types";
import React from "react";
import { SxProps } from "@mui/joy/styles/types";

const mainBoxStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  p: 1,
  bgcolor: "var(--joy-palette-background-level1)",
  borderRadius: "var(--border-radius)",
  overflow: "hidden",
  fontSize: "12px",
  color: "primary.500",

  minHeight: "2rem",
  maxHeight: "10rem",
  overflowY: "auto",

  position: "relative",

  whiteSpace: "pre-wrap",
};

export const DeckTemplateShapeValue: React.FC<IDeckTemplateShapeValue> = ({ value, emptyValue }) => {
  const formattedValue = value.replace(/\u000b/g, "\n").replace(/\r/g, "\n");
  const isEmpty = !formattedValue.trim().length;

  return (
    <Box sx={mainBoxStyle} className="small-scroll">
      {!isEmpty ? formattedValue : emptyValue}
    </Box>
  );
};
