import { SxProps } from "@mui/joy/styles/types";

export const iconButtonSxProps = ({
  hasShadow,
  textAlign = "center",
  uppercase = true,
}: {
  hasShadow: boolean;
  textAlign: "flex-start" | "flex-end" | "center";
  uppercase: boolean;
}): SxProps => ({
  position: "relative",
  whiteSpace: "nowrap",
  overflow: "hidden",
  fontSize: "11px",
  lineHeight: "12px",
  textTransform: uppercase ? "uppercase" : "none",
  px: 2,
  flex: 1,
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
