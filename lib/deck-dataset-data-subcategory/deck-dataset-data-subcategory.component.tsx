import React from "react";
import { DeckDatasetDataSubcategoryProps } from "./deck-dataset-data-subcategory.types";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionSummary from "@mui/joy/AccordionSummary";
import AccordionDetails from "@mui/joy/AccordionDetails";
import { accordionGroupStyles, accordionTransition } from "../accordion.style";
import Box from "@mui/joy/Box";
import { DeckLabel } from "../deck-label";
import { DeckStatus } from "../deck-status";
import { headerStyle } from "./deck-dataset-data-subcategory.styles";
import { DeckDatasetDataGroup } from "../deck-dataset-data-group/deck-dataset-data-group.component";

export const DeckDatasetDataSubcategory: React.FC<DeckDatasetDataSubcategoryProps> = ({
  groupName,
  items,
  type,
  compact = false,
  level = 0,
  size = "sm",
  hasStatus = false,
  hasActions = false,
}) => {
  const groupClassName = "deck-dataset-data-subcategory";
  const [open, setOpen] = React.useState(false);

  const color = "primary";
  const status = 0;

  const accordionSummarySlotProps = {
    button: {
      component: "div",
      onClick: (e: any) => {
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
  } as any;

  const entites = Object.entries(items || {});
  console.log(entites);
  return (
    <React.Fragment>
      <AccordionGroup
        className={groupClassName}
        sx={accordionGroupStyles(groupClassName, compact, level, size, !compact)}
        transition={accordionTransition}
      >
        <Accordion expanded={open}>
          <AccordionSummary slotProps={accordionSummarySlotProps}>
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
            <Box>
              {entites.map(([subcategoryName, subcategoryItems]) => {
                console.log(subcategoryName, subcategoryItems);
                return (
                  <DeckDatasetDataGroup
                    key={subcategoryName}
                    groupName={subcategoryName}
                    items={subcategoryItems}
                    type={type}
                    compact={true}
                    hasActions={hasActions}
                    hasStatus={hasStatus}
                    level={level + 1}
                    size={size}
                    apiChanges={{}}
                    userChanges={{}}
                    shapes={{}}
                    onAddShape={() => {}}
                    onResetShapes={() => {}}
                    onSyncShapes={() => {}}
                    onSettings={() => {}}
                  />
                );
              })}
            </Box>
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </React.Fragment>
  );
};
