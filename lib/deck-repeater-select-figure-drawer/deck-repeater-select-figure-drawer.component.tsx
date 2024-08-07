import Box from "@mui/joy/Box";
import DialogActions, { dialogActionsClasses } from "@mui/joy/DialogActions";
import DialogContent from "@mui/joy/DialogContent";
import DialogTitle from "@mui/joy/DialogTitle";
import Divider from "@mui/joy/Divider";
import Drawer from "@mui/joy/Drawer";
import ModalClose from "@mui/joy/ModalClose";
import React from "react";
import { DeckLabel } from "../deck-label";
import { DeckLottieSelect } from "../deck-lottie-select";
import { DeckTextButton } from "../deck-text-button";
import { IDeckRepeaterSelectFigureDrawerProps } from "./deck-repeater-select-figure-drawer.types";
import { itemStyle } from "./deck-repeater-select-figure.drawer.styles";

export const DeckRepeaterSelectFigureDrawer: React.FC<IDeckRepeaterSelectFigureDrawerProps> = ({
  figures = [],
  selected = null,
  open = false,
  onClose = () => {},
  onSelect = () => {},
}) => {
  const drawerSlotProps = {
    root: {
      sx: {
        [`& .${dialogActionsClasses.root}`]: {
          p: 1,
          bgcolor: "background.body",
          borderTop: "1px solid var(--joy-palette-divider)",
        },
      },
    },
    content: {
      sx: {
        height: "90vh",
        borderRadius: "var(--border-radius) var(--border-radius) 0 0",
      },
    },
  };

  const isSelected = (ID?: string) => Boolean(ID) && Boolean(selected) && ID === selected;

  return (
    <Drawer open={open} onClose={onClose} anchor="bottom" size="sm" slotProps={drawerSlotProps}>
      <DialogTitle sx={{ p: 1, pr: 4 }}>
        <DeckLabel
          title={{
            text: "Select figure",
          }}
          description={{
            text: "Value will be applied to filter",
          }}
        />
      </DialogTitle>
      <ModalClose
        color="primary"
        sx={{
          right: "1rem",
          top: "1.25rem",
        }}
      />
      <Divider sx={{ bgcolor: "var(--joy-palette-divider)" }} />
      <DialogContent className="small-scroll">
        {figures.map((item) => (
          <Box key={item.id} sx={itemStyle} onClick={() => onSelect(item)}>
            <Box sx={{ display: "flex", height: "2rem" }}>
              <DeckLottieSelect active={isSelected(item.id)} />
            </Box>
            <DeckLabel
              title={{ text: item?.figure?.value ?? item?.figure?.cell ?? "" }}
              description={{ text: `${item?.name?.value ?? item?.name?.cell ?? ""}` }}
              size="sm"
            />
          </Box>
        ))}
      </DialogContent>
      <DialogActions>
        <DeckTextButton action={onClose} text="Close" />
      </DialogActions>
    </Drawer>
  );
};
