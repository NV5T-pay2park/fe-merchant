import { useState, useEffect } from "react";

import PropTypes from "prop-types";

import NavbarDropdown from "./NavbarDropdown";
import NavbarMobile from "./NavbarMobile";

import Container from "@mui/material/Container";

import breakpoints from "assets/theme/base/breakpoints";
import MKBox from "components/MKBox";
import { Link } from "react-router-dom";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

import Icon from "@mui/material/Icon";


/**
 * default navigation bar
 * @param {string} brand: name of brand (Pay2Park)
 * @param {array} routes: routes in navbar
 * @param {bool} transparent: background
 * @param {bool} light: light mode
 * @param {} action:
 * @param {bool} sticky: sticky the navbar (always appear on top)
 * @param {bool} relative:
 * @param {bool} center:
 */
function Navbar({
  brand,
  routes,
  transparent,
  light,
  action,
  sticky,
  relative,
  center,
}) {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  // once run once to set navbar for mobile or not
  useEffect(() => {
    // set the display state for Navbar on Mobile
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }
    // listen when resizing the window
    window.addEventListener("resize", displayMobileNavbar);

    // initial
    displayMobileNavbar();

    // cleanup useEffect run on unmount
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

  // render default navbar
  const renderNavbarItems = routes.map(
    ({ name, icon, href, route, collapse }) => (
      <NavbarDropdown
        key={name}
        name={name}
        icon={icon}
        href={href}
        route={route}
        collapse={Boolean(collapse)}
        light={light}
        // TODO: onMouseEnter when mouse enter show collapse preview
        // TODO: onMouseLeave close preview
      />
    )
  );

  // TODO: do under when need
  // render the routes on the dropdown menu (if many page routes in one label)
  // render routes dropdown menu
  // render nested routes inside the dropdown menu routes
  // render dropdown menu for nester dropdowns

  return (
    <Container sx={sticky ? { position: "sticky", top: 0, zIndex: 10 } : null}>
      <MKBox
        px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
        py={1}
        mx={relative ? 0 : 3}
        my={relative ? 0 : 2}
        width={relative ? "100%" : "calc(100% - 48px)"}
        borderRadius="xl"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        position={relative ? "relative" : "absolute"}
        left={0}
        zIndex={3}
        sx={
          // function return object
          ({
            palette: { transparent: transparentColor, white },
            functions: { rgba },
          }) => ({
            backgroundColor: transparent
              ? transparentColor.main
              : rgba(white.main, 0.8),
            backdropFilter: transparent ? "none" : `saturate(200%) blur(30px) `,
          })
        }
      >
        <MKBox
          display="flex"
          justifycontent="space-between"
          alignItems="center"
        >
          <MKBox
            component={Link}
            to="/"
            lineHeight={1}
            paddingY={transparent ? 1.5 : 0.75}
            paddingLeft={relative || transparent ? 0 : { xs: 0, lg: 1 }}
          >
            <MKTypography
              variant="h3"
              fontWeight="bold"
              color={light ? "success" : "dark"}
              display="inline"
            >
              Pay
            </MKTypography>
            <MKTypography
              variant="h3"
              fontWeight="bold"
              color={light ? "light" : "dark"}
              display="inline"
            >
              2
            </MKTypography>
            <MKTypography
              variant="h3"
              fontWeight="bold"
              color={light ? "info" : "dark"}
              display="inline"
            >
              Park
            </MKTypography>
            
          </MKBox>

          <MKBox
            color="inherit"
            display={{ xs: "none", lg: "flex" }}
            marginLeft="auto"
            marginRight={center ? "auto" : 0}
          >
            {renderNavbarItems}
          </MKBox>
          {/* show action button to navigate to register*/}
          <MKBox ml={{ xs: "auto", lg: 0 }}>
            {action &&
              (action.type === "internal" ? (
                <MKButton
                  component={Link}
                  to={action.route}
                  variant={
                    action.color === "white" || action.color === "default"
                      ? "contained"
                      : "gradient"
                  }
                  color={action.color ? action.color : "info"}
                  size="small"
                >
                  {action.label}
                </MKButton>
              ) : (
                <MKButton
                  component="a"
                  href={action.route}
                  target="_blank"
                  rel="noreferrer"
                  variant={
                    action.color === "white" || action.color === "default"
                      ? "contained"
                      : "gradient"
                  }
                  color={action.color ? action.color : "info"}
                  size="small"
                >
                  {action.label}
                </MKButton>
              ))}
          </MKBox>
          {/* show sandwich bar if mobile view */}
          <MKBox
            display={{ xs: "inline-block", lg: "none" }}
            lineHeight={0}
            e
            paddingY={1.5}
            paddingLeft={1.5}
            color={transparent ? "white" : "inherit"}
            sx={{ cursor: "pointer" }}
            onClick={openMobileNavbar}
          >
            <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
          </MKBox>
        </MKBox>
        {/* show mobile navbar view if small view */}
        <MKBox
          backgroundColor={transparent ? "white" : "transparent"}
          shadow={transparent ? "lg" : "none"}
          borderRadius="xl"
          paddingX={transparent ? 2 : 0}
        >
          {mobileView && <NavbarMobile routes={routes} open={mobileNavbar} />}
        </MKBox>
      </MKBox>
    </Container>
  );
}

Navbar.defaultProps = {
  brand: "Pay2Park",
  transparent: true,
  light: true,
  action: false,
  relative: false,
  center: false,
  sticky: false,
};

Navbar.propTypes = {
  brand: PropTypes.string.isRequired,
  transparent: PropTypes.bool,
  sticky: PropTypes.bool,
  relative: PropTypes.bool,
  center: PropTypes.bool,
  light: PropTypes.bool,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
        "default",
        "white",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
};

export default Navbar;
