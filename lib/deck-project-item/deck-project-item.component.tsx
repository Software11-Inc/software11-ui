import Box from "@mui/joy/Box";
import React from "react";
import { DeckLabel } from "../deck-label";
import { IDeckProjectItemProps } from "./deck-project-item.types";

export const DeckProjectItem = <T,>({ project, itemTemplate }: IDeckProjectItemProps<T>) => {
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
            gap: 2,
          }}
        >
          {project?.data?.map((item: T) => itemTemplate(item))}
        </Box>
      </Box>
    </React.Fragment>
  );
};
