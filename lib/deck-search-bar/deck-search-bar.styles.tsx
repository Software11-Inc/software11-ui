import { inputClasses } from "@mui/joy/Input";
import { SxProps } from "@mui/joy/styles/types";

export const formHelperTextSxProps = {
  fontSize: 12,
};
export const containerStype = (compact = false): SxProps => ({
  ...(compact && {
    overflow: "hidden",
  }),
  height: "2rem",
  zIndex: 1,

  [`&:has(&.${inputClasses.focused})`]: {
    bgcolor: "red",
  },
});

export const searchStyle = (): SxProps => ({
  display: "flex",
  flexDirection: "row",
  gap: 1,
  flex: 1,
  alignItems: "center",
  boxShadow: "unset",
});
