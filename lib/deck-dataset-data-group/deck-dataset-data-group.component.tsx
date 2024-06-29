import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Box from "@mui/joy/Box";
import React from "react";
import { accordionGroupStyles } from "../accordion.style";
import { DeckDatasetDataItem } from "../deck-dataset-data-item/deck-dataset-data-item.component";
import { DeckLabel } from "../deck-label";
import { DeckStatus } from "../deck-status";
import { headerStyle } from "./deck-dataset-data-group.styles";
import { DeckDatasetDataGroupProps } from "./deck-dataset-data-group.types";

export const DeckDatasetDataGroup: React.FC<DeckDatasetDataGroupProps> = ({
  groupName,
  items,
  type,
  hasActions,
  hasStatus,
  level = 0,
  compact = true,
  size = "sm",
  shapes = {},
  apiChanges = {},
  userChanges = {},
}) => {
  const groupClassName = "deck-dataset-data-group";
  const [open, setOpen] = React.useState(false);
  const hasApiChanges = Object.keys(apiChanges).length > 0;
  const hasUserChanges = Object.keys(userChanges).length > 0;
  const status = hasUserChanges ? 2 : hasApiChanges ? 1 : 0;
  const color = hasUserChanges ? "danger" : hasApiChanges ? "warning" : "primary";
  return (
    <React.Fragment>
      <AccordionGroup
        className={groupClassName}
        sx={accordionGroupStyles(groupClassName, compact, level, size, !compact)}
        transition={{
          initial: "0.3s ease-out",
          expanded: "0.2s ease",
        }}
      >
        <Accordion expanded={open}>
          <AccordionSummary
            slotProps={{
              button: {
                component: "div",
                onClick: (e) => {
                  const target = e.target as HTMLElement;
                  if (target.classList.contains("MuiSvgIcon-root")) {
                    return;
                  }
                  setOpen(!open);
                },
              },
              indicator: {
                onClick: () => setOpen(!open),
              },
            }}
          >
            <Box sx={headerStyle}>
              {hasStatus && <DeckStatus status={status} />}
              <DeckLabel
                title={{
                  text: groupName,
                }}
                color={color}
                size={size}
              />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {items.map((item) => {
              if (!item || !item?.id) return null;
              const figureShapes = shapes[item.id] || [];
              const figureApiChanges = apiChanges[item.id] || [];
              const figureUserChanges = userChanges[item.id] || [];

              return (
                <DeckDatasetDataItem
                  key={item.id}
                  figure={item}
                  shapes={figureShapes}
                  apiChanges={figureApiChanges}
                  userChanges={figureUserChanges}
                  type={type}
                  compact={true}
                  {...{ hasActions, hasStatus, level: level + 1, size }}
                />
              );
            })}
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </React.Fragment>
  );
};
