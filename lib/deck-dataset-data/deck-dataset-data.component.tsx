import { IDynamicShape, IFigureUserChange, IShapeChange, ITableFigure, OnceGroupedTableFigure } from "@models";
import Box from "@mui/joy/Box";
import * as React from "react";
import { DeckDatasetDataGroup } from "../deck-dataset-data-group/deck-dataset-data-group.component";
import { DeckDatasetDataSubcategory } from "../deck-dataset-data-subcategory/deck-dataset-data-subcategory.component";
import { createGroupMap } from "../utils";
import { dataColumn } from "./deck-dataset-data.styles";
import { DeckDatasetDataProps } from "./deck-dataset-data.types";

export const DeckDatasetData: React.FC<DeckDatasetDataProps> = ({
  data = {},
  shapes = {},
  shapeApiChanges = {},
  shapeUserChanges = {},
  figureUserChanges = {},
  figureLoadingIDs = [],
  compact = false,
  type,
  hasActions = false,
  hasStatus = false,
  level = 0,
  size = "sm",
  defaultStatus = -1,
  disabled = false,
  loading = false,
  hasSelectedShapes = false,
  hasMultipleSelectedShapes = false,
  hasSelectedFigureShapes = false,
  onAddShape = () => {},
  onResetShapes = () => {},
  onSettings = () => {},
  onSyncShapes = () => {},
  onSelectCell = () => {},
}) => {
  const entries = Object.entries(data || {});
  return (
    <React.Fragment>
      <Box sx={dataColumn(compact)}>
        {entries.map(([groupName, items]) => {
          switch (type) {
            case "excel-table":
            case "google-sheet-table": {
              const figureIDs = items.map((item: ITableFigure) => item?.id);
              const groupShapes = createGroupMap<IDynamicShape[]>(figureIDs, shapes);
              const groupShapeApiChanges = createGroupMap<IShapeChange[]>(figureIDs, shapeApiChanges);
              const groupShapeUserChanges = createGroupMap<IShapeChange[]>(figureIDs, shapeUserChanges);
              const groupFigureUserChanges = createGroupMap<IFigureUserChange>(figureIDs, figureUserChanges);
              const groupLoadingIDs = figureIDs.filter((ID: string) => figureLoadingIDs.includes(ID));
              return (
                <DeckDatasetDataGroup
                  key={groupName}
                  groupName={groupName}
                  items={items}
                  shapeApiChanges={groupShapeApiChanges}
                  shapeUserChanges={groupShapeUserChanges}
                  figureUserChanges={groupFigureUserChanges}
                  shapes={groupShapes}
                  type={type}
                  onAddShape={onAddShape}
                  onResetShapes={onResetShapes}
                  onSettings={onSettings}
                  onSyncShapes={onSyncShapes}
                  onSelectCell={onSelectCell}
                  compact={compact}
                  hasActions={hasActions}
                  hasStatus={hasStatus}
                  level={level}
                  size={size}
                  figureLoadingIDs={groupLoadingIDs}
                  loading={loading}
                  disabled={disabled}
                  hasSelectedShapes={hasSelectedShapes}
                  hasMultipleSelectedShapes={hasMultipleSelectedShapes}
                  hasSelectedFigureShapes={hasSelectedFigureShapes}
                  defaultStatus={defaultStatus}
                />
              );
            }
            case "excel-matrix": {
              const figureIDs: string[] = Object.values(items as OnceGroupedTableFigure)
                .reduce((accumulator, value) => accumulator.concat(value), [])
                .map((item) => String(item.id));

              const groupShapes = createGroupMap<IDynamicShape[]>(figureIDs, shapes);
              const groupShapeApiChanges = createGroupMap<IShapeChange[]>(figureIDs, shapeApiChanges);
              const groupShapeUserChanges = createGroupMap<IShapeChange[]>(figureIDs, shapeUserChanges);
              const groupFigureUserChanges = createGroupMap<IFigureUserChange>(figureIDs, figureUserChanges);
              const groupLoadingIDs = figureIDs.filter((ID: string) => figureLoadingIDs.includes(ID));

              return (
                <DeckDatasetDataSubcategory
                  key={groupName}
                  groupName={groupName}
                  items={items}
                  type={type}
                  shapes={groupShapes}
                  shapeApiChanges={groupShapeApiChanges}
                  shapeUserChanges={groupShapeUserChanges}
                  figureUserChanges={groupFigureUserChanges}
                  hasStatus={hasStatus}
                  hasActions={hasActions}
                  level={level}
                  size={size}
                  compact={compact}
                  onAddShape={onAddShape}
                  onResetShapes={onResetShapes}
                  onSettings={onSettings}
                  onSyncShapes={onSyncShapes}
                  onSelectCell={onSelectCell}
                  figureLoadingIDs={groupLoadingIDs}
                  loading={loading}
                  disabled={disabled}
                  defaultStatus={defaultStatus}
                  hasSelectedShapes={hasSelectedShapes}
                  hasMultipleSelectedShapes={hasMultipleSelectedShapes}
                  hasSelectedFigureShapes={hasSelectedFigureShapes}
                />
              );
            }
          }
        })}
      </Box>
    </React.Fragment>
  );
};
