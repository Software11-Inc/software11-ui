import * as React from "react";
import { DeckDatasetDataProps } from "./deck-dataset-data.types";
import { DeckDatasetDataGroup } from "../deck-dataset-data-group/deck-dataset-data-group.component";
import Box from "@mui/joy/Box";
import { dataColumn } from "./deck-dataset-data.styles";
import { DeckDatasetDataSubcategory } from "../deck-dataset-data-subcategory/deck-dataset-data-subcategory.component";
import { ITableFigure } from "../models/figure.model";
import { IDynamicShape, IShapeChange } from "../models/shape.model";
import { createGroupMap } from "../utils";
import { OnceGroupedTableFigure } from "../models/figure-groups.model";

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
              const figureIDs: string[] = Object.values(items as OnceGroupedTableFigure)
                .reduce((accumulator, value) => accumulator.concat(value), [])
                .map((item) => String(item.id));

              const groupShapes = createGroupMap<IDynamicShape[]>(figureIDs, shapes);
              const groupApiChanges = createGroupMap<IShapeChange[]>(figureIDs, apiChanges);
              const groupUserChanges = createGroupMap<IShapeChange[]>(figureIDs, userChanges);

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
                />
              );
            }
          }
        })}
      </Box>
    </React.Fragment>
  );
};
