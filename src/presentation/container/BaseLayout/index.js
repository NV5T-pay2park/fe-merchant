import routes from "routes";

import Navbar from "../NavBar";
import Breadcrumbs from "presentation/components/Breadcrumbs";

import PropTypes from "prop-types";

import MKBox from "presentation/components/MKBox";

import { Container, Grid } from "@mui/material";
import MKTypography from "presentation/components/MKTypography";

function BaseLayout({ breadcrumb, title, children }) {
  return (
    <MKBox
      display="flex"
      flexDirection="column"
      bgColor="white"
      minHeight="100vh"
    >
      <MKBox bgColor="white" shadow="sm" py={0.25}>
        <Navbar routes={routes} transparent relative />
      </MKBox>

      <Container sx={{ mt: 6 }}>
        <Grid
          container
          item
          xs={12}
          flexDirection="column"
          justifyContent="center"
          mx="auto"
        >
          <MKBox width={{ xs: "100%", md: "50%", lg: "25%" }} mb={3}>
            <Breadcrumbs routes={breadcrumb} />
          </MKBox>
          <MKTypography variant="h3" mb={1}>
            {title}
          </MKTypography>
          {children}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BaseLayout;
