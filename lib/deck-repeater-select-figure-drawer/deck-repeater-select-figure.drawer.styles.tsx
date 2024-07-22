export const itemStyle = {
  display: "flex",
  gap: 1,
  alignItems: "center",
  p: 1,

  transition: "0.2s ease-in-out",
  cursor: "pointer",

  "&:not(:last-of-type)": {
    borderBottom: "1px solid",
    borderColor: "background.level1",
  },

  "&:hover": {
    pl: 2,
    backgroundColor: "background.level1",
  },
};
