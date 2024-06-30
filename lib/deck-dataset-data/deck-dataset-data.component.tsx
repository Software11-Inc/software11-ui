import * as React from "react";
import { DeckDatasetDataProps } from "./deck-dataset-data.types";
import { DeckDatasetDataGroup } from "../deck-dataset-data-group/deck-dataset-data-group.component";
import Box from "@mui/joy/Box";
import { dataColumn } from "./deck-dataset-data.styles";
import { DeckDatasetDataSubcategory } from "../deck-dataset-data-subcategory/deck-dataset-data-subcategory.component";
import { ITableFigure } from "../models/figure.model";
import { FigureShapeMap, IDynamicShape, IShapeChange, ShapeChangeMap } from "../models/shape.model";

// Generic function to create a map based on figureIDs and a source object
function createGroupMap<T>(figureIDs: string[], source: Record<string, T>): Record<string, T> {
  return figureIDs.reduce(
    (acc, figureID) => {
      const item = source[figureID];
      if (item) {
        acc[figureID] = item;
      }
      return acc;
    },
    {} as Record<string, T>
  );
}

export const DeckDatasetData: React.FC<DeckDatasetDataProps> = ({
  data,
  shapes,
  apiChanges,
  userChanges,
  compact,
  type,
  hasActions,
  hasStatus,
  level,
  size,
}) => {
  const entries = Object.entries(data || {});
  return (
    <React.Fragment>
      <Box sx={dataColumn(compact)}>
        {entries.map(([groupName, items]) => {
          switch (type) {
            case "excel-table": {
              const figureIDs = items.map((item: ITableFigure) => item?.id);
              const groupShapes = createGroupMap<IDynamicShape[]>(figureIDs, shapes);
              const groupApiChanges = createGroupMap<IShapeChange[]>(figureIDs, apiChanges);
              const groupUserChanges = createGroupMap<IShapeChange[]>(figureIDs, userChanges);
              return (
                <DeckDatasetDataGroup
                  key={groupName}
                  groupName={groupName}
                  items={items}
                  apiChanges={groupApiChanges}
                  userChanges={groupUserChanges}
                  shapes={groupShapes}
                  type={type}
                  onAddShape={() => {}}
                  onResetShapes={() => {}}
                  onSettings={() => {}}
                  onSyncShapes={() => {}}
                  compact={compact}
                  hasActions={hasActions}
                  hasStatus={hasStatus}
                  level={level}
                  size={size}
                />
              );
            }
            case "excel-matrix": {
              return (
                <DeckDatasetDataSubcategory
                  key={groupName}
                  groupName={groupName}
                  items={items}
                  type={type}
                  hasStatus={hasStatus}
                  hasActions={hasActions}
                  level={level}
                  size={size}
                  compact={compact}
                />
              );
            }
          }
        })}
      </Box>
    </React.Fragment>
  );
};
