import DoneAllRounded from "@mui/icons-material/DoneAllRounded";
import HourglassTopRounded from "@mui/icons-material/HourglassTopRounded";
import SettingsSuggestRounded from "@mui/icons-material/SettingsSuggestRounded";
import SyncRounded from "@mui/icons-material/SyncRounded";
import WarningRounded from "@mui/icons-material/WarningRounded";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import CircularProgress from "@mui/joy/CircularProgress";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
import React from "react";
import { accordionGroupStyles, accordionTransition } from "../accordion.style";
import { DeckLabel } from "../deck-label";
import { DeckSelectTags } from "../deck-select-tags";
import { DeckStatus } from "../deck-status";
import { IDeckSlideUploadItem, UploadGeneralState, UploadLoadingState } from "./deck-slide-upload-item.types";
import {
  accordionBoxStyle,
  accordionDetailsBoxStyle,
  accordionHeaderStyle,
  buttonSx,
  editButtonSx,
  inputStyle,
  itemAddButtonClass,
  itemBoxStyle,
  itemContentSectionClass,
  itemErrorOverlayClass,
  itemImageClass,
  itemImageHoverClass,
  itemImageOverlayClass,
  itemImageSectionClass,
  itemLinearProgressStyle,
  itemStatusSectionClass,
  saveButtonBoxStyle,
} from "./deck-slide-upload.styles";

export const DeckSlideUploadItem: React.FC<IDeckSlideUploadItem> = ({
  slideName = "",
  progress = 0,
  base64Image,
  item,
  loaded = false,
  disabled = false,
  onSave = () => {},
  onIgnore = () => {},
  onContinue = () => {},
  onEdit = () => {},
  onReset = () => {},
  onRetry = () => {},
  onCancel = () => {},
  errorMessage = null,
  generalState = UploadGeneralState.NONE,
  loadingState = UploadLoadingState.NONE,
}) => {
  const className = "deck-slide-upload-item";
  const [name, setName] = React.useState("");
  const [tags, setTags] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (item) {
      setName(item?.name || "");
      setTags(item?.tags || []);
    }
  }, [item]);

  const loading = loadingState === UploadLoadingState.LOADING;

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

  const getBase64Image = (base64?: string) => {
    if (!base64 || !loaded) {
      return null;
    }
    return <img src={`data:image/png;base64,${base64}`} alt="Slide preview" />;
  };

  const getState = (state: UploadLoadingState) => {
    if (generalState === UploadGeneralState.NONE) {
      return null;
    }
    switch (state) {
      case UploadLoadingState.NONE:
        if (generalState === UploadGeneralState.PROCESSING) {
          return <WaitingStatus onClick={onEdit} />;
        }
        return <UpdateStatus onClick={onEdit} />;
      case UploadLoadingState.LOADING:
        return <ProcessingStatus onClick={onCancel} />;
      case UploadLoadingState.LOADED:
        return <SuccessStatus onClick={onReset} />;
      case UploadLoadingState.ERROR:
        return <ErrorStatus onClick={onRetry} />;
      default:
        return null;
    }
  };

  let status = -1;

  const isIgnored = generalState === UploadGeneralState.NONE;

  const hasError = UploadLoadingState.ERROR === loadingState;
  const isLoading = UploadLoadingState.LOADING === loadingState;

  let open = false;

  switch (generalState) {
    case UploadGeneralState.EDIT: {
      open = true;
      break;
    }
    case UploadGeneralState.SAVED: {
      status = 1;
      break;
    }
    case UploadGeneralState.PROCESSING: {
      status = 3;
      break;
    }
    default: {
      break;
    }
  }

  switch (loadingState) {
    case UploadLoadingState.ERROR: {
      status = 2;
      break;
    }
    case UploadLoadingState.LOADED: {
      status = 0;
      break;
    }
    case UploadLoadingState.LOADING: {
      status = -1;
      break;
    }
    default: {
      break;
    }
  }

  const addButtonProps = {
    sx: {
      ...buttonSx,
      height: "100%",
      width: "100%",
      borderRadius: "0 calc(var(--border-radius) / 2) calc(var(--border-radius) / 2) 0",
    },
    onClick: onContinue,
    disabled: isLoading || disabled || !loaded,
  };

  return (
    <React.Fragment>
      <Box sx={itemBoxStyle} className={[generalState, loadingState].join(" ")}>
        <Box className={itemImageSectionClass}>
          <Box className={itemImageClass}>
            <React.Fragment>
              {getBase64Image(base64Image)}
              {!loaded && (
                <Box className={itemImageOverlayClass}>
                  <CircularProgress size="sm" />
                </Box>
              )}

              {hasError && !isIgnored && (
                <Box className={itemErrorOverlayClass}>
                  <WarningRounded sx={{ color: "var(--joy-palette-danger-500)" }} />
                  <DeckLabel
                    title={{
                      text: errorMessage?.message || "",
                    }}
                    description={{
                      text: errorMessage?.detail || "",
                    }}
                    color="danger"
                  />
                </Box>
              )}

              <Box className={itemImageHoverClass}>
                <Button size="sm" color="warning" onClick={onIgnore} sx={buttonSx} disabled={loading || disabled}>
                  SKIP
                </Button>
                <Typography
                  sx={{
                    fontSize: 9,
                    fontStyle: "italic",
                  }}
                >
                  * slide will be ignored and not uploaded
                </Typography>
              </Box>
            </React.Fragment>
          </Box>
          <Box className={itemAddButtonClass}>
            <Button color="primary" variant="plain" {...addButtonProps}>
              ADD
            </Button>
          </Box>
          {isLoading && <LinearProgress size="sm" determinate value={progress} sx={itemLinearProgressStyle} />}
        </Box>

        <Box className={itemContentSectionClass}>
          <AccordionGroup
            className={className}
            sx={accordionGroupStyles(className, true, 0, "sm", false, 0)}
            transition={accordionTransition}
          >
            <Accordion defaultExpanded={true} expanded={open} disabled={true}>
              <AccordionSummary indicator={null} slotProps={accordionSummarySlotProps}>
                <Box sx={accordionBoxStyle}>
                  <Box sx={accordionHeaderStyle}>
                    <DeckStatus status={status} loading={isLoading} />
                    <DeckLabel title={{ text: valid ? name : slideName }} />
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
        </Box>
        <Box className={itemStatusSectionClass}>{getState(loadingState)}</Box>
      </Box>
    </React.Fragment>
  );
};

// Centralized icon styling
const iconStyle = { fontSize: 12, lineHeight: 1.2 };

// Improved type safety for colors
type ButtonColor = "warning" | "neutral" | "success" | "danger";

// Mapping icons to statuses for easier extension and maintenance
const statusIcons = {
  update: <SettingsSuggestRounded sx={iconStyle} />,
  change: <SettingsSuggestRounded sx={iconStyle} />,
  uploading: <SyncRounded sx={{ ...iconStyle, animation: "spin 2s infinite linear" }} />,
  success: <DoneAllRounded sx={iconStyle} />,
  error: <WarningRounded sx={iconStyle} />,
  waiting: <HourglassTopRounded sx={iconStyle} />,
};

// Factory function to create status components
const createStatusComponent = (status: keyof typeof statusIcons, color: ButtonColor, label: string) => {
  return ({ onClick }: { onClick: () => void }) => (
    <StatusButton onClick={onClick} label={label} color={color} startIcon={statusIcons[status]} />
  );
};

// Define a type for the props to ensure type safety
type StatusButtonProps = {
  onClick: () => void;
  label: string;
  color: ButtonColor;
  startIcon: React.ReactNode;
};

// A single component to handle different statuses by passing props
const StatusButton: React.FC<StatusButtonProps> = ({ onClick, label, color, startIcon }) => {
  return (
    <Button sx={editButtonSx} color={color} fullWidth startDecorator={startIcon} onClick={onClick}>
      {label}
    </Button>
  );
};

// Usage examples using the factory function
export const UpdateStatus = createStatusComponent("update", "warning", "Edit");
export const ChangeStatus = createStatusComponent("change", "warning", "Change");
export const ProcessingStatus = createStatusComponent("uploading", "neutral", "Uploading");
export const SuccessStatus = createStatusComponent("success", "success", "SUCCESS");
export const ErrorStatus = createStatusComponent("error", "danger", "ERROR");
export const WaitingStatus = createStatusComponent("waiting", "neutral", "Waiting");
