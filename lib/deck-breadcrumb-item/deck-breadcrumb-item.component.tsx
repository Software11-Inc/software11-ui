import Box from "@mui/joy/Box";
import React from "react";
import { DeckLabel } from "../deck-label";
import { breadcrumbItemStyles } from "./deck-breadcrumb-item.styles";
import { IDeckBreadcrumbItemProps } from "./deck-breadcrumb-item.types";
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
    </Box>
  );
};
