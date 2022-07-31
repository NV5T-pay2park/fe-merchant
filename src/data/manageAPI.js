import Axios from "./Axios";

const getParkDetailById = async (parkId) => {
  return Axios.get(`merchant/parkingLot/get/${parkId}`)
}

const sendInformationCheckIn = async (checkInData, vehicleData) => {
  const information = {
    checkInData,
    vehicleData
  };
  Axios.post(`sendInformationCheckIn`, information)
  .then(res => {
    console.log(res);
  })
};

const preCheckOut = (ticketData) => {
  return Axios.post(`preCheckOut`, ticketData);
}

const checkOut = (ticketData) => {
  return Axios.post(`checkOut`, ticketData);
}

const manageAPI = { sendInformationCheckIn, preCheckOut, checkOut, getParkDetailById };

export default manageAPI;