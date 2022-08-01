// https://github.dev/jeffersonRibeiro/react-shopping-cart/blob/main/src/services/products.ts
// https://github1s.com/jgudo/ecommerce-react/blob/HEAD/src/views/admin/products/index.jsx#L17
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
import EditParkDetail from "presentation/container/Modal/EditParkDetail";
import { ACTION_BUTTON_STYLE } from "shared/constants/styles";

export default function ManagePage() {
  const { user: currentUser } = useSelector((state) => state.auth);

  const [parks, setParks] = useState(null);
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

  const formatWorkingTime = (timeOpen, timeClose) => {
    return timeOpen + " - " + timeClose;
  }

  const formatInformation = (currentServing, status) => {
    return {
      label: `Đang phục vụ ${currentServing} xe`,
      color: status === 0 ? "success" : "warning"
    }
  }

  const handleCreateNewPark = () => {

  }

  const createNewParkButton = (
    <MKBox
      width="100%"
      position="relative"
      borderRadius="xl"
      mb={5}
      component="section"
      sx={{ overflow: "hidden" }}
    >
      <EditParkDetail parkId={-1} action={ACTION_BUTTON_STYLE["create"]}/>
    </MKBox>
  );

  const renderParkCardList = (parks) => (
    parks.map((park) => (
      <Grid key={park.id} item xs={12} md={6} lg={4} sx={{ mb: 6 }}>
        <ParkCard
          id={park.id}
          image={park.image}
          title={park.name}
          address={park.address}
          time={formatWorkingTime(park.timeOpen, park.timeClose)}
          information={formatInformation(park.currentServing, park.status)}
          actions={["edit", "delete"]}
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
          {parks
          ? parks.length === 0
          ? renderEmptyParkList
          : renderParkCardList(parks)
          : null
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
