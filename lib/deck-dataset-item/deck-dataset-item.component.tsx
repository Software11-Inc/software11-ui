import ChevronRight from "@mui/icons-material/ChevronRight";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import React from "react";
import { KeyValueIcon, TableIcon } from "../deck-icons";
import { DeckLabel } from "../deck-label";
import { DatasetType } from "../models/dataset.model";
import * as fromUtils from "../utils";
import { iconBoxStyle, mainBoxStyle } from "./deck-dataset-item.styles";
import { IDeckDatasetItemProps } from "./deck-dataset-item.types";
import SyncRounded from "@mui/icons-material/SyncRounded";

export const DatasetIcon: React.FC<{ type: DatasetType }> = ({ type }) => {
  switch (type) {
    case "default":
    case "excel-default":
      return <KeyValueIcon />;
    default:
      return <TableIcon />;
  }
};

export const DeckDatasetItem: React.FC<IDeckDatasetItemProps> = ({
  item,
  loaded = false,
  loading = false,
  actionIcon,
  onClick,
  onMouseEnter,
}) => {
  return (
    <React.Fragment>
      <Box sx={mainBoxStyle} key={item.id}>
        <Box sx={iconBoxStyle(loaded)}>
          {!loading && <DatasetIcon type={item.type} />}
          {loading && (
            <SyncRounded
              color="success"
              sx={{
                fontSize: "18px",
                animation: "spin 2s linear infinite",
              }}
            />
          )}
        </Box>
        <DeckLabel
          title={{
            text: item.name,
          }}
          description={{
            text: `Updated at ${fromUtils.formatDate(item?.lastUpdated?._seconds * 1000)}`,
          }}
        />
        <div className="flex-spacer"></div>
        <IconButton
          size="sm"
          variant="plain"
          sx={{ display: "flex", p: 0 }}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
        >
          {actionIcon || <ChevronRight />}
        </IconButton>
      </Box>
    </React.Fragment>
  );
};
