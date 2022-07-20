import Navbar from "presentation/container/NavBar";

import MKBox from "presentation/components/MKBox"
import MKTypography from "presentation/components/MKTypography";
import MKButton from "presentation/components/MKButton";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import routes from "routes"

import bgImage from "assets/images/bg3.jpg";
import Information from "./sections/Information";


function HomePage() {
  return (
    <>
      <Navbar
        routes={routes}
        transparent
        light
        brand="Pay2Park"
      />

      <MKBox
        minHeight="70vh"
        maxHeight="80vh"
        width="100%"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Giải pháp thanh toán đỗ xe thông minh
            </MKTypography>

            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              mt={1}
              mb={3}
            >
              Nhanh chóng - Đơn giản - Tiện lợi - An toàn
            </MKTypography>
            <MKButton
              color="default"
              sx={{ color: ({ palette: { dark } }) => dark.main }}
            >
              trở thành đối tác ngay
            </MKButton>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
              >
                <i className="fab fa-google-plus" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
      </Card>

    </>
  )
}

export default HomePage;