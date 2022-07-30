import Axios from "./Axios";

const sendInformationCheckIn = async (checkInData, vehicleData) => {
  const information = {
    checkInData,
    vehicleData
  };
  Axios.post(`sendInformationCheckIn`, information)
  .then(res => {
    console.log(res);
  })
}

const manageAPI = { sendInformationCheckIn };

export default manageAPI;