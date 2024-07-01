import Box from "@mui/joy/Box";
import React from "react";
import { statusClassNameMap, statusStyle } from "./deck-status.styles";
import { DeckStatusProps } from "./deck-status.types";

export const DeckStatus: React.FC<DeckStatusProps> = ({ status, loading }) => {
  let className = "";
  try {
    className = statusClassNameMap[status ?? -1].state;
  } catch (error) {
    className = statusClassNameMap[-1].state;
    console.error(error);
  }
  const classes = `circle pulse ${className} ${loading ? "loading" : ""}`.trim();
  return (
    <Box className="state-status" sx={statusStyle}>
      <div className={classes}></div>
    </Box>
  );
};
