import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";
import MKInput from "../../../components/MKInput";


import {
  Chip,
  Container,
  Grid,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Skeleton,
} from "@mui/material";


import React, { useState } from "react";

import { getAllVehiclesType } from "services/park.service";
import MKButton from "presentation/components/MKButton";
import PriceTable from "./PriceTable";
import ImagePreview from "./ImagePreview";

const MapModal = React.lazy(() => import("./Map"));

export default function ParkInformation({ useParkDetail }) {
  const allVehiclesType = getAllVehiclesType();

  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [isOpenAllDay, setIsOpenAllDay] = useState(false);

  const {
    vehicles,
    setVehicles,
    images,
    setImages,
    previewImages,
    setPreviewImages,
    position,
    setPosition,
    street,
    setStreet,
    ward,
    setWard,
    district,
    setDistrict,
    city,
    setCity,
    name,
    setName,
    openTime,
    setOpenTime,
    closeTime,
    setCloseTime,
    phone,
    setPhone,
    numberSlot,
    setNumberSlot,
    rows,
    setRows,
  } = useParkDetail;

  const handleDeleteVehicle = (e, value) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== value));
  };

  const handleChangeSelectedVehicle = (e) => {
    setSelectedVehicle(e.target.value);
  };

  const handleAddVehicle = () => {
    if (selectedVehicle === "") return;
    if (vehicles.find((x) => x.id === selectedVehicle)) {
      // if already exists
      return;
    }
    let newVehicles = allVehiclesType.find((x) => x.id === selectedVehicle);
    setVehicles(vehicles.concat({ ...newVehicles }));
  };

  const handleConfirmPosition = (value) => {
    setPosition(value);
  };

  const handleChangeOpenTime = (e) => {
    if (!isOpenAllDay) {
      setOpenTime(e.target.value);
    }
  };

  const handleChangeCloseTime = (e) => {
    if (!isOpenAllDay) {
      setCloseTime(e.target.value);
    }
  };

  const handleCheckOpenAllDay = (e) => {
    setIsOpenAllDay(e.target.checked);
    if (e.target.checked) {
      setOpenTime("00:00");
      setCloseTime("00:00");
    }
  };

  const renderInformation = (
    <Container>
      <MKTypography variant="body">Thông tin nhà xe</MKTypography>
      <Grid container item xs={12} lg={10} sx={{ mx: "auto" }}>
        <MKBox width="100%" component="form" autocomplete="off">
          <MKBox p={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <MKInput
                  variant="outlined"
                  label="Tên nhà xe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MKInput
                  variant="outlined"
                  label="Đường"
                  fullWidth
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MKInput
                  variant="outlined"
                  label="Phường"
                  fullWidth
                  value={ward}
                  onChange={(e) => setWard(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MKInput
                  variant="outlined"
                  label="Quận"
                  fullWidth
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MKInput
                  variant="outlined"
                  label="Thành phố"
                  fullWidth
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <React.Suspense fallback={<Skeleton variant="rectangular"/>}>
                  <MapModal confirmPosition={handleConfirmPosition} />
                </React.Suspense>
              </Grid>
              <Grid item xs={12} md={8}>
                {/* <MKInput
                  variant="outlined"
                  label="Tọa độ"
                  disabled
                  fullWidth
                  value={JSON.stringify(position)}
                /> */}
                <MKTypography variant="body2" mt={1}>
                  {position
                    ? `(${position.lat.toFixed(6)}, ${position.lng.toFixed(6)})`
                    : "Chọn vị trí trên bản đồ"}
                </MKTypography>
              </Grid>

              <Grid item xs={12} md={6} lg={4}>
                <MKInput
                  type="time"
                  variant="outlined"
                  label="Giờ mở cửa"
                  value={openTime}
                  onChange={handleChangeOpenTime}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <MKInput
                  type="time"
                  variant="outlined"
                  label="Giờ đóng cửa"
                  value={closeTime}
                  onChange={handleChangeCloseTime}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={12} lg={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isOpenAllDay}
                      onChange={handleCheckOpenAllDay}
                    />
                  }
                  label="Cả ngày"
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <MKInput
                  type="tel"
                  variant="outlined"
                  label="Số điện thoại"
                  fullWidth
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <MKInput
                  type="number"
                  variant="outlined"
                  label="Số chỗ giữ xe ước tính"
                  fullWidth
                  value={numberSlot}
                  onChange={(e) => setNumberSlot(e.target.value)}
                ></MKInput>
              </Grid>
            </Grid>
          </MKBox>
        </MKBox>
      </Grid>
    </Container>
  );

  const renderPreviewImages = (
    <ImagePreview
      images={images}
      setImages={setImages}
      previewImages={previewImages}
      setPreviewImages={setPreviewImages}
    />
  );

  const renderAvailableVehicles = (
    <Container>
      <MKTypography variant="body">Danh sách phương tiện </MKTypography>
      <Grid item container xs={12} lg={10} sx={{ mx: "auto" }}>
        <MKBox width="100%" component="form">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControl
                sx={{ m: 1, p: 1, width: "100%", height: "5vh" }}
                size="large"
              >
                <InputLabel>Loại xe</InputLabel>
                <Select
                  value={selectedVehicle}
                  onChange={handleChangeSelectedVehicle}
                  label="Loại xe"
                  sx={{ height: "100%" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {allVehiclesType.map((vehicle) => (
                    <MenuItem key={vehicle.id} value={vehicle.id}>
                      {vehicle.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <MKButton
                sx={{ mt: 2, p: 1 }}
                size="small"
                color="info"
                variant="gradient"
                onClick={handleAddVehicle}
              >
                Thêm loại xe
              </MKButton>
            </Grid>
          </Grid>
        </MKBox>

        {vehicles.map((vehicle) => (
          <Grid item key={vehicle.id} sx={{ mb: 1, ml: 1 }}>
            <Chip
              label={vehicle.name}
              onDelete={(e) => handleDeleteVehicle(e, vehicle.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );

  const renderPriceTable = (
    <Container>
      <MKTypography variant="body">Bảng giá</MKTypography>
      <MKBox width="100%" sx={{ mx: "auto", p: 2 }}>
        <PriceTable vehicles={vehicles} rows={rows} setRows={setRows} />
      </MKBox>
    </Container>
  );

  const renderInputForm = (
    <MKBox p={2} sx={{ overflowY: "scroll" }}>
      {renderInformation}
      {renderAvailableVehicles}
      {renderPriceTable}
      {renderPreviewImages}
    </MKBox>
  );

  return <>{renderInputForm}</>;
}
