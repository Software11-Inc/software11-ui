import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Box from "@mui/joy/Box";
import React from "react";
import { accordionGroupStyles, accordionTransition } from "../accordion.style";
import { DeckDatasetDataItem } from "../deck-dataset-data-item/deck-dataset-data-item.component";
import { DeckLabel } from "../deck-label";
import { DeckStatus } from "../deck-status";
import { headerStyle } from "./deck-dataset-data-group.styles";
import { DeckDatasetDataGroupProps } from "./deck-dataset-data-group.types";

export const DeckDatasetDataGroup: React.FC<DeckDatasetDataGroupProps> = ({
  groupName,
  items = [],
  type = "excel-table",
  hasActions = false,
  hasStatus = false,
  level = 0,
  compact = true,
  size = "sm",
  shapes = {},
  shapeApiChanges = {},
  shapeUserChanges = {},
  figureUserChanges = {},
  disabled = false,
  loading = false,
  figureLoadingIDs = [],
  hasSelectedShapes = false,
  hasMultipleSelectedShapes = false,
  hasSelectedFigureShapes = false,
  defaultStatus = -1,
  onAddShape,
  onResetShapes,
  onSyncShapes,
  onSettings,
  onSelectCell,
}) => {
  const groupClassName = "deck-dataset-data-group";
  const [open, setOpen] = React.useState(false);
  const hasShapes = Object.keys(shapes).length > 0 || defaultStatus === 0;
  const hasApiChanges = Object.keys(shapeApiChanges).length > 0 || Object.keys(figureUserChanges).length > 0;
  const hasUserChanges = Object.keys(shapeUserChanges).length > 0;
  const status = hasShapes ? (hasUserChanges ? 2 : hasApiChanges ? 1 : 0) : defaultStatus;
  const color = hasUserChanges ? "danger" : hasApiChanges ? "warning" : "primary";
  const order = hasShapes ? (hasUserChanges ? -3 : hasApiChanges ? -2 : -1) : 0;

  const isGroupLoading = items.some((item) => figureLoadingIDs.includes(String(item.id))) || loading;

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

  return (
    <React.Fragment>
      <AccordionGroup
        className={groupClassName}
        sx={accordionGroupStyles(groupClassName, compact, isGroupLoading ? level + 1 : level, size, !compact, order)}
        transition={accordionTransition}
      >
        <Accordion expanded={open}>
          <AccordionSummary slotProps={accordionSummarySlotProps}>
            <Box sx={headerStyle}>
              {hasStatus && <DeckStatus status={status} loading={isGroupLoading} />}
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
              const figureShapeApiChanges = shapeApiChanges[item.id] || [];
              const figureShapeUserChanges = shapeUserChanges[item.id] || [];
              const figureUserChange = figureUserChanges[item.id] || null;

              const ID = String(item.id);
              const apiShapeIDs = figureShapeApiChanges.map((change) => change.shapeID);
              const userShapeIDs = figureShapeUserChanges.map((change) => change.shapeID);

              const isLoading = figureLoadingIDs.includes(ID) || loading;

              const createHandler =
                (handler: any, ...args: any) =>
                () => {
                  if (typeof handler === "function") {
                    handler(...args);
                  }
                };

              return (
                <DeckDatasetDataItem
                  key={ID}
                  figure={item}
                  shapes={figureShapes}
                  shapeApiChanges={figureShapeApiChanges}
                  shapeUserChanges={figureShapeUserChanges}
                  figureUserChange={figureUserChange}
                  type={type}
                  compact={true}
                  {...{ hasActions, hasStatus, level: level + 1, size }}
                  loading={isLoading}
                  disabled={disabled}
                  onAdd={createHandler(onAddShape, ID)}
                  onReset={createHandler(onResetShapes, ID, userShapeIDs)}
                  onSync={createHandler(onSyncShapes, ID, apiShapeIDs)}
                  onSettings={createHandler(onSettings, item)}
                  onSelectCell={onSelectCell}
                  hasSelectedShapes={hasSelectedShapes}
                  hasMultipleSelectedShapes={hasMultipleSelectedShapes}
                  hasSelectedFigureShapes={hasSelectedFigureShapes}
                  defaultStatus={defaultStatus}
                />
              );
            })}
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </React.Fragment>
  );
};
