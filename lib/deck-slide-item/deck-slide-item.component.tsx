import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import React from "react";
import { DeckLabel } from "../deck-label";
import * as fromUtils from "../utils";
import {
  slideItemButtonStyle,
  slideItemContentStyle,
  slideItemImageStyle,
  slideItemStyle,
} from "./deck-slide-item.styles";
import { IDeckSlideItemProps } from "./deck-slide-item.types";

export const DeckSlideItem: React.FC<IDeckSlideItemProps> = ({ item, onInsert }) => {
  return (
    <React.Fragment>
      <Box sx={slideItemStyle}>
        <Box sx={slideItemImageStyle}>
          <img src={item?.previewImage} alt={item.name} />
        </Box>
        <Box sx={slideItemContentStyle}>
          <DeckLabel
            title={{
              text: item.name,
            }}
            description={{
              text: `Updated at ${fromUtils.formatDate(
                (item?.latestUpdateTime?._seconds ?? 0) * 1000 || new Date().getTime() / 1000
              )}`,
            }}
          />
          <Button size="sm" sx={slideItemButtonStyle} onClick={onInsert}>
            {"Insert".toUpperCase()}
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};
