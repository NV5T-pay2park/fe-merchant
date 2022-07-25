import MKBox from "../MKBox";

import { Card, Stack, Icon } from "@mui/material";
import MKTypography from "../MKTypography";
import MKButton from "../MKButton";
import { Link } from "react-router-dom";
import EditParkDetail from "../Modal/EditParkDetail";
import { ACTION_BUTTON_STYLE } from "shared/constants/styles";

export default function ParkCard({
  image,
  title,
  address,
  actions,
  information,
  time,
}) {
  const renderActions = () => {
    if (!actions || actions.length === 0) return null;

    return (
      <Stack direction="row" spacing={1}>
        {actions.map((action) => (
          <EditParkDetail
            key={action}
            action={ACTION_BUTTON_STYLE[action]}
          />
        ))}
      </Stack>
    );
  };

  const renderInformation = (
    <MKTypography
      p={-1}
      variant="button"
      color={information.color ? information.color : "success"}
      fontWeight="medium"
    >
      {information.label}
    </MKTypography>
  );

  return (
    <Card>
      <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
        {/* image */}
        <MKBox
          component="img"
          src={image}
          alt={title}
          borderRadius="lg"
          width="100%"
          position="relative"
          zIndex={1}
          minHeight="20vh"
          maxHeight="25vh"
        />
        {/* just for decorator */}
        <MKBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top={0}
          sx={{
            backgroundImage: `url(${image})`,
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </MKBox>

      <MKBox p={3} mt={-1}>
        <MKTypography variant="h5">{title}</MKTypography>

        {renderInformation}

        <MKBox mt={1} mb={3}>
          <MKTypography variant="body2" component="p" color="text">
            {address}
          </MKTypography>
          <MKTypography
            variant="body2"
            component="p"
            color="text"
            fontWeight="medium"
          >
            Giờ mở cửa: {time}
          </MKTypography>
        </MKBox>
        {renderActions()}
      </MKBox>
    </Card>
  );
}
