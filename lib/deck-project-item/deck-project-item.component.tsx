import Box from "@mui/joy/Box";
import React from "react";
import { DeckSection } from "../deck-section";
import { IDeckProjectItemProps } from "./deck-project-item.types";

export const DeckProjectItem = <T,>({
  project,
  itemTemplate,
  defaultExpanded = true,
  onChange = () => {},
}: IDeckProjectItemProps<T>) => {
  return (
    <React.Fragment key={project.header.label}>
      <DeckSection
        action={{
          text: "",
          onClick: () => null,
          hidden: true,
        }}
        separator={{
          title: project?.header?.label,
          description: project?.header?.description,
          color: "primary",
          count: project?.data?.length,
        }}
        hasLine={false}
        defaultExpanded={defaultExpanded}
        onChange={onChange}
        content={
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {project?.data?.map((item: T) => itemTemplate(item))}
          </Box>
        }
      />
    </React.Fragment>
  );
};
