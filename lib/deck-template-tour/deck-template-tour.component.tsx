import Box from "@mui/joy/Box";
import { DeckTemplateTourProps } from "./deck-template-tour.types";
import React from "react";
import Typography from "@mui/joy/Typography";
import { DeckLottieInfo } from "../deck-lottie-info";
import {
  closeIconStyle,
  drawerSlotProps,
  headerStyle,
  infoIconStyle,
  mainStepStyle,
  sepatorStyle,
  stepsStyle,
} from "./deck-template-tour.styles";
import IconButton from "@mui/joy/IconButton";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Drawer from "@mui/joy/Drawer";
import DialogTitle from "@mui/joy/DialogTitle";
import { DeckLabel } from "../deck-label";
import ModalClose from "@mui/joy/ModalClose";
import Divider from "@mui/joy/Divider";

export const DeckTemplateTour: React.FC<DeckTemplateTourProps> = ({ open, onClose }) => {
  const [activeStep, setActiveStep] = React.useState(1);
  const maxSteps = 3;

  return (
    <Drawer open={open} onClose={onClose} anchor="bottom" slotProps={drawerSlotProps}>
      <DialogTitle sx={{ p: 1 }}>
        <DeckLabel
          title={{ text: "Template Overview" }}
          description={{ text: "Take a look at all the template features." }}
          size="md"
        />
      </DialogTitle>
      <ModalClose sx={closeIconStyle} color="primary" />
      <Divider />
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <TemplateTourHeader activeStep={activeStep} maxSteps={maxSteps} onStepChange={setActiveStep} />
        <TemplateTourContent activeStep={activeStep} />
      </Box>
    </Drawer>
  );
};

interface TemplateTourHeaderProps {
  activeStep: number;
  maxSteps: number;
  onStepChange: (step: number) => void;
}

const TemplateTourHeader: React.FC<TemplateTourHeaderProps> = ({ activeStep, maxSteps, onStepChange }) => {
  return (
    <React.Fragment>
      <Box sx={headerStyle}>
        <Box sx={stepsStyle}>
          {activeStep} / {maxSteps}
        </Box>
        <Box sx={sepatorStyle}></Box>
        <Box>
          <IconButton
            size="sm"
            color="primary"
            onClick={() => onStepChange(activeStep - 1)}
            disabled={activeStep === 1}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            size="sm"
            color="primary"
            onClick={() => onStepChange(activeStep + 1)}
            disabled={activeStep === maxSteps}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export interface TemplateTourContentProps {
  activeStep: number;
}

export const TemplateTourContent: React.FC<TemplateTourContentProps> = ({ activeStep }) => {
  switch (activeStep) {
    case 1:
      return <TemplateTourStep1 />;
    case 2:
      return <TemplateTourStep2 />;
    case 3:
      return <TemplateTourStep3 />;
    default:
      return null;
  }
};

export const TemplateTourStep1: React.FC = () => {
  return (
    <Box sx={mainStepStyle}>
      <Typography fontSize={16} color="primary" fontWeight="bold">
        What is a template?
      </Typography>
      <Typography fontSize={14} color="primary">
        A template is useful when you want to create consistent slide layouts for multiple sets of identical data. With
        templates, you can <b>link shapes</b> on your slides to Excel tables and <b>generate a slide</b> for each row of
        data.
      </Typography>
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {/* <ExcelLottie /> */}
      </Box>
    </Box>
  );
};

export const TemplateTourStep2: React.FC = () => {
  return (
    <Box sx={mainStepStyle}>
      <Typography fontSize={16} color="primary" fontWeight="bold">
        Where does the data come from?
      </Typography>
      <Typography fontSize={14} color="primary">
        Templates use the Deckcraft Datasets system. This allows you to <b>select any dataset</b> you&apos;ve created in
        your Deckcraft app and <b>link it to a slide</b>. Currently, supported data sources include Microsoft Excel,
        Google Sheets, and Airtable.
      </Typography>
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {/* <LinkingLottie /> */}
      </Box>
    </Box>
  );
};

export const TemplateTourStep3: React.FC = () => {
  return (
    <Box sx={mainStepStyle}>
      <Typography fontSize={16} color="primary" fontWeight="bold">
        How do you build a template?
      </Typography>
      <Typography fontSize={14} color="primary">
        You can build a template simply by selecting &quot;<b>new template</b>&quot; and giving your template a name.
      </Typography>
      <Typography fontSize={14} color="primary">
        Once you do that you can select individual shapes in powerpoint and the app will ask you whether you want to
        make them a placeholder or connect them to a dataset.
      </Typography>
      <Box>
        <Box fontSize={14} display="inline-block" sx={{ color: "primary.500" }}>
          Don&apos;t forget there is always a
          <Box sx={infoIconStyle}>
            <DeckLottieInfo />
          </Box>
          icon in the top right corner to help you on whatever step you are on.
        </Box>
      </Box>

      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", height: "5rem" }}>
        {/* <DeckLottieBuild /> */}
      </Box>
    </Box>
  );
};
