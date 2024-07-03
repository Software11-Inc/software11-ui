import { SxProps } from "@mui/joy/styles/types";

export const iconButtonSxProps = ({ hasShadow }: { hasShadow: boolean }): SxProps => ({
  position: "relative",
  height: "2.75rem",
  whiteSpace: "nowrap",
  overflow: "hidden",
  fontSize: "11px",
  lineHeight: "12px",
  textTransform: "uppercase",
  px: 2,
  flex: 1,
  ...(hasShadow && {
    boxShadow: "sm",
  }),
  "&:hover, &.active": {
    "& .label-text": {
      transform: "translateY(0) scale(1)",
    },
  },
});
