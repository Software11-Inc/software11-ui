import Box from "@mui/joy/Box";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import Typography from "@mui/joy/Typography";
import React from "react";
import { optionStyle, selectStyle } from "./deck-active-page.styles";
import { DeckActivePageProps } from "./deck-active-page.types";

export const DeckActivePage: React.FC<DeckActivePageProps> = ({
  activePage,
  pages,
  prefix,
  onChangePage,
}) => {
  return (
    <Box sx={{ display: "inline-flex" }}>
      <Select
        value={activePage?.id || null}
        variant="outlined"
        color="primary"
        sx={selectStyle}
        slotProps={{ listbox: { placement: "bottom-start" } }}
        renderValue={(selected) => {
          return (
            <Box sx={{ display: "flex", gap: "0.25rem" }}>
              <Typography fontWeight="bold" color="primary" fontSize={14}>
                {selected?.label}
              </Typography>
            </Box>
          );
        }}
        onChange={(_, newValue) => {
          const page = pages.find((page) => page.id === newValue);
          if (!page) {
            return;
          }
          onChangePage(page);
        }}
      >
        {pages.map((page) => (
          <Option
            key={page.id}
            value={page.id}
            disabled={page.id == activePage.id}
            sx={optionStyle}
          >
            {(page?.name || `${prefix} ${page.index + 1}`) ?? "Page"}
          </Option>
        ))}
      </Select>
    </Box>
  );
};
