import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
// type it as any....
const theme = (createMuiTheme as any)({
  typography: {
    h3: {
      color: "#fff",
    },
    loading: "#fff",
  },
  palette: {
    primary: {
      main: "#018346",
    },
    secondary: {
      main: "#58d198",
    },
    error: {
      main: "#f51a19",
    },
    background: {
      default: "#000",
    },
  },
  overrides: {
    MUIDataTableToolbarSelect: {
      root: {
        backgroundColor: "#FFF",
      },
    },
    MUIDataTableFilter: {
      root: {
        backgroundColor: "#FFF",
      },
    },
  },
});

export default theme;
