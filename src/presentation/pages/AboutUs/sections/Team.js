import thanh from "assets/images/thanh.jpg";
import toan from "assets/images/toan.jpg";
import nhu from "assets/images/nhu.jpg"
import vu from "assets/images/vu.jpg";
import tan from "assets/images/tan.jpg";
import truc from "assets/images/truc.jpg";
import truong from "assets/images/truong.jpg";


import { Container, Grid } from "@mui/material";

import MKBox from "presentation/components/MKBox";
import MKTypography from "presentation/components/MKTypography";
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";


export default function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
      sx={{
        backgroundImage: ({
          palette: { gradients },
          functions: { linearGradient, rgba },
        }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.6),
            rgba(gradients.dark.state, 0.6)
          )}, url(https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244&q=80)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={0} md={2}> <></> </Grid>
          <Grid item xs={12} md={8} sx={{ mb: 6 }} textAlign="center">
            <MKTypography variant="h2" color="white" mb={3}>
              Team members
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8}>
              Những con người đến từ những ngôi trường khác nhau trên Thành phố
              Hồ Chí Minh. <br/> Cùng hội tụ tại đây, ngày đêm làm nên ứng dụng này.
            </MKTypography>
            <MKTypography variant="h5" color="white" pt={3}>
              01/07/2022 - 04/08/2022
            </MKTypography>
          </Grid>
          <Grid item xs={0} md={2}> <></> </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={0} lg={3}><></></Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={thanh}
                name="Tiến Thành"
                position={{color:"primary", label: "Team Leader - Fullstack Deveoper"}}
                description="K19 Honors Program - VNUHCM University of Science"
              />
            </MKBox>
          </Grid>
          <Grid item xs={0} lg={3}></Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={toan}
                name="Thiện Toàn"
                position={{color: "success", label: "Frontend Leader - Deadliner"}}
                description="K19 IT - VNUHCM University of Science"
              />
            </MKBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={nhu}
                name="Huế Như"
                position={{color: "success", label: "Backend Leader - Business Analyst"}}
                description="K19 IT - VNUHCM University of Science"
              />
            </MKBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={tan}
                name="Thanh Tân"
                position={{color: "info", label: "Frontend Developer"}}
                description="K19 IT - University of Information Technology"
              />
            </MKBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={vu}
                name="Xuân Vũ"
                position={{color: "info", label: "Backend Developer"}}
                description="K19 - VNUHCM University of Technology"
              />
            </MKBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={truc}
                name="Trung Trực"
                position={{color: "info", label: "Backend Developer"}}
                description="K19 Honors Program - VNUHCM University of Science"
              />
            </MKBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={truong}
                name="Hữu Trưởng"
                position={{color: "info", label: "Backend Developer - Database Designer"}}
                description="D19 - Posts and Telecommunications Institute of Technology"
              />
            </MKBox>
          </Grid>

        </Grid>
      </Container>
    </MKBox>
  );
}
