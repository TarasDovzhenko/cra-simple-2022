import React from "react";
import { App } from "./App";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

export function AppWrapper() {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <App />
    </ThemeProvider>
  );
}
