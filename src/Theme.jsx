import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#36190D",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#64b5f6",
      light: "#83c3f7",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#251109",
    },
  },
});

export default Theme;
