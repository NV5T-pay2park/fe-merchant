import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// Material Kit 2 React components
import MKBox from "presentation/components/MKBox";
import MKButton from "presentation/components/MKButton";
import MKTypography from "presentation/components/MKTypography";
import { Icon } from "@mui/material";
import MKInput from "../MKInput";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

export default function MapModal() {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

  const center = {
    lat: 10.75766401459632,
    lng: 106.74603203425715,
  };

  const renderMap = (
    <LoadScript googleMapsApiKey="AIzaSyDNI_ZWPqvdS6r6gPVO50I4TlYkfkZdXh8">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "60vh" }}
        zoom={16}
        center={center}
      >
        <></>
      </GoogleMap>
    </LoadScript>
  );

  return (
    <>
      <MKButton
        variant="gradient"
        color="info"
        size="small"
        onClick={toggleModal}
        sx={{ mt: 1 }}
      >
        <Icon fontSize="large">add_location_alt</Icon>
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
              <MKTypography variant="h5">Chọn vị trí nhà xe</MKTypography>
              <CloseIcon
                fontSize="medium"
                sx={{ cursor: "pointer" }}
                onClick={toggleModal}
              />
            </MKBox>

            <Divider sx={{ my: 0 }} />

            {renderMap}

            <Divider sx={{ my: 0 }} />
            <MKBox display="flex" justifyContent="flex-end" p={1.5} gap={1}>
              <MKButton variant="gradient" color="dark" onClick={toggleModal}>
                Đóng
              </MKButton>
              <MKButton variant="gradient" color="info">
                Xác nhận
              </MKButton>
            </MKBox>
          </MKBox>
        </Slide>
      </Modal>
    </>
  );
}
