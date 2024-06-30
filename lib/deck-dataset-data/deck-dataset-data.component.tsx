import * as React from "react";
import { DeckDatasetDataProps } from "./deck-dataset-data.types";
import { DeckDatasetDataGroup } from "../deck-dataset-data-group/deck-dataset-data-group.component";
import Box from "@mui/joy/Box";
import { dataColumn } from "./deck-dataset-data.styles";

export const DeckDatasetData: React.FC<DeckDatasetDataProps> = ({
  data,
  compact,
  hasActions,
  hasStatus,
  level,
  size,
}) => {
  const entries = Object.entries(data || {});
  return (
    <React.Fragment>
      <Box sx={dataColumn(compact)}>
        {entries.map(([groupName, items]) => (
          <DeckDatasetDataGroup
            key={groupName}
            groupName={groupName}
            items={items}
            apiChanges={{}}
            userChanges={{}}
            shapes={{}}
            type="excel-data"
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
        ))}
      </Box>
    </React.Fragment>
  );
};
