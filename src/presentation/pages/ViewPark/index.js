/* eslint-disable no-unused-vars */
import { Container, Grid, Icon, MenuItem, Select } from "@mui/material";

import MKBox from "presentation/components/MKBox";
import MKButton from "presentation/components/MKButton";
import MKTypography from "presentation/components/MKTypography";
import BaseLayout from "presentation/container/BaseLayout";
import QrModal from "presentation/container/Modal/CheckinModal";

import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { handleReceiveMessage } from "services/manage.service";

import { getAllAvailableStatus } from "services/manage.service";
import { changeParkStatus } from "services/manage.service";
import Socket from "services/socket";
import CheckinBox from "./CheckinBox";
import CheckoutBox from "./CheckoutBox";
import TicketTable from "./TicketTable";

export default function ViewPark({ title }) {
  const { parkId } = useParams();
  const [parkStatus, setParkStatus] = useState(0);
  const [isEnableCheckin, setIsEnableCheckin] = useState(false);
  const [currentCheckInData, setCurrentCheckInData] = useState();

  const { connect, messages } = Socket(parkId);
  // reconnect every re-render or connect change
  useEffect(() => {
    connect();
  }, [connect])

  useEffect(() => {
    handleReceiveMessage(messages, setIsEnableCheckin, setCurrentCheckInData);
  }, [messages]);

  const handleChangeStatus = (e) => {
    setParkStatus(e.target.value);
  };

  const handleSaveStatus = () => {
    changeParkStatus(parkStatus);
  };

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
                {/* checkin show qr code */}
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{ pr: 2 }}
                  display="flex"
                  justifyContent="flex-end"
                >
                  <QrModal parkId={parkId} />
                </Grid>
                {/* checkout button open new tab*/}
                <Grid item xs={12} md={2}>
                  <MKButton
                    size="large"
                    variant="gradient"
                    color="success"
                    rel="noopener noreferrer"
                    component={Link}
                    target="_blank"
                    to={`/manage/checkout/${parkId}`}
                  >
                    <Icon sx={{ mr: 1 }}>qr_code_scanner</Icon>
                    Checkout
                  </MKButton>
                </Grid>
              </Grid>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
    );
  };

  const renderContent = (
    <MKBox component="section">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <TicketTable data={[]} />
          </Grid>
          <Grid container item xs={12} lg={6} direction="column">
            {isEnableCheckin && <CheckinBox checkInData={currentCheckInData}/>}
            <CheckoutBox parkId = {parkId}/>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );

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
      {renderContent}
    </BaseLayout>
  );
}
