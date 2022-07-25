import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";
import { AddAPhoto } from "@mui/icons-material";

// Material Kit 2 React components
import MKBox from "presentation/components/MKBox";
import MKButton from "presentation/components/MKButton";
import MKTypography from "presentation/components/MKTypography";
import {
  Checkbox,
  FormControlLabel,
  Icon,
  ImageList,
  Stack,
} from "@mui/material";
import MKInput from "../MKInput";
import MapModal from "./Map";
import { CheckBox } from "@mui/icons-material";
import { Box } from "@mui/system";
import MKAvatar from "../MKAvatar";

export default function EditParkDetail({ action }) {
  const [show, setShow] = useState(false);
  const [images, setImages] = useState([
    "https://www.ledgerinsights.com/wp-content/uploads/2020/05/parking-lot-cars.jpg",
    "https://media.istockphoto.com/photos/dealer-new-cars-stock-picture-id480652712?k=20&m=480652712&s=612x612&w=0&h=dbyTkQ3-PJJMAlNAR2hGxPWX1ODvSJspuDsdvQmOKlI=",
    "https://thumbs.dreamstime.com/b/parking-lot-856838.jpg",
    "https://www.ledgerinsights.com/wp-content/uploads/2020/05/parking-lot-cars.jpg",
    "https://media.istockphoto.com/photos/dealer-new-cars-stock-picture-id480652712?k=20&m=480652712&s=612x612&w=0&h=dbyTkQ3-PJJMAlNAR2hGxPWX1ODvSJspuDsdvQmOKlI=",
    "https://thumbs.dreamstime.com/b/parking-lot-856838.jpg",
    "https://www.ledgerinsights.com/wp-content/uploads/2020/05/parking-lot-cars.jpg",
    "https://images.unsplash.com/photo-1589018057745-8c699b3f361c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZW1wdHklMjBwYXJraW5nJTIwbG90fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  ]);

  const toggleModal = () => setShow(!show);

  const renderInformation = (
    <Container>
      <MKTypography variant="body">Thông tin nhà xe</MKTypography>
      <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
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
        xm={12}
        sx={{ mx: 3 }}
        spacing={-1}
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
          <AddAPhoto sx={{ cursor: "pointer" }} fontSize="large" />
        </Grid>
        {images.map((image) => (
          <Grid item md={6} lg={3} xs={12} key={image.toString()}>
            <MKAvatar src={`${image}`} size="xxl" variant="square" />
          </Grid>
        ))}
      </Grid>
    </Container>
  );

  const renderPriceTable = null;

  const renderInputForm = (
    <MKBox p={2} sx={{ overflowY: "scroll" }}>
      {renderInformation}
      {renderPreviewImages}
      {renderPriceTable}
    </MKBox>
  );

  return (
    <>
      <MKButton
        variant="gradient"
        color={action.color ? action.color : "dark"}
        size="small"
        onClick={toggleModal}
      >
        {action.icon && <Icon sx={{ mr: 1 }}>{action.icon}</Icon>}
        {action.label}
      </MKButton>
      <Modal
        open={show}
        onClose={toggleModal}
        sx={{ display: "grid", placeItems: "center" }}
      >
        <Slide direction="down" in={show} timeout={500}>
          <MKBox
            position="relative"
            width="40%"
            minHeight="60vh"
            maxHeight="90vh"
            display="flex"
            flexDirection="column"
            borderRadius="xl"
            bgColor="white"
            shadow="xl"
          >
            <MKBox
              display="flex"
              alginItems="center"
              justifyContent="space-between"
              p={2}
            >
              <MKTypography variant="h5">Thêm nhà xe mới</MKTypography>
              <CloseIcon
                fontSize="medium"
                sx={{ cursor: "pointer" }}
                onClick={toggleModal}
              />
            </MKBox>

            <Divider sx={{ my: 0 }} />

            {renderInputForm}

            <Divider sx={{ my: 0 }} />
            <MKBox display="flex" justifyContent="flex-end" p={1.5} gap={1}>
              <MKButton variant="gradient" color="dark" onClick={toggleModal}>
                Đóng
              </MKButton>
              <MKButton variant="gradient" color="info">
                Tạo mới nhà xe
              </MKButton>
            </MKBox>
          </MKBox>
        </Slide>
      </Modal>
    </>
  );
}
