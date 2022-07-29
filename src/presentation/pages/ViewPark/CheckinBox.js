import { Card } from "@mui/material";
import MKBox from "presentation/components/MKBox";
import MKButton from "presentation/components/MKButton";
import MKInput from "presentation/components/MKInput";
import MKTypography from "presentation/components/MKTypography";
import { useState } from "react";

export default function CheckinBox() {
  const [licencePlate, setLicencePlate] = useState("");
  const handleConfirm = () => {
    // TODO: call API checkin
  };

  const handleClear = () => {
    setLicencePlate("");
  };

  return (
    <Card
      sx={{
        p: 2,
        mx: { xs: 2, lg: 3 },
        mb: 4,
        boxShadow: ({ boxShadows: { xxl } }) => xxl,
      }}
    >
      <MKBox textAlign="center" height="10rem" width="100%" borderRadius="lg">
        <MKTypography sx={{ pb: 2 }} variant="h4" >
          Nhập biển số xe
        </MKTypography>
        <MKInput
          disabled={false}
          variant="outlined"
          label="Biển số"
          sx={{ width: "60%",  }}
          value={licencePlate}
          textTransform="uppercase"
          onChange={(e) => setLicencePlate(e.target.value.toString().toUpperCase())}
        />
        <MKBox
          direction="row"
          sx={{ py: 2 }}
          display="flex"
          justifyContent="flex-end"
          gap={1}
          p={2}
          alignItems="center"
        >
          <MKButton variant="gradient" color="info" onClick={handleConfirm}>
            Xác nhận
          </MKButton>
          <MKButton variant="gradient" color="error" onClick={handleClear}>
            Xóa
          </MKButton>
        </MKBox>
      </MKBox>
    </Card>
  );
}
