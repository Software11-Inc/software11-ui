import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import WindowRounded from "@mui/icons-material/WindowRounded";
import Box from "@mui/joy/Box";
import React from "react";
import { DeckBreadcrumbItem } from "../deck-breadcrumb-item";
import { DeckIconButton } from "../deck-icon-button";
import { breadcrumbsStyles } from "./deck-breadcrumbs.styles";
import { IDeckBreadcrumbsProps } from "./deck-breadcrumbs.types";

export const DeckBreadcrumbs: React.FC<IDeckBreadcrumbsProps> = ({ breadcrumbs, onHomeClick }) => {
  return (
    <Box sx={breadcrumbsStyles}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <DeckIconButton icon={<WindowRounded />} onClick={onHomeClick} />
      </Box>
      <ChevronRightRounded
        sx={{
          mx: 0.5,
          fontSize: "1.25rem",
          fontWeight: "bold",
          color: "var(--joy-palette-primary-500)",
        }}
      />
      {breadcrumbs.map((item, index) => (
        <React.Fragment key={index}>
          {index !== 0 && (
            <ChevronRightRounded
              sx={{
                mx: 0.5,
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "var(--joy-palette-primary-500)",
              }}
            />
          )}
          <DeckBreadcrumbItem item={item} />
        </React.Fragment>
      ))}
    </Box>
  );
};
