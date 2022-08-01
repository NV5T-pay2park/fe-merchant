import { useState } from "react";

// @mui material components
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";

// @mui icons

// Material Kit 2 React components
import MKButton from "presentation/components/MKButton";
import { Container, Icon } from "@mui/material";
import EditParkModal from "./components/EditParkModal";
import MKBox from "presentation/components/MKBox";

export default function EditParkDetail({ action, parkId }) {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);
  return (
    <>
      <MKButton
        variant="gradient"
        color={action.color ? action.color : "dark"}
        size={action.size ? action.size : "small"}
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
            width="35%"
            minHeight="60vh"
            maxHeight="90vh"
            display="flex"
            flexDirection="column"
            borderRadius="xl"
            bgColor="white"
            shadow="xl"
          >
            <EditParkModal parkId={parkId} toggleModal={toggleModal} />
          </MKBox>
        </Slide>
      </Modal>
    </>
  );
}
