import Box from "@mui/joy/Box";
import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import FilterListRounded from "@mui/icons-material/FilterListRounded";
import { mainBoxStyle, valueBoxStyle, valueTextBoxStyle } from "./deck-template-shape-itterator.style";
import { IDeckTemplateShapeItterator } from "./deck-template-shape-itterator.types";
import React from "react";
import IconButton from "@mui/joy/IconButton";

export const DeckTemplateShapeItterator: React.FC<IDeckTemplateShapeItterator> = ({
  groupName,
  emptyGroupName = "Group name not defined",
  onPrevious = () => {},
  onNext = () => {},
  onOpenFilter = () => {},
}) => {
  return (
    <Box sx={mainBoxStyle}>
      <Box sx={valueBoxStyle}>
        <Box sx={valueTextBoxStyle}>{groupName || emptyGroupName}</Box>
      </Box>
      <Box>
        <IconButton size="sm" onClick={onPrevious}>
          <ChevronLeftRounded />
        </IconButton>
        <IconButton size="sm" onClick={onOpenFilter}>
          <FilterListRounded />
        </IconButton>
        <IconButton size="sm" onClick={onNext}>
          <ChevronRightRounded />
        </IconButton>
      </Box>
    </Box>
  );
};
