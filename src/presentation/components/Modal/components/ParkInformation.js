import MKBox from "../../MKBox";
import MKTypography from "../../MKTypography";
import MKInput from "../../MKInput";
import MapModal from "./Map";

import MKAvatar from "../../MKAvatar";

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
} from "@mui/material";

import { AddAPhoto } from "@mui/icons-material";

import { useState } from "react";

import { getAllVehiclesType } from "services/park.service";
import MKButton from "presentation/components/MKButton";
import PriceTable from "./PriceTable";

export default function ParkInformation({ data }) {
  const allVehiclesType = getAllVehiclesType();

  const [vehicles, setVehicles] = useState([]);
  const [images, setImages] = useState([
    "https://thumbs.dreamstime.com/b/parking-lot-856838.jpg",
    "https://media.istockphoto.com/photos/dealer-new-cars-stock-picture-id480652712?k=20&m=480652712&s=612x612&w=0&h=dbyTkQ3-PJJMAlNAR2hGxPWX1ODvSJspuDsdvQmOKlI=",
    "https://www.ledgerinsights.com/wp-content/uploads/2020/05/parking-lot-cars.jpg",
    "https://images.unsplash.com/photo-1589018057745-8c699b3f361c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZW1wdHklMjBwYXJraW5nJTIwbG90fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  ]);
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const handleDeleteVehicle = (e, value) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== value));
  };

  const handleChangeSelectedVehicle = (e) => {
    setSelectedVehicle(e.target.value);
  };

  const handleAddVehicle = () => {
    if (!selectedVehicle) return;
    if (vehicles.find((x) => x.id === selectedVehicle)) {
      // if already exists
      return;
    }
    let newVehicles = allVehiclesType.find((x) => x.id === selectedVehicle);
    setVehicles(vehicles.concat({ ...newVehicles }));
  };

  const renderInformation = (
    <Container>
      <MKTypography variant="body">Thông tin nhà xe</MKTypography>
      <Grid container item xs={12} lg={10} sx={{ mx: "auto" }}>
        <MKBox width="100%" component="form" autocomplete="off">
          <MKBox p={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <MKInput variant="outlined" label="Tên nhà xe" fullWidth />
              </Grid>
              <Grid item xs={12} md={10}>
                <MKInput variant="outlined" label="Địa chỉ" fullWidth />
              </Grid>
              <Grid item xs={12} md={2}>
                <MapModal />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <MKInput
                  type="time"
                  variant="outlined"
                  label="Giờ mở cửa"
                  value="08:00"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <MKInput
                  type="time"
                  variant="outlined"
                  label="Giờ đóng cửa"
                  value="22:00"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={12} lg={3}>
                <FormControlLabel control={<Checkbox />} label="Cả ngày" />
              </Grid>
              <Grid item xs={12} md={12}>
                <MKInput
                  type="tel"
                  variant="outlined"
                  label="Số điện thoại"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <MKInput
                  type="number"
                  variant="outlined"
                  label="Số chỗ giữ xe ước tính"
                  fullWidth
                ></MKInput>
              </Grid>
            </Grid>
          </MKBox>
        </MKBox>
      </Grid>
    </Container>
  );

  const renderPreviewImages = (
    <Container>
      <MKTypography variant="body">Hình ảnh minh họa</MKTypography>
      <Grid
        item
        container
        md={12}
        lg={12}
        xs={12}
        sx={{ mx: 3 }}
        align="center"
      >
        <Grid
          item
          md={6}
          lg={3}
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <MKBox sx={{ cursor: "pointer" }}>
            <AddAPhoto fontSize="large" />
            <MKTypography variant="body2">Thêm ảnh</MKTypography>
          </MKBox>
        </Grid>
        {images.map((image) => (
          <Grid item md={6} lg={3} xs={12} key={image.toString()}>
            <MKAvatar src={`${image}`} size="xxl" variant="square" />
          </Grid>
        ))}
      </Grid>
    </Container>
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
                    <MenuItem
                      key={vehicle.id.toString()}
                      value={vehicle.id.toString()}
                    >
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
          <Grid item key={vehicle.id.toString()} sx={{ mb: 1, ml: 1 }}>
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
      <MKBox width="100%" sx={{mx:"auto", p:2}}>
        <PriceTable vehicles={vehicles}/>
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
