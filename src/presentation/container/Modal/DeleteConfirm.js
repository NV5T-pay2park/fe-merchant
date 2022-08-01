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
import ParkInformation from "./components/ParkInformation";
import { deleteParkById } from "services/park.service";
import { useDispatch } from "react-redux";

export default function DeleteConfirm({ action, title, parkId }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const toggleModal = () => setShow(!show);

  const handleDeletePark = () => {
    toggleModal();
    deleteParkById(parkId, dispatch)
    //TODO: delete query on server
  };

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
            width="20%"
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
              <MKTypography variant="h5">
                Bạn có chắc chắn muốn xóa?
              </MKTypography>
              <CloseIcon
                fontSize="medium"
                sx={{ cursor: "pointer" }}
                onClick={toggleModal}
              />
            </MKBox>

            <Divider sx={{ my: 0 }} />

            <MKBox p={3}>
              <MKTypography variant="body2" color="secondary">
                Xác nhận xóa nhà xe {title}. Nhấn Xác nhận để đồng ý xóa nhà xe
                này khỏi danh sách
              </MKTypography>
            </MKBox>

            <Divider sx={{ my: 0 }} />
            <MKBox display="flex" justifyContent="flex-end" p={1.5} gap={1}>
              <MKButton variant="gradient" color="dark" onClick={toggleModal}>
                Đóng
              </MKButton>
              <MKButton
                variant="gradient"
                color="error"
                onClick={handleDeletePark}
              >
                Xóa
              </MKButton>
            </MKBox>
          </MKBox>
        </Slide>
      </Modal>
    </>
  );
}
