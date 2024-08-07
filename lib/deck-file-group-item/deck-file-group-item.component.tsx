import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Box from "@mui/joy/Box";
import React from "react";
import { accordionGroupStyles } from "../accordion.style";
import { ExcelIcon, GoogleSheetIcon, GoogleSlidesIcon, PowerpointIcon } from "../deck-icons";
import { DeckLabel } from "../deck-label";
import { fileGroupDataStyle, fileGroupItemClass, fileHeaderStyle, fileIconStyle } from "./deck-file-group-item.styles";
import { IDeckFileGroupItemProps } from "./deck-file-group-item.types";

const SIZE = 16;

export const DeckFileGroupItem: React.FC<IDeckFileGroupItemProps> = ({
  file,
  itemTemplate,
  defaultExpanded = false,
  emptyTemplate = null,
}) => {
  const hasTemplate = !!itemTemplate;
  const getIcon = (type?: string) => {
    if (!type) {
      return null;
    }
    let component = null;

    switch (type.toLowerCase()) {
      case "excel": {
        component = <ExcelIcon />;
        break;
      }
      case "powerpoint": {
        component = <PowerpointIcon />;
        break;
      }
      case "google sheet": {
        component = <GoogleSheetIcon />;
        break;
      }
      case "google slide": {
        component = <GoogleSlidesIcon />;
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
  return (
    <React.Fragment>
      <AccordionGroup
        key={file.header.label}
        className={fileGroupItemClass}
        sx={{
          ...accordionGroupStyles(fileGroupItemClass, false, 1, "sm", true),
          bgcolor: "background.body",
        }}
      >
        <Accordion defaultExpanded={defaultExpanded}>
          <AccordionSummary>
            <Box sx={fileHeaderStyle}>
              <Box sx={fileIconStyle}>{getIcon(file.header?.type)}</Box>
              <DeckLabel
                title={{
                  text: file.header?.label,
                }}
                description={{
                  text: file.header?.description,
                }}
              />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {hasTemplate && (
              <Box sx={fileGroupDataStyle}>
                {file.data.map((sheet, index) => (
                  <React.Fragment key={index + sheet.header.label}>{itemTemplate(sheet)}</React.Fragment>
                ))}
              </Box>
            )}
            {!hasTemplate && emptyTemplate}
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </React.Fragment>
  );
};
