import Navbar from "presentation/container/NavBar";

import MKBox from "presentation/components/MKBox"
import MKTypography from "presentation/components/MKTypography";

import * as Typed from "typed.js";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import routes from "routes"

import Team from "./sections/Team";
import { useEffect, useRef } from "react";

function AboutUs() {
  const typedJSRef = useRef(null);
  useEffect(() => {
    const typedJS = new Typed(typedJSRef.current, {
      strings: ["NV5T", "Nhân viên 5 tốt", "Pay2Park"],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    });

    return () => typedJS.destroy();
  }, []);


  return (
    <>
      <Navbar
        routes={routes}
        transparent
        light
        brand="Pay2Park"
      />

      <MKBox
        minHeight="25rem"
        width="100%"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(https://images.unsplash.com/photo-1545100760-db63cbae42b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)`,
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
              mb={3}
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              <span ref={typedJSRef} />
            </MKTypography>

            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              mt={1}
              mb={3}
            >
              Làm việc tốt - Thể lực tốt - Đoàn kết tốt - Kỷ luật tốt - Tinh thần đi nhậu thật tốt
            </MKTypography>

            <MKTypography variant="h6" color="white" mt={2} mb={1}>
              DEMO
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="https://www.youtube.com/watch?v=QJV5pYDVd3Q&t=102s" mr={3}>
                <i className="fab fa-youtube"/>
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="https://github.com/NV5T-pay2park">
                <i className="fab fa-github"/>
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
        <Team />
      </Card>

    </>
  )
}

export default AboutUs;