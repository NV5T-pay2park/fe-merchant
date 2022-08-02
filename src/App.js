// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// Material Kit 2 React themes
import theme from "assets/theme";
import React, { useEffect } from "react";

import routes from "routes";

import HomePage from "presentation/pages/HomePage";
import { useSelector } from "react-redux";
import InfoSnackbar from "presentation/components/InfoSnackbar";

export default function App() {
  const { pathname } = useLocation();
  const { isLoggedIn } = useSelector((state) => state.auth);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  // recusion all nested row (but current only have non-nested)
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }
      if (route.route) {
        if (route.requireLoggedIn && !isLoggedIn) {
          return null;
        }
        return (
          <Route
            exact
            path={route.route}
            element={
              <React.Suspense fallback={<>...</>}>
                {route.component}
              </React.Suspense>
            }
            key={route.route}
          />
        );
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/home" element={<HomePage /> } />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <InfoSnackbar/>
    </ThemeProvider>
  );
}
