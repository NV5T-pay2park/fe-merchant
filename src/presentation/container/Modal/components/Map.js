// https://github.com/trulymittal/google-maps-directions-tutorial/blob/master/src/App.js

import { useState } from "react";

// @mui material components
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

import {
  Autocomplete,
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import MKInput from "presentation/components/MKInput";

const libraries = ["places"];

export default function MapModal({ location, confirmPosition }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY_2,
    libraries,
  });

  const [show, setShow] = useState(false);
  const center = {
    // default center at VNG
    lat: 10.75766401459632,
    lng: 106.74603203425715,
  };

  const toggleModal = () => setShow(!show);

  const [position, setPosition] = useState(center);
  const request = {
    query: location ? location.toString() : '',
    fields: ["geometry"],
  };

  const handleChangePosition = (e) => {
    setPosition(e.latLng);
  };

  const handleConfirm = () => {
    confirmPosition({ lat: position.lat(), lng: position.lng() });
    toggleModal();
  };

  const renderSearchBox = (
    <MKBox px={4} py={1} borderRadius="lg" bgColor="white" zIndex={1}>
      <Autocomplete>
        <MKInput placeholder="Địa chỉ tìm kiếm" fullWidth />
      </Autocomplete>
    </MKBox>
  );

  const renderMap = (
    <>
      {renderSearchBox}
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "60vh" }}
        zoom={16}
        center={center}
        onClick={handleChangePosition}
        onLoad={(map) => {
          const service = new window.google.maps.places.PlacesService(map);
          service.findPlaceFromQuery(
            request, (results, status) => {
              console.log(status)
              if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
                map.setCenter(results[0].geometry.location);
              }
            }
          )
        }}
      >
        <Marker position={position} />
      </GoogleMap>
    </>
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
        <Icon fontSize="large" sx={{mx:1}}>add_location_alt</Icon>
        Bản đồ
      </MKButton>
      {show && (
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

              {isLoaded && renderMap}

              <Divider sx={{ my: 0 }} />
              <MKBox display="flex" justifyContent="flex-end" p={1.5} gap={1}>
                <MKButton variant="gradient" color="dark" onClick={toggleModal}>
                  Đóng
                </MKButton>
                <MKButton
                  variant="gradient"
                  color="info"
                  onClick={handleConfirm}
                >
                  Xác nhận
                </MKButton>
              </MKBox>
            </MKBox>
          </Slide>
        </Modal>
      )}
    </>
  );
}
