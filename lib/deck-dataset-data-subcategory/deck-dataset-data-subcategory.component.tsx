import { IDynamicShape, IShapeChange, ITableFigure } from "@models";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Box from "@mui/joy/Box";
import React from "react";
import { accordionGroupStyles, accordionTransition } from "../accordion.style";
import { DeckDatasetDataGroup } from "../deck-dataset-data-group/deck-dataset-data-group.component";
import { DeckLabel } from "../deck-label";
import { DeckStatus } from "../deck-status";
import { createGroupMap } from "../utils";
import { dataColumn, headerStyle } from "./deck-dataset-data-subcategory.styles";
import { DeckDatasetDataSubcategoryProps } from "./deck-dataset-data-subcategory.types";

export const DeckDatasetDataSubcategory: React.FC<DeckDatasetDataSubcategoryProps> = ({
  groupName,
  items = {},
  type = "excel-matrix",
  shapes = {},
  shapeApiChanges = {},
  shapeUserChanges = {},
  figureLoadingIDs = [],
  compact = false,
  level = 0,
  size = "sm",
  hasStatus = false,
  hasActions = false,
  disabled = false,
  loading = false,
  defaultStatus = -1,
  onAddShape = () => {},
  onResetShapes = () => {},
  onSettings = () => {},
  onSyncShapes = () => {},
}) => {
  const groupClassName = "deck-dataset-data-subcategory";
  const [open, setOpen] = React.useState(false);

  const hasShapes = Object.keys(shapes).length > 0;
  const hasApiChanges = Object.keys(shapeApiChanges).length > 0;
  const hasUserChanges = Object.keys(shapeUserChanges).length > 0;

  const status = hasShapes ? (hasUserChanges ? 2 : hasApiChanges ? 1 : 0) : defaultStatus;
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
                const groupApiChanges = createGroupMap<IShapeChange[]>(figureIDs, shapeApiChanges);
                const groupUserChanges = createGroupMap<IShapeChange[]>(figureIDs, shapeUserChanges);
                const groupLoadingIDs = figureIDs.filter((ID: string) => figureLoadingIDs.includes(ID));
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
                    shapeApiChanges={groupApiChanges}
                    shapeUserChanges={groupUserChanges}
                    shapes={groupShapes}
                    loading={loading}
                    figureLoadingIDs={groupLoadingIDs}
                    disabled={disabled}
                    defaultStatus={defaultStatus}
                    onAddShape={onAddShape}
                    onResetShapes={onResetShapes}
                    onSyncShapes={onSyncShapes}
                    onSettings={onSettings}
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
