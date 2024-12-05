import Box from "@mui/joy/Box";
import Input from "@mui/joy/Input";
import { SxProps } from "@mui/joy/styles/types";
import React, { useEffect } from "react";
import { getInputFocusStyle } from "../theming";
import { IDeckTemplateShapeName } from "./deck-template-shape-name.types";

const mainBoxStyle: SxProps = { display: "flex", flexDirection: "row", alignItems: "center", gap: 1 };

export const DeckTemplateShapeName: React.FC<IDeckTemplateShapeName> = ({
  value,
  placeholder,
  size = "sm",
  readonly = false,
  onChange,
}) => {
  const [inputValue, setInputValue] = React.useState(value);

  useEffect(() => {
    if (value !== inputValue) {
      setInputValue(value);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    <Box sx={mainBoxStyle}>
      <Input
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
        variant="soft"
        size={size}
        readOnly={readonly}
        sx={{
          ...getInputFocusStyle("primary", "soft"),
          flex: 1,
        }}
      />
      {/* 
      <Box sx={iconStyle}>
        <DeckLottieInfo />
      </Box> */}
    </Box>
  );
};
