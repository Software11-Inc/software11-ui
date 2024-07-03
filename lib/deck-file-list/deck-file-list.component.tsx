import Box from "@mui/joy/Box";
import React from "react";
import { ExcelIcon, GoogleSheetIcon, PowerpointIcon } from "../deck-icons";
import { fileListClass, fileListItemClass, fileListItemStyle, fileListStyle } from "./deck-file-list.styles";
import { IDeckFileListProps } from "./deck-file-list.types";

const SIZE = 16;

export const DeckFileList: React.FC<IDeckFileListProps> = ({ types, limit = 7 }) => {
  if (!types || types.length === 0) {
    return null;
  }

  const getIcon = (type: string) => {
    let component = null;

    switch (type) {
      case "excel": {
        component = <ExcelIcon />;
        break;
      }
      case "powerpoint": {
        component = <PowerpointIcon />;
        break;
      }
      case "google-sheet": {
        component = <GoogleSheetIcon />;
        break;
      }
      default: {
        component = null;
        break;
      }
    }

    if (!component) {
      return null;
    }

    return React.cloneElement(component as any, { width: SIZE, height: SIZE });
  };

  const count = Math.min(types.length, limit);

  return (
    <React.Fragment>
      <Box sx={fileListStyle}>
        <Box className={fileListClass}>
          {types.splice(0, limit).map((type, index) => (
            <Box key={index} className={fileListItemClass} sx={fileListItemStyle(count - index)}>
              {getIcon(type)}
            </Box>
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
};
