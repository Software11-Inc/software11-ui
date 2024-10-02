import Box from "@mui/joy/Box";
import Radio from "@mui/joy/Radio";
import Sheet from "@mui/joy/Sheet";
import React from "react";
import { DeckFileList } from "../deck-file-list";
import { DeckLabel } from "../deck-label";
import { projectCardActionClass, projectCardContentClass, projectCardStyle } from "./deck-select-project.styles";
import { IDeckSelectProjectProps } from "./deck-select-project.types";

export const DeckSelectProject: React.FC<IDeckSelectProjectProps> = ({ project, checked, onClick }) => {
  const files = project?.files || [];
  const types = files.map((file) => file.fileType);
  return (
    <React.Fragment>
      <Sheet sx={projectCardStyle} component="div" onClick={onClick}>
        <Box className={projectCardActionClass}>
          <Radio size="lg" variant="soft" checked={checked} />
        </Box>
        <Box className={projectCardContentClass}>
          <DeckLabel
            title={{
              text: String(project?.name),
            }}
            description={{
              text: String(project?.description),
            }}
          />
          <DeckFileList types={types} />
        </Box>
      </Sheet>
    </React.Fragment>
  );
};
