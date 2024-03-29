/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";

// Material Kit 2 React components
import MKBox from "presentation/components/MKBox";
import MKTypography from "presentation/components/MKTypography";
import { Icon } from "@mui/material";

function Breadcrumbs({ routes, ...rest }) {
  return (
    <MKBox bgColor="light" borderRadius="md" py={1} px={2} width="100%">
      <MuiBreadcrumbs {...rest}>
        {routes.map(({ label, route }) => {
          // alway show an icon
          if (label === "home") {
            return (
            <MKBox key={label}>
              <Icon
                fontSize="small"
                sx={{ fontWeight: "normal", verticalAlign: "middle", mr: -0.5 }}
                component={Link}
                to={"/home"}
              >
                home
              </Icon>
            </MKBox>
            )
          }
          // normal case return link to internal
          return (
            route ? (
              <MKTypography
                key={label}
                component={Link}
                to={route}
                variant="button"
                color="text"
                fontWeight="regular"
                opacity={0.8}
                sx={{
                  "&:hover, &:focus": {
                    color: ({ palette: { info } }) => info.main,
                  },
                }}
              >
                {label}
              </MKTypography>
            ) : (
              <MKTypography key={label} variant="button" fontWeight="regular">
                {label}
              </MKTypography>
            )
          )
        }
      )}
        
      </MuiBreadcrumbs>
    </MKBox>
  );
}

// Typechecking props for the Breadcrumbs
Breadcrumbs.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Breadcrumbs;
