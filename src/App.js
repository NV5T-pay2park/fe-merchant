// @mui material components
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// Material Kit 2 React themes
import theme from "assets/theme";
import AboutUs from "./pages/AboutUs";

// const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/presentation" element={<AboutUs />} />
          <Route path="*" element={<Navigate to="/presentation" />} />
        </Routes>
    </ThemeProvider>
  );
}
