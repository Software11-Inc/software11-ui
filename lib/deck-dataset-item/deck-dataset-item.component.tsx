import React from "react";
import { IDeckDatasetItemProps } from "./deck-dataset-item.types";
import { DatasetType } from "../models/dataset.model";
import { KeyValueIcon, TableIcon } from "../deck-icons";
import Box from "@mui/joy/Box";
import { iconBoxStyle, mainBoxStyle } from "./deck-dataset-item.styles";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { DeckLabel } from "../deck-label";
import * as fromUtils from "../utils";
import IconButton from "@mui/joy/IconButton";

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
  loaded,
  actionIcon,
  onClick,
  onMouseEnter,
}) => {
  return (
    <React.Fragment>
      <Box sx={mainBoxStyle} key={item.id}>
        <Box sx={iconBoxStyle(loaded)}>
          <DatasetIcon type={item.type} />
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
