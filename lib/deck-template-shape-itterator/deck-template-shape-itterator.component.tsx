import Box from "@mui/joy/Box";
import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import FilterListRounded from "@mui/icons-material/FilterListRounded";
import { mainBoxStyle, valueBoxStyle, valueTextBoxStyle } from "./deck-template-shape-itterator.style";
import { IDeckTemplateShapeItterator } from "./deck-template-shape-itterator.types";
import React from "react";
import { DeckIconButton } from "../deck-icon-button";

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
      <Box sx={mainBoxStyle}>
        <DeckIconButton size="md" onClick={onPrevious} icon={<ChevronLeftRounded />}></DeckIconButton>
        <DeckIconButton size="md" onClick={onOpenFilter} icon={<FilterListRounded />}></DeckIconButton>
        <DeckIconButton size="md" onClick={onNext} icon={<ChevronRightRounded />}></DeckIconButton>
      </Box>
    </Box>
  );
};
