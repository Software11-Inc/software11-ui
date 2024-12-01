import { IDynamicShape, IShapeChange, ITableFigure, OnceGroupedTableFigure } from "@models";
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
  apiChanges = {},
  userChanges = {},
  figureLoadingIDs = [],
  compact = false,
  type,
  hasActions = false,
  hasStatus = false,
  level = 0,
  size = "sm",
  defaultStatus = 0,
  disabled = false,
  loading = false,
  hasSelectedShapes = false,
  onAddShape = () => {},
  onResetShapes = () => {},
  onSettings = () => {},
  onSyncShapes = () => {},
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
              const groupApiChanges = createGroupMap<IShapeChange[]>(figureIDs, apiChanges);
              const groupUserChanges = createGroupMap<IShapeChange[]>(figureIDs, userChanges);
              const groupLoadingIDs = figureIDs.filter((ID: string) => figureLoadingIDs.includes(ID));
              return (
                <DeckDatasetDataGroup
                  key={groupName}
                  groupName={groupName}
                  items={items}
                  apiChanges={groupApiChanges}
                  userChanges={groupUserChanges}
                  shapes={groupShapes}
                  type={type}
                  onAddShape={onAddShape}
                  onResetShapes={onResetShapes}
                  onSettings={onSettings}
                  onSyncShapes={onSyncShapes}
                  compact={compact}
                  hasActions={hasActions}
                  hasStatus={hasStatus}
                  level={level}
                  size={size}
                  figureLoadingIDs={groupLoadingIDs}
                  loading={loading}
                  disabled={disabled}
                  hasSelectedShapes={hasSelectedShapes}
                  defaultStatus={defaultStatus}
                />
              );
            }
            case "excel-matrix": {
              const figureIDs: string[] = Object.values(items as OnceGroupedTableFigure)
                .reduce((accumulator, value) => accumulator.concat(value), [])
                .map((item) => String(item.id));

              const groupShapes = createGroupMap<IDynamicShape[]>(figureIDs, shapes);
              const groupApiChanges = createGroupMap<IShapeChange[]>(figureIDs, apiChanges);
              const groupUserChanges = createGroupMap<IShapeChange[]>(figureIDs, userChanges);
              const groupLoadingIDs = figureIDs.filter((ID: string) => figureLoadingIDs.includes(ID));

              return (
                <DeckDatasetDataSubcategory
                  key={groupName}
                  groupName={groupName}
                  items={items}
                  type={type}
                  shapes={groupShapes}
                  apiChanges={groupApiChanges}
                  userChanges={groupUserChanges}
                  hasStatus={hasStatus}
                  hasActions={hasActions}
                  level={level}
                  size={size}
                  compact={compact}
                  onAddShape={onAddShape}
                  onResetShapes={onResetShapes}
                  onSettings={onSettings}
                  onSyncShapes={onSyncShapes}
                  figureLoadingIDs={groupLoadingIDs}
                  loading={loading}
                  disabled={disabled}
                  defaultStatus={defaultStatus}
                />
              );
            }
          }
        })}
      </Box>
    </React.Fragment>
  );
};
