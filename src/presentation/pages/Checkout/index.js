// eslint-disable-next-line no-unused-vars
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import React, { useState } from "react";
import QrReader from "react-camera-qr";
import BaseLayout from "presentation/container/BaseLayout";
import { useParams } from "react-router-dom";
import MKBox from "presentation/components/MKBox";
import { useDispatch } from "react-redux";
import { preCheckOut } from "services/manage.service";

const Checkout = () => {
  const { parkId } = useParams();
  const [facingMode, setFacingMode] = useState("user");
  const [data, setData] = useState();

  const dispatch = useDispatch();

  const handleErrorCam = (error) => {
    console.log(error);
  };

  const handleScanCam = async (result) => {
    if (result && result !== data) {
      setData(result);
      preCheckOut(result, parseInt(parkId), dispatch)
    }
  };

  const handleSwitchCam = () => {
    setFacingMode(facingMode === "environment" ? "user" : "environment");
  };

  const renderScanner = (
    <MKBox
      alignContent="center"
      dixplay="flex"
      justifyContent="center"
      alignItems="center"
    >

      <div
        style={{
          backgroundColor: "white",
          height: "calc(100vh - 56px)",
        }}
      >
        <QrReader
          delay={300}
          onError={handleErrorCam}
          onScan={handleScanCam}
          style={{ width: "100%" }}
          facingMode={facingMode}
        />
        <MKBox textAlign="center" alignItems="center">
          <Button onClick={handleSwitchCam}>Switch Cam</Button>
        </MKBox>
        <div>{JSON.stringify(data)}</div>
      </div>
    </MKBox>
  );

  return (
    <BaseLayout
      title="Checkout - QR scanner"
      breadcrumb={[
        { label: "home" },
        { label: "Quản lý bãi giữ xe", route: "/manage" },
        { label: "hi", route: `/manage/${parkId}` },
        { label: "Checkout" },
      ]}
    >
      {renderScanner}
    </BaseLayout>
  );
};

export default Checkout;
