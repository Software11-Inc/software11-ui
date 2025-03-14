import { extendTheme } from "@mui/joy/styles";

export const lightTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        divider: "#e8ebf2",
        primary: {
          50: "#e7e8ed",
          100: "#e8ebf2",
          200: "#dbe3f2",
          300: "#cad6ec",
          400: "#3c4b6d",
          500: "#24345b",
          600: "#1c2847",
          700: "#141d33",
          800: "#0c111e",
          900: "#04060a",
          softColor: "#24345b",
          softActiveColor: "#e8ebf2",
          softActiveBg: "#24345b",
        },
      },
    },
  },
  focus: {
    default: {
      boxShadow: "0 0 0 2px #ffffff, 0 0 0 4px var(--project-color-light), 0 1px 2px 0 black",
    },
  },
  components: {
    JoyCard: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          border: "unset",
          boxShadow: "unset",
          padding: "1rem",
          borderRadius: "unset",
          "&:hover": {
            boxShadow: "unset",
          },
        },
      },
    },
    JoyLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: "unset",
        },
      },
    },
    JoyInput: {
      styleOverrides: {
        root: {
          // "&:focus, &:focus-visible, &:focus-within": {
          //   boxShadow: "0 0 0 2px #ffffff, 0 0 0 4px var(--project-color-light), 0 1px 2px 0 black",
          //   borderColor: "transparent",
          //   outline: "none",
          //   ["&:before"]: { "--Input-focused": 0 },
          // },
        },
      },
    },
    JoyTextarea: {
      styleOverrides: {
        root: {
          "&:focus, &:focus-visible, &:focus-within": {
            boxShadow: "0 0 0 2px #ffffff, 0 0 0 4px var(--project-color-light), 0 1px 2px 0 black",
            borderColor: "transparent",
            outline: "none",

            ["&:before"]: { "--Input-focused": 0 },
          },
          "--Textarea-focusedThickness": "0",
        },
      },
    },
    JoyLink: {
      styleOverrides: {
        root: {
          "&:focus, &:focus-visible, &:focus-within": {
            boxShadow: "0 0 0 2px #ffffff, 0 0 0 4px var(--project-color-light), 0 1px 2px 0 black",
            outline: "none",
          },
        },
      },
    },
    JoyAvatar: {
      styleOverrides: {
        root: {
          boxShadow: "var(--focus-shadow)",
        },
      },
    },
    JoySelect: {},
  },
});
