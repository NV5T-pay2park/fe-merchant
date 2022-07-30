import manageAPI from "data/manageAPI";

export const getAllAvailableStatus = () => {
  return ([
    { status: "0", label: "Còn chỗ" },
    { status: "1", label: "Hết chỗ" },
  ]);
};

export const changeParkStatus = (newStatus) => {
  
}

export const handleReceiveMessage = (messages, setIsEnableCheckin, setCurrentCheckInData) => {
  switch (messages.code) {
    case -1:
      setIsEnableCheckin(true);
      setCurrentCheckInData(messages.checkInData);
      break;
    case 0:
      setIsEnableCheckin(false);
      // TODO: show message
      break;
    case 1:

      break;
    default:
      return;
  }
}

export const sendInformationCheckIn = (checkInData, vehicleTypeID, licensePlate) => {
  manageAPI.sendInformationCheckIn(checkInData, {vehicleTypeID, licensePlate});
}