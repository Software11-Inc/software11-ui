import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";

import "@fontsource/material-icons";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../lib/style.css";

import en from "javascript-time-ago/locale/en";
import TimeAgo from "javascript-time-ago";
TimeAgo.addDefaultLocale(en);

/* TODO: update import for your custom theme configurations */
import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider } from "@mui/joy/styles/CssVarsProvider";
import { lightTheme } from "../src/themes";

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
    },
    defaultTheme: "light",
    Provider: CssVarsProvider,
    GlobalStyles: CssBaseline,
  }),
];

const preview: Preview = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    controls: {
      expanded: true,
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: lightTheme.palette.background.body },
        { name: "dark", value: lightTheme.colorSchemes.dark.palette.background.body },
      ],
    },
  },

  decorators,
  tags: ["autodocs"],
};

export default preview;
