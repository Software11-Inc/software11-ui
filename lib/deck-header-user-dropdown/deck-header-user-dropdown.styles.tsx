import { SxProps } from "@mui/joy/styles/types";

export const avatarSmStyle: SxProps = {
  width: "1.25rem",
  height: "1.25rem",
  aspectRatio: "1",
  boxShadow: "unset",
};

export const avatarLgStyle: SxProps = {
  width: "2.5rem",
  height: "2.5rem",
  aspectRatio: "1",
  boxShadow: "unset",
};

export const rowStyle: SxProps = {
  display: "flex",
  gap: 1,
  alignItems: "center",
};

export const sectionStyle: SxProps = {
  ...rowStyle,
  p: 1,
  transition: "background-color 0.125s",
  "&:hover": {
    backgroundColor: "background.surface",
  },
};

export const columnStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
};

export const menuStyle: SxProps = {
  width: "calc(100vw - 3rem)",
  borderColor: "background.level1",
  boxShadow: "shadow.level1",
  p: 0,
  boxSizing: "border-box",
};

export const companyStyle: SxProps = {
  width: "2.5rem",
  height: "1.5rem",
  display: "flex",
};
