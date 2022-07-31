import manageAPI from "data/manageAPI";
import { setCheckoutLicencePlate } from "./redux/actions/checkoutAction";

export const getAllAvailableStatus = () => {
  return [
    { status: "0", label: "Còn chỗ" },
    { status: "1", label: "Hết chỗ" },
  ];
};

export const changeParkStatus = (newStatus) => {};

export const handleReceiveMessage = (
  messages,
  setIsEnableCheckin,
  setCurrentCheckInData
) => {
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
};

export const sendInformationCheckIn = (
  checkInData,
  vehicleTypeID,
  licensePlate
) => {
  manageAPI.sendInformationCheckIn(checkInData, {
    vehicleTypeID,
    licensePlate,
  });
};

const isValidTicketData = (ticketData) => {
  return (
    ticketData.hasOwnProperty("endUserID") &&
    ticketData.hasOwnProperty("ticketID")
  );
};

export const preCheckOut = (endUserTicketData, parkingLotID, dispatch) => {
  // validation input
  parkingLotID = parseInt(parkingLotID);
  try {
    endUserTicketData = JSON.parse(endUserTicketData);
  } catch (e) {
    return;
  }
  if (!isValidTicketData(endUserTicketData)) {
    return;
  }
  endUserTicketData = {
    endUserID: endUserTicketData.endUserID,
    ticketID: endUserTicketData.ticketID,
  };
  // call api
  manageAPI
    .preCheckOut({ ...endUserTicketData, parkingLotID })
    .then((result) => {
      // TODO: show error
      if (result.data.status === "OK") {
        dispatch(
          setCheckoutLicencePlate(
            JSON.stringify({
              ticketData: { ...endUserTicketData },
              licensePlate: result.data.data,
              parkingLotID,
            })
          )
        );
      } else {
        dispatch(
          setCheckoutLicencePlate(
            JSON.stringify({ licensePlate: result.data.message, parkingLotID })
          )
        );
      }
    });
};

export const checkOut = (ticketData) => {
  manageAPI.checkOut(ticketData).then((result) => {
    console.log(result);
    if (result.data.status === "OK") {
      // TODO: show alert successful
      localStorage.removeItem("licensePlate");
    } else {
      console.log("error");
    }
  });
};

export const getCurrentTicketsByParkingLotId = (parkId, setTickets) => {
  manageAPI.getCurrentTicketsByParkingLotId(parkId).then((result) => {
    if (result.data?.status === "OK") {
      setTickets(result.data.data.map((ticket) => ({
        id: ticket.ticketID,
        ticketID: ticket.ticketID,
        checkInTime: ticket.checkInTime,
        licensePlate: ticket.licensePlate,
        endUserName: ticket.endUserName,
      })));
    }
  });
};
