import { Card, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import MKBox from "presentation/components/MKBox";
import MKButton from "presentation/components/MKButton";
import MKInput from "presentation/components/MKInput";
import MKTypography from "presentation/components/MKTypography";
import { useState } from "react";
import { sendInformationCheckIn } from "services/manage.service";
import { getAllVehiclesType } from "services/park.service";

export default function CheckinBox({ checkInData, setTickets }) {
  const [licensePlate, setLicencePlate] = useState("");
  const [vehicleTypeID, setVehicleType] = useState(1);

  const handleConfirm = () => {
    sendInformationCheckIn(checkInData, vehicleTypeID, licensePlate, setTickets);
  };

  const handleClear = () => {
    setLicencePlate("");
  };

  const handleChangeSelectedVehicle = (e) => {
    setVehicleType(e.target.value);
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
      <MKBox textAlign="center" height="14rem" width="100%" borderRadius="lg">
        <MKTypography sx={{ pb: 2 }} variant="h4">
          Nhập biển số xe
        </MKTypography>
        <FormControl
          sx={{ m: 1, p: 1, width: "60%", height: "5vh" }}
          size="large"
        >
          <InputLabel>Loại xe</InputLabel>
          <Select
            value={vehicleTypeID}
            onChange={handleChangeSelectedVehicle}
            label="Loại xe"
            sx={{ height: "100%" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {getAllVehiclesType().map((vehicle) => (
              <MenuItem
                key={vehicle.id.toString()}
                value={vehicle.id}
              >
                {vehicle.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <MKInput
          disabled={false}
          variant="outlined"
          label="Biển số"
          sx={{ width: "60%" }}
          value={licensePlate}
          onChange={(e) =>
            setLicencePlate(e.target.value.toString().toUpperCase())
          }
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
