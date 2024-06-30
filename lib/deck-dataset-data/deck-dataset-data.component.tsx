import * as React from "react";
import { DeckDatasetDataProps } from "./deck-dataset-data.types";
import { DeckDatasetDataGroup } from "../deck-dataset-data-group/deck-dataset-data-group.component";
import Box from "@mui/joy/Box";
import { columnStyle } from "./deck-dataset-data.styles";

export const DeckDatasetData: React.FC<DeckDatasetDataProps> = ({ data }) => {
  const entries = Object.entries(data || {});
  return (
    <React.Fragment>
      <Box sx={columnStyle}>
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
            compact={false}
            hasActions={true}
            hasStatus={true}
          />
        ))}
      </Box>
    </React.Fragment>
  );
};
