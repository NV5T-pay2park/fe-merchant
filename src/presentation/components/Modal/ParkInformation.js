import MKBox from "../MKBox";
import MKTypography from "../MKTypography";
import MKButton from "../MKButton";
import MKInput from "../MKInput";
import MapModal from "./Map";

import MKAvatar from "../MKAvatar";

import { Chip, Container, Divider, Grid, FormControlLabel, Checkbox } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { AddAPhoto } from "@mui/icons-material";

import { useState } from "react";

import { getAllVehiclesType } from "services/park.service";

const handleDeleteVehicle = () => {

}

export default function ParkInformation({ data }) {
  const [vehicles, setVehicles] = useState(getAllVehiclesType)
  const [images, setImages] = useState([
    "https://thumbs.dreamstime.com/b/parking-lot-856838.jpg",
    "https://media.istockphoto.com/photos/dealer-new-cars-stock-picture-id480652712?k=20&m=480652712&s=612x612&w=0&h=dbyTkQ3-PJJMAlNAR2hGxPWX1ODvSJspuDsdvQmOKlI=",
    "https://www.ledgerinsights.com/wp-content/uploads/2020/05/parking-lot-cars.jpg",
    "https://images.unsplash.com/photo-1589018057745-8c699b3f361c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZW1wdHklMjBwYXJraW5nJTIwbG90fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  ]);

  console.log(vehicles)

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
          <MKBox sx={{ cursor: "pointer" }} >
            <AddAPhoto  fontSize="large" />
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
      <Grid
        item
        container
        xs={12}
        sx={{mx:1}}
      >
      {
        vehicles.map((vehicle) => (
          <Grid item key={vehicle.id.toString()} sx={{mb:2}} xs={12} md={4} lg={3}>
            <Chip label={vehicle.name} onDelete={handleDeleteVehicle}/>
          </Grid>
        ))
      }
      </Grid>
    </Container>
  );

  const renderPriceTable = (
    <Container>
      <MKTypography variant="body">Bảng giá</MKTypography>
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

  return (
    <>
      {renderInputForm}

      
    </>
  );
}
