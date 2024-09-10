import Box from "@mui/joy/Box";
import { DeckBreadcrumbItem } from "../deck-breadcrumb-item";
import { IDeckBreadcrumbsProps } from "./deck-breadcrumbs.types";
import { breadcrumbsStyles } from "./deck-breadcrumbs.styles";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import React from "react";

export const DeckBreadcrumbs: React.FC<IDeckBreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <Box sx={breadcrumbsStyles}>
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
