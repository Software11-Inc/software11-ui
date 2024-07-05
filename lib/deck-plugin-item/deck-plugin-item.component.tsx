import Box from "@mui/joy/Box";
import { IDeckPluginItemProps } from "./deck-plugin-item.types";
import React from "react";
import { DeckLabel } from "../deck-label";
import {
  descriptionStyle,
  nameStyle,
  pluginItemContentStyles,
  pluginItemImageStyles,
  pluginItemStyles,
  pluginItemTagContentStyles,
  pluginItemTagStyles,
  pluginItemTagTextStyles,
} from "./deck-plugin-item.styles";
import Button from "@mui/joy/Button";

export const DeckPluginItem: React.FC<IDeckPluginItemProps> = ({ plugin, active, onToggle, onOpen }) => {
  return (
    <Box sx={pluginItemStyles}>
      <Box sx={pluginItemImageStyles} onClick={onOpen}>
        <img src={plugin.logoSrc} alt={plugin.name} />
      </Box>
      <Box sx={pluginItemContentStyles}>
        <Box sx={nameStyle} onClick={onOpen}>
          {plugin.name}
        </Box>
        <Box sx={descriptionStyle}>{plugin.description}</Box>
        <Button
          size="sm"
          color={active ? "danger" : "success"}
          sx={{
            padding: "0.2rem 0.3rem",
            minHeight: "unset",
            fontSize: "10px",
            borderRadius: "calc(var(--border-radius) / 2)",
            textTransform: "uppercase",
          }}
          onClick={onToggle}
        >
          {active ? "Deactivate" : "Activate"}
        </Button>
      </Box>
      {plugin?.isRecommended && (
        <Box sx={pluginItemTagStyles}>
          <Box sx={pluginItemTagContentStyles}>
            <Box sx={pluginItemTagTextStyles}>🔥HOT</Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
