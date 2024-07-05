import { SxProps } from "@mui/joy/styles/types";

/** Class name for the deck file group item component */
export const fileGroupItemClass = "deck-file-group-item";

/**
 * Style for the header of the file group item.
 * It sets up a flex container with items aligned in a row and centered vertically.
 */
export const fileHeaderStyle: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 1,
};

/**
 * Style for the file icon within the file group item.
 * It centers the icon and sets a fixed width.
 */
export const fileIconStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1rem",
};

/**
 * Style for the data section of the file group item.
 * It arranges data in a column and applies padding.
 */
export const fileGroupDataStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  p: 1,
};
