/* eslint-disable no-unused-vars */
import { Card } from "@mui/material";
import MKBox from "presentation/components/MKBox";
import MKButton from "presentation/components/MKButton";
import MKTypography from "presentation/components/MKTypography";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import store from "services/redux/store";

export default function CheckoutBox() {
  const {licensePlate: currentLicencePlate} = useSelector((state) => state.checkout);
  
  const handleConfirmCheckout = () => {
    //TODO: call checkout API
  }

  const handleErrorCheckout = () => {
    // TODO: handle error
  }

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
        <MKTypography variant="body">{currentLicencePlate}</MKTypography>
        <MKBox
          direction="row"
          sx={{ py: 2 }}
          display="flex"
          justifyContent="flex-end"
          gap={1}
          p={2}
          alignItems="center"
        >
          <MKButton variant="gradient" color="success" onClick={handleConfirmCheckout}>
            Xác nhận
          </MKButton>
          <MKButton variant="gradient" color="error" onClick={handleErrorCheckout}>
            Báo lỗi
          </MKButton>
        </MKBox>
      </MKBox>
    </Card>
  );
}
