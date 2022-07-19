import PropTypes from "prop-types";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Icon from "@mui/material/Icon";
import Collapse from "@mui/material/Collapse";

function NavbarDropdown({
  name,
  icon,
  children,
  collapseStatus,
  light,
  href,
  route,
  collapse,
  ...rest
}) {
  // setup link
  const linkComponent = {
    component: "a",
    href,
    target: "_blank",
    rel: "noreferrer",
  };
  const routeComponent = {
    component: Link,
    to: route,
  };

  return (
    <Fragment>
      <MKBox
        {...rest}
        mx={1}
        p={1}
        display="flex"
        alignItems="baseline"
        color={light ? "white" : "dark"}
        opacity={light ? 1 : 0.8}
        sx={{ cursor: "pointer", userSelect: "none" }}
        {...(route && routeComponent)}
        {...(href && linkComponent)}
      >
        <MKTypography
          variant="body2"
          lineHeight={1}
          color="inherit"
          sx={{ alignSelf: "center", "& *": { verticalAlign: "middle" } }}
        >
          {icon}
        </MKTypography>

        <MKTypography
          variant="body2"
          fontWeight="regular"
          textTransform="capitalize"
          color={light ? "white" : "dark"}
          sx={{ fontWeight: "bold", ml: 1, mr: 0.25 }}
        >
          {name}
        </MKTypography>
        {/* drop down if collapse */}
        <MKTypography
          variant="body2"
          color={light ? "white" : "dark"}
          ml="auto"
        >
          <Icon sx={{ fontWeight: "normal", verticalAlign: "middle" }}>
            {collapse && "keyboard_arrow_down"}
          </Icon>
        </MKTypography>
      </MKBox>
      {children && (
        <Collapse in={Boolean(collapseStatus)} timeout={"auto"} unmountOnExit>
          {children}
        </Collapse>
      )}
    </Fragment>
  );
}

// PropTypes props typo check area
// setting default values for the props
NavbarDropdown.defaultProps = {
  children: false,
  collapseStatus: false,
  light: false,
  href: "",
  route: ""
};

// props type-checking
NavbarDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  children: PropTypes.node,
  collapse: PropTypes.bool.isRequired,
  collapseStatus: PropTypes.bool,
  light: PropTypes.bool,
  href: PropTypes.string,
  route: PropTypes.string,
};

export default NavbarDropdown;

