export const formLabelSx = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "primary.500",
};

export const boxSx = {
  display: "flex",
  flexWrap: "wrap",
  gap: 1,
};

const mrMap = {
  sm: -0.5,
  md: -1,
  lg: -1.5,
};

const mtMap = {
  sm: "1px",
  md: "1px",
  lg: "1px",
};

const fontSizeMap = {
  sm: 11,
  md: 12,
  lg: 14,
};

export const buttonSx = (size: "sm" | "lg" | "md" = "sm") => ({
  mr: mrMap[size],
  mt: mtMap[size],
  fontSize: fontSizeMap[size],
  lineHeight: 1.2,
});

export const addOutlinedSx = { fontSize: 14 };

export const formHelperTextSx = {
  fontSize: "9px",
};
