import Box from "@mui/joy/Box";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import React from "react";
import { DeckLabel } from "../deck-label";
import { fieldBoxStyle } from "./deck-repeater-form-field.styles";
import { DeckRepeaterFormFieldProps } from "./deck-repeater-form-field.types";

export const DeckRepeaterFormField: React.FC<DeckRepeaterFormFieldProps> = ({
  headers = [],
  selected = "",
  onChange = (value?: string | null) => {
    console.info("onChange", value);
  },
  title = "Field",
  description = "Values from this field will be populated",
}) => {
  return (
    <Box sx={fieldBoxStyle}>
      <DeckLabel title={{ text: title }} description={{ text: description }} />
      <Select
        name="name"
        placeholder="Name"
        size="sm"
        variant="soft"
        value={selected}
        color={"primary"}
        sx={{ fontSize: 12 }}
        onChange={(_, value) => {
          onChange(value);
        }}
      >
        {headers.map((operator) => (
          <Option key={operator} value={operator} sx={{ fontSize: 12 }}>
            {operator}
          </Option>
        ))}
      </Select>
    </Box>
  );
};
