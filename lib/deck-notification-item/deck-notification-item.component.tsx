import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Box from "@mui/joy/Box";
import { ColorPaletteProp, SxProps } from "@mui/joy/styles/types";
import React, { useImperativeHandle } from "react";
import { DeckLabel } from "../deck-label";
import { DeckNotificationItemProps } from "./deck-notification-item.types";
import { DeckSnackbarTextIconComponent } from "../deck-snackbar-message";
import Divider from "@mui/joy/Divider";
import { svgIconClasses } from "@mui/joy/SvgIcon";
import { DeckTextButton } from "../deck-text-button";
import { DeckAuthor } from "../deck-author";
import { INotificationRef } from "../models/notification.model";

const boxStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  p: 1,
  justifyContent: "space-around",
};

const messageStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
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

const formGroupStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 0.25,
};

const summaryOverlayStyle: SxProps = {
  position: "absolute",

  left: "-0.5rem",
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
};

const indicatorStyle: SxProps = {
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  bgcolor: "var(--joy-palette-warning-500)",
  transform: "translateX(-50%)",
  transition: "transform 0.125s",

  "&.hidden": {
    transform: "translateX(0) scale(0)",
  },
};

function DeckNotificationComponent(props: DeckNotificationItemProps, ref: React.Ref<INotificationRef>) {
  const {
    title,
    description,

    author,
    onAuthorClick = () => {},
    authorLabel = "Author",

    sourceProject,
    onSourceProjectClick = () => {},
    sourceProjectLabel = "Project",

    action,
    onActionClick = () => {},
    actionLabel = "Action",

    objectName,
    onObjectNameClick = () => {},
    objectNameLabel = "Name",

    actionButtons = [],

    fade = false,

    color = null,
    defaultExpanded = false,
    source = "web",
    customIcon = null,
    textIcon = null,
    onClick = () => {},
    onMouseEnter = () => {},
  } = props;

  const [expanded, setExpanded] = React.useState(defaultExpanded);

  const hasTextIcon = textIcon !== null;
  const hasCustomIcon = customIcon !== null;

  const hasIcon = hasTextIcon || hasCustomIcon;

  const hasBottom = source || actionButtons.length > 0;

  const className = ["deck-notification-item", fade ? "deck-fade" : ""].join(" ");

  useImperativeHandle(
    ref,
    () => ({
      close: () => setExpanded(false),
      open: () => setExpanded(true),
    }),
    []
  );

  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      expanded={expanded}
      className={className}
      onChange={() => setExpanded(!expanded)}
      onMouseEnter={onMouseEnter}
    >
      <AccordionSummary
        slotProps={{
          button: {
            component: "div",
            onClick: (ev: any) => {
              const target = ev.target as HTMLElement;
              if (target.classList.contains("deck-link")) {
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
          <Box sx={summaryOverlayStyle}>
            <Box sx={indicatorStyle} className={fade ? "hidden" : ""}></Box>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={boxStyle}>
          <React.Fragment>
            <Box sx={messageStyle}>
              <Box sx={formGroupStyle}>
                <DeckLabel title={{ text: authorLabel }} color="neutral" />
                <DeckAuthor user={author} showAvatar={false} size="sm" isLink={true} onClick={onAuthorClick} />
              </Box>
              {sourceProject && (
                <Box sx={formGroupStyle}>
                  <DeckLabel title={{ text: sourceProjectLabel }} color="neutral" />
                  <DeckLabel
                    title={{ text: sourceProject?.name, link: true, onClick: onSourceProjectClick }}
                    description={{
                      text: sourceProject?.description,
                    }}
                    color="primary"
                  />
                </Box>
              )}
              {action && (
                <Box sx={formGroupStyle}>
                  <DeckLabel title={{ text: actionLabel }} color="neutral" />
                  <DeckLabel title={{ text: action, link: true, onClick: onActionClick }} color="primary" />
                </Box>
              )}
              {objectName && (
                <Box sx={formGroupStyle}>
                  <DeckLabel title={{ text: objectNameLabel }} color="neutral" />
                  <DeckLabel title={{ text: objectName, link: true, onClick: onObjectNameClick }} color="primary" />
                </Box>
              )}
            </Box>
          </React.Fragment>
        </Box>
        {hasBottom && (
          <React.Fragment>
            <Divider />
            <Box sx={boxStyle}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                  gap: 1,
                  justifyContent: "center",
                }}
              >
                {actionButtons &&
                  actionButtons.map((actionButton) => {
                    return (
                      <DeckTextButton
                        key={actionButton.buttonKey}
                        action={() => {
                          actionButton.action && actionButton.action();
                        }}
                        text={actionButton.text}
                        color={actionButton.color}
                        variant={actionButton.variant}
                        disabled={actionButton.disabled}
                        icon={actionButton.iconStart}
                      />
                    );
                  })}
              </Box>
            </Box>
          </React.Fragment>
        )}
      </AccordionDetails>
    </Accordion>
  );
}

type DeckNotificationItemType = (
  props: DeckNotificationItemProps & { ref?: React.Ref<INotificationRef> }
) => React.ReactElement | null;

export const DeckNotificationItem: DeckNotificationItemType = React.forwardRef(
  DeckNotificationComponent
) as DeckNotificationItemType;
