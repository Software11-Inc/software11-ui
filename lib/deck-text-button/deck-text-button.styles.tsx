import { SxProps } from "@mui/joy/styles/types";

const textSize = {
  sm: "11px",
  md: "14px",
  lg: "16px",
};

export const iconButtonSxProps = ({
  hasShadow,
  textAlign = "center",
  uppercase = true,
  size = "sm",
}: {
  size?: "sm" | "md" | "lg";
  hasShadow: boolean;
  textAlign: "flex-start" | "flex-end" | "center";
  uppercase: boolean;
}): SxProps => ({
  position: "relative",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textTransform: uppercase ? "uppercase" : "none",
  px: 2,
  flex: 1,
  fontSize: textSize[size],
  ...(hasShadow && {
    boxShadow: "sm",
  }),
  justifyContent: textAlign,
  "&:hover, &.active": {
    "& .label-text": {
      transform: "translateY(0) scale(1)",
    },
  },
});
