import Axios from "./Axios";

const vehicles = require("./mock/vehicles.json");

const getParks = async (userId, from, limit) => {
  // TODO: security by send token
  return Axios.get(`merchant/parkingLot/${userId}/list`);
};

const getParkByEmployeeId = (userId) => {
  return Axios.get(`merchant/merchant/getByEmployeeId/${userId}`);
}

const getAllVehiclesType = () => {
  return vehicles;
};

const deleteParkById = (id) => {
  return Axios.get(`merchant/parkingLot/delete/${id}`);
};

const createNewPark = (data) => {
  return Axios.post(`merchant/parkingLot/create`, data);
}

const uploadParkInformation = (data) => {
  return Axios.post(`merchant/parkingLot/update`, data);
}

const uploadImagesByParkId = async (parkId, images) => {
  const data = new FormData();
  data.append("parkingLotID", parkId);
  images.forEach((element) => {
    data.append("multipartFiles", element);
  });
  Axios.post(`uploadImage`, data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  }).then(
    (res) => {
      console.log(res);
    },
    (error) => {
      console.log(error);
    }
  );
};

const getAllImagesByParkId = async (parkId) => {
  return Axios.get(`getAllImageByParkingLot`, {
    params: {
      parkingLotID: parkId
    }
  });
}


const parkAPI = {
  getParks,
  getAllVehiclesType,
  deleteParkById,
  uploadImagesByParkId,
  createNewPark,
  getAllImagesByParkId,
  getParkByEmployeeId,
  uploadParkInformation
};

export default parkAPI;
