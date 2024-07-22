import React from "react";
import Drawer from "@mui/joy/Drawer";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogActions, { dialogActionsClasses } from "@mui/joy/DialogActions";
import ModalClose from "@mui/joy/ModalClose";
import { IDeckRepeaterSelectFigureDrawerProps } from "./deck-repeater-select-figure-drawer.types";
import { DeckLabel } from "../deck-label";
import DialogContent from "@mui/joy/DialogContent";
import Box from "@mui/joy/Box";
import { itemStyle } from "./deck-repeater-select-figure.drawer.styles";
import { DeckLottieSelect } from "../deck-lottie-select";
import { DeckIconButton } from "../deck-icon-button";
import Divider from "@mui/joy/Divider";
import { DeckTextButton } from "../deck-text-button";
import { ITableFigure } from "../models/figure.model";

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
        {figures.map((figure) => (
          <Box key={figure.id} sx={itemStyle} onClick={() => onSelect(figure)}>
            <Box sx={{ display: "flex", height: "2rem" }}>
              <DeckLottieSelect active={isSelected(figure.id)} />
            </Box>
            <DeckLabel
              title={{ text: figure?.figure?.value ?? figure?.figure?.cell ?? "" }}
              description={{ text: `${figure?.figure?.cell}` }}
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
