import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Typography from "@mui/joy/Typography";
import ClearAllRounded from "@mui/icons-material/ClearAllRounded";
import DeleteSweepRounded from "@mui/icons-material/DeleteSweepRounded";
import { DeckNotificationItemProps } from "./deck-notification-item.types";
import NearbyErrorRounded from "@mui/icons-material/NearbyErrorRounded";
import { SxProps } from "@mui/joy/styles/types";
import Box from "@mui/joy/Box";
import { DeckLabel } from "../deck-label";
import { DeckFileList } from "../deck-file-list";
import { DeckAuthor } from "../deck-author";
import { DeckIconButton } from "../deck-icon-button";
import CloseRounded from "@mui/icons-material/CloseRounded";
import { getBackgroundColor } from "../accordion.style";
import Divider from "@mui/joy/Divider";
import React from "react";

const boxStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  p: 1,
  justifyContent: "space-around",
};

const messageStyle: SxProps = {
  fontSize: "11px",
  lineHeight: "14px",
  color: "var(--joy-palette-primary-500)",
};

export const DeckNotificationItem: React.FC<DeckNotificationItemProps> = ({
  title = "New Notification",
  description = "Last updated 2 hours ago",
  fileTypes,
  message = "",
  defaultExpanded = false,
  onClear = () => {},
  onClick = () => {},
}) => {
  const hasFileTypes = fileTypes && fileTypes.length > 0;
  const [expanded, setExpanded] = React.useState(defaultExpanded);

  return (
    <Accordion defaultExpanded={defaultExpanded} expanded={expanded} onChange={() => setExpanded(!expanded)}>
      <AccordionSummary
        indicator={null}
        slotProps={{
          button: {
            component: "div",
            onClick: (e: any) => {
              const target = e.target as HTMLElement;
              if (target.classList.contains("MuiSvgIcon-root")) {
                return;
              }
              onClick();
              setExpanded(!expanded);
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 0.5,
            alignItems: "center",
            flex: 1,
          }}
        >
          {hasFileTypes && <DeckFileList types={fileTypes || []} spacing={false} />}
          {!hasFileTypes && <NearbyErrorRounded color="primary" sx={{ mx: 1 }} />}
          <DeckLabel
            title={{
              text: title,
            }}
            description={{
              text: description,
            }}
          />
          <div className="page-spacer" />
          <DeckIconButton icon={<ClearAllRounded />} variant="plain" color="primary" onClick={onClear} />
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={boxStyle}>
          {message && (
            <React.Fragment>
              <Box sx={messageStyle}>{message}</Box>
            </React.Fragment>
          )}

          {/* <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <DeckFileList types={fileTypes || []} spacing={true} />
            <div className="page-spacer" />
            <DeckAuthor showName={false} />
          </Box> */}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
