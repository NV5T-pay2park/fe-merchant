// https://github.dev/jeffersonRibeiro/react-shopping-cart/blob/main/src/services/products.ts

import { Icon } from "@mui/material";
import MKBox from "presentation/components/MKBox";
import MKButton from "presentation/components/MKButton";
import BaseLayout from "presentation/container/BaseLayout";

import { Grid, Container } from "@mui/material";
import ParkCard from "presentation/components/ParkCard";

import { getParks } from "services/park.service";

import { useSelector } from "react-redux";
import { useState, useCallback, useEffect } from "react";
import MKTypography from "presentation/components/MKTypography";

const parkList = require("data/mock/parks.json");

export default function ManagePage() {
  const { user: currentUser } = useSelector((state) => state.auth);

  const [parks, setParks] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchParks = useCallback(() => {
    setIsFetching(true);
    getParks(currentUser, 0).then((parks) => {
      setIsFetching(false);
      setParks(parks);
    });
  }, [setIsFetching, setParks, currentUser]);

  useEffect(() => {
    fetchParks();
  }, [fetchParks]);

  const createNewParkButton = (
    <MKBox
      width="100%"
      position="relative"
      borderRadius="xl"
      mb={5}
      component="section"
      sx={{ overflow: "hidden" }}
    >
      <MKButton variant="gradient" size="medium" color="success">
        <Icon sx={{ mr: 1 }}>add_circle_round</Icon>
        Thêm nhà xe
      </MKButton>
    </MKBox>
  );

  const renderParkCardList = (parks) => (
    parks.map((park) => (
      <Grid key={park.id} item xs={12} md={6} lg={4} sx={{ mb: 6 }}>
        <ParkCard
          image={park.image}
          title={park.name}
          address={park.address}
          time={park.timeWorking}
          information={{
            label: `Còn lại ${park.numberSlotRemaining} chỗ trống`,
            color: "success",
          }}
          actions={[
            {
              route: "https://mc.zalopay.vn/mso-v3/register",
              color: "info",
              label: "Cập nhật",
              icon: "edit",
            },
            {
              route: "https://mc.zalopay.vn/mso-v3/register",
              color: "error",
              label: "Xóa",
              icon: "delete",
            },
          ]}
        />
      </Grid>
    ))
  );

  const renderEmptyParkList = (
    <Container>
      <MKTypography variant="h4" textAlign="center">
        Hiện không có nhà xe nào
      </MKTypography>
    </Container>
  );

  const renderParkList = (
    <MKBox
      component="section"
      pt={3}
      pb={8}
      position="relative"
      mx={-2}
      px={{ xs: 2, lg: 0 }}
      // bgColor="dark"
      
    >
      <Container>
        <Grid container spacing={3} sx={{ mb: 12 }}>
          {((parks?.length === 0) && (!isFetching))
          ? renderEmptyParkList
          : renderParkCardList(parks)
          }
        </Grid>
      </Container>
    </MKBox>
  );

  return (
    <BaseLayout
      title="Quản lý bãi giữ xe"
      breadcrumb={[{ label: "home" }, { label: "Quản lý bãi giữ xe" }]}
    >
      {createNewParkButton}
      {renderParkList}
    </BaseLayout>
  );
}
