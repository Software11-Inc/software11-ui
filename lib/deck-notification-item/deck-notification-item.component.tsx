import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Box from "@mui/joy/Box";
import { ColorPaletteProp, SxProps } from "@mui/joy/styles/types";
import React from "react";
import { DeckFileList } from "../deck-file-list";
import { DeckLabel } from "../deck-label";
import { DeckNotificationItemProps } from "./deck-notification-item.types";
import { DeckSnackbarTextIconComponent } from "../deck-snackbar-message";
import Divider from "@mui/joy/Divider";
import { svgIconClasses } from "@mui/joy/SvgIcon";
import { DeckTextButton } from "../deck-text-button";

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

const messageIconStyle = (color: ColorPaletteProp | null = "neutral"): SxProps => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mx: 0.75,

  [`& .${svgIconClasses.root}`]: {
    color: `var(--joy-palette-${color}-500)`,
  },
});

export const DeckNotificationItem: React.FC<DeckNotificationItemProps> = ({
  title,
  description,
  fileTypes = [],
  customIcon = null,
  textIcon = null,
  color = null,
  message = "",
  defaultExpanded = false,
  fade = false,
  // onClear = () => {},
  onClick = () => {},
  action = null,
}) => {
  const hasFileTypes = fileTypes && fileTypes.length > 0;
  const [expanded, setExpanded] = React.useState(defaultExpanded);

  const hasTextIcon = textIcon !== null;
  const hasCustomIcon = customIcon !== null;

  const hasIcon = hasTextIcon || hasCustomIcon;

  const hasBottom = hasFileTypes || action;

  const className = ["deck-notification-item", fade ? "deck-fade" : ""].join(" ");

  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      expanded={expanded}
      className={className}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary
        slotProps={{
          button: {
            component: "div",
            onClick: () => {
              onClick();
              setExpanded(!expanded);
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            flex: 1,
          }}
        >
          {hasIcon && (
            <Box sx={messageIconStyle(color)}>
              {hasTextIcon ? <DeckSnackbarTextIconComponent textIcon={textIcon} /> : customIcon}
            </Box>
          )}

          <DeckLabel title={title} description={description} color="primary" />
          <div className="page-spacer" />
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={boxStyle}>
          {message && (
            <React.Fragment>
              <Box sx={messageStyle}>{message}</Box>
            </React.Fragment>
          )}
        </Box>
        {hasBottom && (
          <React.Fragment>
            <Divider />
            <Box sx={boxStyle}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 1,
                  justifyContent: "space-between",
                }}
              >
                {hasFileTypes && <DeckFileList types={fileTypes || []} spacing={true} />}
                <div className="page-spacer" />
                {action && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <DeckTextButton
                      action={() => {
                        action.action && action.action();
                      }}
                      text={action.text}
                      color={action.color}
                      variant={action.variant}
                      disabled={action.disabled}
                      icon={action.iconStart}
                    />
                  </Box>
                )}
              </Box>
            </Box>
          </React.Fragment>
        )}
      </AccordionDetails>
    </Accordion>
  );
};
