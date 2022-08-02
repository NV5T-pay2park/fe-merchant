import MKBox from "presentation/components/MKBox";
import Divider from "@mui/material/Divider";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// Material Kit 2 React components
import MKButton from "presentation/components/MKButton";
import MKTypography from "presentation/components/MKTypography";
import useParkDetail from "services/hooks/useParkDetail";
import ParkInformation from "./ParkInformation";

export default function EditParkModal({ parkId, toggleModal }) {
  const { submitForm, ...details } = useParkDetail(parkId);
  const onCreateNewPark = () => {
    submitForm();
  };

  return (
    <>
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
      <ParkInformation useParkDetail={details} />

      <Divider sx={{ my: 0 }} />
      <MKBox display="flex" justifyContent="flex-end" p={1.5} gap={1}>
        <MKButton variant="gradient" color="dark" onClick={toggleModal}>
          Đóng
        </MKButton>
        <MKButton variant="gradient" color="info" onClick={onCreateNewPark}>
          Xác nhận
        </MKButton>
      </MKBox>
    </>
  );
}
