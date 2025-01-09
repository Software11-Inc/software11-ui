import AddRounded from "@mui/icons-material/AddRounded";
import AirplayRounded from "@mui/icons-material/AirplayRounded";
import DoneAllRounded from "@mui/icons-material/DoneAllRounded";
import MoreVertRounded from "@mui/icons-material/MoreVertRounded";
import MoveUpRounded from "@mui/icons-material/MoveUpRounded";
import SyncRounded from "@mui/icons-material/SyncRounded";
import WarningRounded from "@mui/icons-material/WarningRounded";
import Box from "@mui/joy/Box";
import Dropdown from "@mui/joy/Dropdown";
import LinearProgress from "@mui/joy/LinearProgress";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem, { menuItemClasses } from "@mui/joy/MenuItem";
import { svgIconClasses } from "@mui/joy/SvgIcon";
import { ColorPaletteProp } from "@mui/joy/styles";
import React from "react";
import { DeckIconButton } from "../deck-icon-button";
import { DeckLabel } from "../deck-label";
import {
  slideItemContentStyle,
  slideItemImageStyle,
  slideItemOverlayStyle,
  slideItemStyle,
} from "./deck-slide-item.styles";
import { IDeckSlideItemProps, ItemState } from "./deck-slide-item.types";

const menuStyle = {
  border: "unset",
  boxShadow: "var(--focus-shadow)",
  p: 0,
  maxWidth: "75vw",

  [`& .${menuItemClasses.root}`]: {
    px: 1,
    [`& .${svgIconClasses.root}`]: {
      opacity: 0.5,
      fontSize: "16px",
    },
  },
  [`& .${menuItemClasses.root}:hover`]: {
    [`& .${svgIconClasses.root}`]: {
      opacity: 1,
    },
  },
  [`& .${menuItemClasses.root}.Mui-disabled`]: {
    opacity: 0.5,
  },
};

const popperOptions = {
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [8, 8],
      },
    },
  ],
  placement: "bottom-end",
} as any;

export const DeckSlideItem: React.FC<IDeckSlideItemProps> = ({
  state = ItemState.DEFAULT,
  errorMessage,
  title,
  description,
  previewImage,
  onImageClick = () => {},
  onOpen = () => {},
  onUpgrade = () => {},
  buttonText = "Insert",
  loadingText = "Loading...",
  successText = "Slide inserted successfully",
  menuItems = [],
}) => {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const {
    loading,
    hasError,
    disabled,
    buttonText: computedText,
  } = React.useMemo(() => {
    return getDeckSlideState({
      state,
      buttonText,
      loadingText,
      successText,
      errorMessage,
    });
  }, [state, loadingText, successText, errorMessage]);

  return (
    <React.Fragment>
      <Box sx={slideItemStyle}>
        <Box sx={slideItemImageStyle} onClick={onImageClick} className={disabled ? "deck-disabled" : ""}>
          <img src={previewImage} loading="lazy" alt={title?.text || ""} />
          <Box sx={slideItemOverlayStyle} className={hasError ? "deck-error" : ""}>
            <WarningRounded sx={{ color: "var(--joy-palette-danger-500)" }} />
            <DeckLabel
              title={{ text: errorMessage?.message || "" }}
              description={{ text: errorMessage?.detail || "" }}
              color="danger"
            />
          </Box>
          <Box className="deck-insert-button">
            <span className="deck-insert-button-text">{computedText}</span>
          </Box>
        </Box>

        <Box sx={slideItemContentStyle}>
          {loading && (
            <Box className="page-loading" sx={{ ml: "-0.5rem" }}>
              <LinearProgress sx={{ height: "2px" }} />
            </Box>
          )}
          <DeckLabel title={title} description={description} />
          <Dropdown open={open}>
            <MenuButton
              slots={{
                root: DeckIconButton,
              }}
              slotProps={{
                root: {
                  icon: <MoreVertRounded />,
                  variant: "plain",
                  size: "sm",
                  onClick: toggleOpen,
                } as any,
              }}
            />
            <Menu
              size="sm"
              color="primary"
              onMouseLeave={() => setOpen(false)}
              popperOptions={popperOptions}
              sx={menuStyle}
            >
              {menuItems.map((item, index) => (
                <MenuItem key={index} onClick={item.onClick} disabled={item.disabled}>
                  {item.icon}
                  <DeckLabel size="sm" title={item.title} description={item.description} gap={-0.5} />
                </MenuItem>
              ))}
            </Menu>
          </Dropdown>
        </Box>
      </Box>
    </React.Fragment>
  );
};

function getDeckSlideState({
  state,
  buttonText,
  loadingText,
  successText,
  errorMessage,
}: {
  state: ItemState;
  buttonText?: string;
  loadingText?: string;
  successText?: string;
  errorMessage?: { message?: string; detail?: string };
}) {
  switch (state) {
    case ItemState.INSERTING:
      return {
        loading: true,
        hasError: false,
        disabled: true,
        buttonText: loadingText ?? "Loading...",
        icon: <SyncRounded sx={{ fontSize: "12px", animation: "spin 1s linear infinite" }} />,
        color: "primary" as ColorPaletteProp,
      };
    case ItemState.SUCCESS:
      return {
        loading: false,
        hasError: false,
        disabled: true,
        buttonText: successText ?? "Slide inserted successfully",
        icon: <DoneAllRounded sx={{ fontSize: "12px" }} />,
        color: "success" as ColorPaletteProp,
      };
    case ItemState.ERROR:
      return {
        loading: false,
        hasError: true,
        disabled: true,
        buttonText: errorMessage?.message || "Error",
        icon: <WarningRounded sx={{ fontSize: "12px" }} />,
        color: "danger" as ColorPaletteProp,
      };
    default:
      return {
        loading: false,
        hasError: false,
        disabled: false,
        buttonText: buttonText ?? "Insert",
        icon: <AddRounded sx={{ fontSize: "12px" }} />,
        color: "primary" as ColorPaletteProp,
      };
  }
}
