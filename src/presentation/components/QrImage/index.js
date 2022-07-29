import React from "react";
import { QRCode } from "react-qrcode-logo";

import logoImage from "assets/images/pay2park_rmbg_yrx2am.png"

const QrImage = ({ parkingId }) => {
  return (
    <QRCode
      value={`${parkingId}`}
      eyeRadius={[
        {
          // top/left eye
          outer: [10, 10, 0, 10],
          inner: [0, 10, 10, 10],
        },
        [10, 10, 10, 0], // top/right eye
        [10, 0, 10, 10], // bottom/left
      ]}
      size="400"
      logoImage={logoImage}
      logoWidth="200"
      logoHeight="200"
      bgColor="#FFFFFF"
      logoOpacity={0.7}
    />
  );
};

export default QrImage;
