import React from "react";
import { IDeckBreadcrumbItemProps } from "./deck-breadcrumb-item.types";
import CloseRounded from "@mui/icons-material/CloseRounded";
import Box from "@mui/joy/Box";
import { DeckLabel } from "../deck-label";
import { breadcrumbItemStyles } from "./deck-breadcrumb-item.styles";
import { DeckIconButton } from "../deck-icon-button";

export const DeckBreadcrumbItem: React.FC<IDeckBreadcrumbItemProps> = ({ item }) => {
  return (
    <Box
      sx={breadcrumbItemStyles}
      onClick={() => {
        if (item?.action) {
          item.action();
        }
      }}
    >
      <DeckLabel
        title={{
          text: item.title,
          limit: 1,
        }}
        size="xs"
      />
      <DeckIconButton
        rounded
        size="sm"
        icon={<CloseRounded />}
        onClick={() => {
          if (item?.onRemove) {
            item.onRemove();
          }
        }}
      />
    </Box>
  );
};
