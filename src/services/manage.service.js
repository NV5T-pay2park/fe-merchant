import manageAPI from "data/manageAPI";
import { setAlertMessage } from "./redux/actions/alertActions";
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
  licensePlate,
  setTickets,
  dispatch
) => {
  manageAPI.sendInformationCheckIn(checkInData, {
    vehicleTypeID,
    licensePlate,
  }).then((result) => {
    if (result.data.status === "OK") {
      getCurrentTicketsByParkingLotId(checkInData.parkingLotID, setTickets)
      dispatch(setAlertMessage('Gửi thông tin thành công', 'success'))
    } else {
      dispatch(setAlertMessage(`Lỗi ${result.data.message}`))
    }
  },
  error => {
    dispatch(setAlertMessage(`Lỗi`))

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

export const checkOut = (ticketData, setTickets, dispatch) => {
  console.log(`?> ${ticketData}`);
  manageAPI.checkOut(ticketData).then((result) => {
    if (result.data.status === "OK") {
      // TODO: show alert successful
      localStorage.removeItem("licensePlate");
      getCurrentTicketsByParkingLotId(ticketData.getParkingLotID, setTickets)
      dispatch(setAlertMessage('Checkout thành công', 'success'))
    } else {
      console.log("error");
      dispatch(setAlertMessage('Checkout thất bại', 'error'))

    }
  }, (error) => {
    console.log('error')
    dispatch(setAlertMessage('Checkout thất bại', 'error'))

  });
};

export const getCurrentTicketsByParkingLotId = (parkId, setTickets) => {
  manageAPI.getCurrentTicketsByParkingLotId(parkId).then((result) => {
    if (result.data?.status === "OK") {
      console.warn(result.data.data);
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
