import { Divider, Icon, Modal, Slide } from "@mui/material";
import MKBox from "presentation/components/MKBox";
import MKButton from "presentation/components/MKButton";
import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import MKTypography from "presentation/components/MKTypography";
import QrImage from "presentation/components/QrImage";

export default function CheckinModal({ parkId }) {
  const [show, setShow] = useState(false);

  const toggleModal = () => setShow(!show);

  return (
    <>
      <MKButton
        size="large"
        variant="gradient"
        color="dark"
        onClick={toggleModal}
      >
        <Icon sx={{ mr: 1 }}>qr_code_scanner</Icon>
        QR checkin
      </MKButton>
      <Modal
        open={show}
        onClose={toggleModal}
        sx={{ display: "grid", placeItems: "center" }}
      >
        <Slide direction="down" in={show} timeout={500}>
          <MKBox
            position="relative"
            width="500"
            height="500"
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
              <MKTypography variant="h5">QR Checkin</MKTypography>
              <CloseIcon
                fontSize="medium"
                sx={{ cursor: "pointer" }}
                onClick={toggleModal}
              />
            </MKBox>

            <Divider sx={{ my: 0 }} />
            {show && (
              <MKBox p={5}>
                <QrImage parkingId={parkId} />
              </MKBox>
            )}
          </MKBox>
        </Slide>
      </Modal>
    </>
  );
}
