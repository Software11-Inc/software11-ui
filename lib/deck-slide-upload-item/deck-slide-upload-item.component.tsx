import AddRounded from "@mui/icons-material/AddRounded";
import SettingsSuggestRounded from "@mui/icons-material/SettingsSuggestRounded";
import { LinearProgress, Typography } from "@mui/joy";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import CircularProgress from "@mui/joy/CircularProgress";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import React from "react";
import { accordionGroupStyles, accordionTransition } from "../accordion.style";
import { DeckLabel } from "../deck-label";
import { DeckSelectTags } from "../deck-select-tags";
import { DeckStatus } from "../deck-status";
import { Status } from "../deck-status/deck-status.types";
import { IDeckSlideUploadItem } from "./deck-slide-upload-item.types";
import {
  accordionBoxStyle,
  accordionDetailsBoxStyle,
  ignoreBoxStyle,
  imageOverlayClass,
  inputStyle,
  saveButtonBoxStyle,
  uploadImageOverlay,
  uploadImageStyle,
  uploadItemStyle,
} from "./deck-slide-upload.styles";

export const DeckSlideUploadItem: React.FC<IDeckSlideUploadItem> = ({
  slideName = "",
  base64Image,
  item,
  loaded = false,
  saved = false,
  ignore = false,
  loading = false,
  disabled = false,
  onSave = () => {},
  onIgnore = () => {},
  onContinue = () => {},
  onEdit = () => {},
}) => {
  const buttonSx = {
    fontSize: 11,
    lineHeight: 1.1,
    minHeight: "unset",
    textTransform: "uppercase",
    borderRadius: "calc(var(--border-radius)/2)",
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const uploadButtonSx = {
    ...buttonSx,
    flex: 1,
  };
  const editButtonSx = {
    ...buttonSx,
    borderRadius: "0 0 calc(var(--border-radius)/2) calc(var(--border-radius)/2)",
    flex: 1,
  };
  const className = "deck-slide-upload-item";
  const [name, setName] = React.useState("");
  const [tags, setTags] = React.useState<string[]>([]);

  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    if (item) {
      setName(item?.name || "");
      setTags(item?.tags || []);
    }
  }, [item]);
  const getRandomBetween = (a: number, b: number) => {
    return Math.floor(Math.random() * b) + a;
  };
  React.useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 95) {
            // clearInterval(interval);
            return getRandomBetween(0, 75);
          }
          const diff = getRandomBetween(1, 12);
          return Math.min(oldProgress + diff, 95);
        });
      }, 250);
      return () => clearInterval(interval);
    }
  }, [loading]);

  const status = ignore ? Status.WAITING : saved ? Status.PROCESSING : Status.WAITING;

  const accordionSummarySlotProps = {
    button: {
      component: "div",
      onClick: (e: any) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains("MuiSvgIcon-root")) {
          // e.stopPropagation();
          return;
        }
      },
    },
  } as any;

  const save = () => {
    onSave(name, tags);
  };

  const valid = name.length > 0;

  return (
    <Box sx={uploadItemStyle(ignore, loading)}>
      <Box sx={uploadImageStyle(ignore)}>
        {loaded ? (
          <React.Fragment>
            {base64Image ? <img src={`data:image/png;base64,${base64Image}`} alt="Slide preview" /> : null}
            {loading ? (
              <Box
                sx={{
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  bgcolor: "rgba(255,255,255, 0.7)",
                  minWidth: "4.5rem",
                  flex: 1,
                }}
              >
                <CircularProgress size="sm" />
              </Box>
            ) : null}
            {ignore || disabled ? null : (
              <Box sx={uploadImageOverlay} className={imageOverlayClass}>
                <Typography
                  sx={{
                    fontSize: 9,
                    fontStyle: "italic",
                  }}
                >
                  If you want to skip this slide, click on the button below
                </Typography>
                <Button size="sm" color="warning" onClick={onIgnore} sx={buttonSx} disabled={loading || disabled}>
                  SKIP
                </Button>
              </Box>
            )}
          </React.Fragment>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              bgcolor: "var(--joy-palette-background-surface)",
              minWidth: "4.5rem",
              aspectRatio: "16/9",
              flex: 1,
            }}
          >
            <CircularProgress size="sm" />
          </Box>
        )}
        {loading && (
          <LinearProgress
            determinate
            value={progress}
            size="sm"
            sx={{
              height: "2px",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,

              "&:before": {
                transition: "1s",
              },
            }}
          />
        )}
      </Box>
      {!ignore && (
        <Divider orientation={ignore ? "vertical" : "horizontal"} sx={{ bgcolor: "var(--joy-palette-divider" }} />
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <AccordionGroup
          className={className}
          sx={accordionGroupStyles(className, true, 0, "sm", false, 0)}
          transition={accordionTransition}
        >
          <Accordion defaultExpanded={true} expanded={!ignore && !saved} disabled={ignore}>
            <AccordionSummary indicator={null} slotProps={accordionSummarySlotProps}>
              <Box sx={accordionBoxStyle}>
                <Box
                  sx={{
                    display: "flex",
                    flex: 1,
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <DeckStatus status={status} loading={loading} />
                  <DeckLabel
                    title={{
                      text: valid ? name : slideName,
                      limit: 1,
                    }}
                    description={{
                      text: valid ? slideName : "Enter a new name",
                      limit: 1,
                    }}
                  />
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={accordionDetailsBoxStyle}>
                <DeckLabel
                  title={{
                    text: "Name",
                  }}
                  description={{
                    text: "Enter a descriptive name for this slide",
                  }}
                />
                <Input
                  variant="soft"
                  size="sm"
                  placeholder="Enter name..."
                  color="primary"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  sx={inputStyle}
                />
              </Box>
              <Box sx={accordionDetailsBoxStyle}>
                <DeckSelectTags tags={tags} onChange={(tags) => setTags(tags)} />
              </Box>
              <Divider sx={{ bgcolor: "var(--joy-palette-divider" }} />
              <Box sx={saveButtonBoxStyle}>
                <Button size="sm" sx={{ fontSize: 10 }} disabled={!valid || loading || disabled} onClick={save}>
                  SAVE
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
        {ignore && (
          <Box sx={ignoreBoxStyle}>
            <Button
              sx={buttonSx}
              color="primary"
              fullWidth
              startDecorator={<AddRounded sx={{ fontSize: 14, lineHeight: 1.2 }} />}
              onClick={onContinue}
              disabled={loading || disabled}
            >
              ADD
            </Button>
          </Box>
        )}
        {saved && !ignore && (
          <Box sx={ignoreBoxStyle}>
            <Button
              sx={editButtonSx}
              color="primary"
              fullWidth
              startDecorator={<SettingsSuggestRounded sx={{ fontSize: 14, lineHeight: 1.2 }} />}
              onClick={onEdit}
              disabled={loading || disabled}
            >
              Change
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};
