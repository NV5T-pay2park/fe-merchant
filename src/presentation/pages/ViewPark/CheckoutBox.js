import { Card } from "@mui/material";
import MKBox from "presentation/components/MKBox";
import MKButton from "presentation/components/MKButton";
import MKInput from "presentation/components/MKInput";
import MKTypography from "presentation/components/MKTypography";

export default function CheckoutBox() {
  return (
    <Card
      sx={{
        p: 2,
        mx: { xs: 2, lg: 3 },
        mt: 8,
        boxShadow: ({ boxShadows: { xxl } }) => xxl,
      }}
    >
      <MKBox textAlign="center" height="10rem" width="100%" borderRadius="lg">
        <MKTypography sx={{ pb: 2 }} variant="h4">
          Biển số xe đang checkout
        </MKTypography>
        <MKTypography variant="body" >
          121313-31331
        </MKTypography>
        <MKBox
          direction="row"
          sx={{ py: 2 }}
          display="flex"
          justifyContent="flex-end"
          gap={1}
          p={2}
          alignItems="center"
        >
          <MKButton variant="gradient" color="success">
            Xác nhận
          </MKButton>
          <MKButton variant="gradient" color="error">
            Báo lỗi
          </MKButton>
        </MKBox>
      </MKBox>
    </Card>
  );
}
