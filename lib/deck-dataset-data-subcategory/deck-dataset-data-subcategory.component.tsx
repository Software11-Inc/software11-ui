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
import { dataColumn, headerStyle } from "./deck-dataset-data-subcategory.styles";
import { DeckDatasetDataGroup } from "../deck-dataset-data-group/deck-dataset-data-group.component";
import { createGroupMap } from "../utils";
import { IDynamicShape, IShapeChange, ITableFigure } from "@models";

export const DeckDatasetDataSubcategory: React.FC<DeckDatasetDataSubcategoryProps> = ({
  groupName,
  items,
  type,
  shapes = {},
  apiChanges = {},
  userChanges = {},
  compact = false,
  level = 0,
  size = "sm",
  hasStatus = false,
  hasActions = false,
}) => {
  const groupClassName = "deck-dataset-data-subcategory";
  const [open, setOpen] = React.useState(false);

  const hasShapes = Object.keys(shapes).length > 0;
  const hasApiChanges = Object.keys(apiChanges).length > 0;
  const hasUserChanges = Object.keys(userChanges).length > 0;

  const status = hasShapes ? (hasUserChanges ? 2 : hasApiChanges ? 1 : 0) : -1;
  const color = hasUserChanges ? "danger" : hasApiChanges ? "warning" : "primary";
  const order = hasShapes ? (hasUserChanges ? -3 : hasApiChanges ? -2 : -1) : 0;

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

  return (
    <React.Fragment>
      <AccordionGroup
        className={groupClassName}
        sx={accordionGroupStyles(groupClassName, compact, level, size, !compact, order)}
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
            <Box sx={dataColumn(true)}>
              {entites.map(([subcategoryName, subcategoryItems]) => {
                const figureIDs = subcategoryItems.map((item: ITableFigure) => String(item?.id));
                const groupShapes = createGroupMap<IDynamicShape[]>(figureIDs, shapes);
                const groupApiChanges = createGroupMap<IShapeChange[]>(figureIDs, apiChanges);
                const groupUserChanges = createGroupMap<IShapeChange[]>(figureIDs, userChanges);
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
                    apiChanges={groupApiChanges}
                    userChanges={groupUserChanges}
                    shapes={groupShapes}
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
