import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import FilterListRounded from "@mui/icons-material/FilterListRounded";
import Box from "@mui/joy/Box";
import React from "react";
import { DeckIconButton } from "../deck-icon-button";
import { DeckLabel } from "../deck-label";
import { mainBoxStyle, valueBoxStyle } from "./deck-template-shape-itterator.style";
import { IDeckTemplateShapeItterator } from "./deck-template-shape-itterator.types";

export const DeckTemplateShapeItterator: React.FC<IDeckTemplateShapeItterator> = ({
  groupName,
  emptyGroupName = "Group name not defined",
  hint = "",
  onPrevious = () => {},
  onNext = () => {},
  onOpenFilter,
}) => {
  return (
    <Box sx={mainBoxStyle}>
      <Box sx={valueBoxStyle}>
        <DeckLabel
          title={{
            text: groupName || emptyGroupName,
            limit: 1,
          }}
          description={{
            text: hint,
            limit: 1,
          }}
        />
      </Box>
      <Box sx={mainBoxStyle}>
        <DeckIconButton size="md" onClick={onPrevious} icon={<ChevronLeftRounded />}></DeckIconButton>
        {onOpenFilter && (
          <DeckIconButton size="md" onClick={onOpenFilter} icon={<FilterListRounded />}></DeckIconButton>
        )}
        <DeckIconButton size="md" onClick={onNext} icon={<ChevronRightRounded />}></DeckIconButton>
      </Box>
    </Box>
  );
};
