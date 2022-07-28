import MKBox from "../MKBox";

import { Card, Stack } from "@mui/material";
import MKTypography from "../MKTypography";
import EditParkDetail from "../Modal/EditParkDetail";
import { ACTION_BUTTON_STYLE } from "shared/constants/styles";
import DeleteConfirm from "../Modal/DeleteConfirm";

import noImage from "assets/images/no-image-park.png";
import { Link } from "react-router-dom";

export default function ParkCard({
  image,
  id,
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
        {actions.map((action) =>
          action === "edit" ? (
            <EditParkDetail
              key={action}
              parkID={id}
              action={ACTION_BUTTON_STYLE[action]}
            />
          ) : action === "delete" ? (
            <DeleteConfirm
              key={action}
              parkId={id}
              title={title}
              action={ACTION_BUTTON_STYLE[action]}
            />
          ) : null
        )}
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
      <MKBox 
        position="relative" 
        borderRadius="lg" 
        mx={2} 
        mt={-3}
        component={Link}
        to={`/manage/${id}`}
      >
        {/* image */}
        <MKBox
          component="img"
          src={image ? image : noImage}
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
