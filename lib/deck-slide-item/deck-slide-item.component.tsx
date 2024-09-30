import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import React from "react";
import { DeckLabel } from "../deck-label";
import {
  slideItemButtonStyle,
  slideItemContentStyle,
  slideItemImageStyle,
  slideItemOverlayStyle,
  slideItemStyle,
} from "./deck-slide-item.styles";
import { IDeckSlideItemProps, ItemState } from "./deck-slide-item.types";
import SyncRounded from "@mui/icons-material/SyncRounded";
import AddRounded from "@mui/icons-material/AddRounded";
import DoneAllRounded from "@mui/icons-material/DoneAllRounded";
import { ColorPaletteProp } from "@mui/joy";
import WarningRounded from "@mui/icons-material/WarningRounded";
import en from "javascript-time-ago/locale/en";
import TimeAgo from "javascript-time-ago";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

export const DeckSlideItem: React.FC<IDeckSlideItemProps> = ({
  item,
  onInsert,
  state = ItemState.DEFAULT,
  errorMessage,
}) => {
  let loading = false;
  let hasError = false;
  let buttonText = "Insert";
  let icon = <AddRounded sx={{ fontSize: "12px" }} />;
  let color: ColorPaletteProp = "primary";
  switch (state) {
    case ItemState.INSERTING: {
      loading = true;
      buttonText = "Loading";
      icon = <SyncRounded sx={{ fontSize: "12px", animation: "spin 1s linear infinite" }} />;
      break;
    }
    case ItemState.SUCCESS: {
      loading = false;
      buttonText = "Success";
      color = "success";
      icon = <DoneAllRounded sx={{ fontSize: "12px" }} />;
      break;
    }
    case ItemState.ERROR: {
      loading = false;
      buttonText = "Error";
      color = "danger";
      hasError = true;
      icon = <WarningRounded sx={{ fontSize: "12px" }} />;
      break;
    }
    default:
      break;
  }
  return (
    <React.Fragment>
      <Box sx={slideItemStyle}>
        <Box sx={slideItemImageStyle}>
          <img src={item?.previewImageURL || item?.storedFileURL} alt={item.name} loading="lazy" />
          <Box sx={slideItemOverlayStyle} className={[hasError ? "deck-error" : null].join(" ")}>
            <WarningRounded sx={{ color: "var(--joy-palette-danger-500)" }} />
            <DeckLabel
              title={{
                text: errorMessage?.message || "",
              }}
              description={{
                text: errorMessage?.detail || "",
              }}
              color="danger"
            />
          </Box>
        </Box>
        <Box sx={slideItemContentStyle}>
          <DeckLabel
            title={{
              text: item.name,
            }}
            description={{
              text: `Updated ${timeAgo.format(item?.lastUpdated?._seconds * 1000)}`,
            }}
          />
          <Button
            size="sm"
            color={color}
            sx={slideItemButtonStyle}
            onClick={onInsert}
            disabled={loading}
            startDecorator={icon}
          >
            {buttonText.toUpperCase()}
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};
