import Axios from "./Axios";

const getParkDetailById = async (parkId) => {
  return Axios.get(`merchant/parkingLot/get/${parkId}`);
};

const sendInformationCheckIn = async (checkInData, vehicleData) => {
  const information = {
    checkInData,
    vehicleData,
  };
  return Axios.post(`sendInformationCheckIn`, information);
};

const preCheckOut = (ticketData) => {
  return Axios.post(`preCheckOut`, ticketData);
};

const checkOut = (ticketData) => {
  return Axios.post(`checkOut`, ticketData);
};

const getCurrentTicketsByParkingLotId = (parkId) => {
  return Axios.get(`getTicketByParkingLotId`, {
    params: {
      parkingLotId: parkId,
    },
  });
};

const manageAPI = {
  sendInformationCheckIn,
  preCheckOut,
  checkOut,
  getParkDetailById,
  getCurrentTicketsByParkingLotId,
};

export default manageAPI;
