import { Card } from "@mui/material";
import MKBox from "presentation/components/MKBox";
import MKButton from "presentation/components/MKButton";
import MKInput from "presentation/components/MKInput";
import MKTypography from "presentation/components/MKTypography";

export default function CheckinBox() {
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
        <MKTypography sx={{ pb: 2 }} variant="h4">
          Nhập biển số xe
        </MKTypography>
        <MKInput disabled={false} variant="outlined" label="Biển số" sx={{ width: "60%" }} />
        <MKBox
          direction="row"
          sx={{ py: 2 }}
          display="flex"
          justifyContent="flex-end"
          gap={1}
          p={2}
          alignItems="center"
          
        >
          <MKButton variant="gradient" color="info">
            Xác nhận
          </MKButton>
          <MKButton variant="gradient" color="error">
            Xóa
          </MKButton>
        </MKBox>
      </MKBox>
    </Card>
  );
}
