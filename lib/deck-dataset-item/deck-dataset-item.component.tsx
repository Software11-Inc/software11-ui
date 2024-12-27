import ChevronRight from "@mui/icons-material/ChevronRight";
import SyncRounded from "@mui/icons-material/SyncRounded";
import Box from "@mui/joy/Box";
import TimeAgo from "javascript-time-ago";
import React from "react";
import { KeyValueIcon, TableIcon } from "../deck-icons";
import { DeckLabel } from "../deck-label";
import { DatasetType } from "../models/dataset.model";
import { iconBoxStyle, mainBoxStyle } from "./deck-dataset-item.styles";
import { IDeckDatasetItemProps } from "./deck-dataset-item.types";

import en from "javascript-time-ago/locale/en";
import { DeckIconButton } from "../deck-icon-button";
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

export const DatasetIcon: React.FC<{ type?: DatasetType }> = ({ type }) => {
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
  onClick = () => {},
  onMouseEnter = () => {},
  hasAction = true,
}) => {
  return (
    <React.Fragment>
      <Box sx={mainBoxStyle} key={item.id} onClick={() => onClick()}>
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
            text: `Updated ${timeAgo.format(item?.lastUpdated?._seconds * 1000)}`,
          }}
        />
        <div className="flex-spacer"></div>
        {hasAction && (
          <DeckIconButton
            icon={actionIcon || <ChevronRight />}
            variant="plain"
            onClick={onClick}
            onMouseEnter={onMouseEnter}
          />
        )}
      </Box>
    </React.Fragment>
  );
};
