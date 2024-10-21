import Box from "@mui/joy/Box";
import { IDeckTemplateShapeName } from "./deck-template-shape-name.types";
import React, { useEffect } from "react";
import Input from "@mui/joy/Input";
import { getInputFocusStyle } from "../theming";
import { DeckLottieInfo } from "../deck-lottie-info";
import { SxProps } from "@mui/joy/styles/types";

const mainBoxStyle: SxProps = { display: "flex", flexDirection: "row", alignItems: "center", gap: 1 };

const iconStyle: SxProps = { display: "flex", alignItems: "center", width: "1.5rem", height: "1.5rem" };

export const DeckTemplateShapeName: React.FC<IDeckTemplateShapeName> = ({
  value,
  placeholder,
  size = "sm",
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
        sx={{
          ...getInputFocusStyle(),
          flex: 1,
        }}
      />

      <Box sx={iconStyle}>
        <DeckLottieInfo />
      </Box>
    </Box>
  );
};
