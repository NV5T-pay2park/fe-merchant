import {
  Container,
  Grid,
  Icon,
  MenuItem,
  Select,
} from "@mui/material";

import MKBox from "presentation/components/MKBox";
import MKButton from "presentation/components/MKButton";
import MKTypography from "presentation/components/MKTypography";
import BaseLayout from "presentation/container/BaseLayout";

import { useState } from "react";

import { useParams } from "react-router-dom";

import { getAllAvailableStatus } from "services/manage.service";
import { changeParkStatus } from "services/manage.service";

export default function ViewPark({ title }) {
  const { parkId } = useParams();
  const [parkStatus, setParkStatus] = useState(0)

  const handleChangeStatus = (e) => {
    setParkStatus(e.target.value);
  }

  const handleSaveStatus = () => {
    changeParkStatus(parkStatus);
  }

  const renderStatusConfig = () => {
    const renderSelection = (
      <Select 
        sx={{ width: "100%", height: "2.5rem", fontWeight: "medium" }}
        value={parkStatus}
        onChange={handleChangeStatus}
      >
        {getAllAvailableStatus().map((status) => (
          <MenuItem key={status.status} value={status.status}>
            {status.label}
          </MenuItem>
        ))}
      </Select>
    );
    return (
      <MKBox
        width="100%"
        position="relative"
        borderRadius="xl"
        mb={5}
        component="section"
        align="center"
      >
        <Container>
          <Grid container item xs={12} md={12} lg={12}>
            <MKBox p={3} width="100%" spacing={3}>
              <Grid container>
                <Grid item xs={12} md={2}>
                  <MKTypography variant="h5" sx={{ mt: 0.5 }} align="center">
                    Trạng thái:
                  </MKTypography>
                </Grid>
                <Grid item xs={12} md={2}>
                  {renderSelection}
                </Grid>
                <Grid item xs={12} md={2}>
                  <MKButton
                    variant="gradient"
                    size="small"
                    color="info"
                    sx={{ ml: 3 }}
                    onClick={handleSaveStatus}
                  >
                    Lưu
                  </MKButton>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="flex-end"
                >
                  <MKButton size="large" variant="gradient" color="dark">
                    <Icon sx={{mr:1}}>qr_code_scanner</Icon>
                    QR checkin
                  </MKButton>
                </Grid>
              </Grid>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
    );
  };

  return (
    <BaseLayout
      title={title}
      breadcrumb={[
        { label: "home" },
        { label: "Quản lý bãi giữ xe", route: "/manage" },
        { label: title },
      ]}
    >
      {renderStatusConfig()}
    </BaseLayout>
  );
}
