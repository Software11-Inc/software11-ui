import Box from "@mui/joy/Box";
import React from "react";
import { DeckLabel } from "../deck-label";
import { IDeckProjectItemProps } from "./deck-project-item.types";

export const DeckProjectItem: React.FC<IDeckProjectItemProps> = ({ project, itemTemplate }) => {
  return (
    <React.Fragment key={project.header.label}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <DeckLabel
          key={project?.header?.label}
          color="primary"
          title={{
            text: project?.header?.label,
          }}
          description={{
            text: project?.header?.description,
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {project?.data?.map((item, index) => (
            <React.Fragment key={index + item?.header?.label}>{itemTemplate(item)}</React.Fragment>
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
};
