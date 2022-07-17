// @mui material components
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
// import theme from "assets/theme";
import AboutUs from "./pages/AboutUs";

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <AboutUs />
    </ThemeProvider>
  );
}
