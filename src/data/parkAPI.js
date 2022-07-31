import Axios from "./Axios";

// TODO: using Axios to get data from backend restful api
const parks = require("./mock/parks.json");
const vehicles = require("./mock/vehicles.json");

const getParks = async (userId, from, limit) => {
  // TODO: security by send token
  return Axios.get(`merchant/parkingLot/${userId}/list`);
};

const getAllVehiclesType = () => {
  return vehicles;
};

const deleteParkById = (id) => {
  const index = parks.findIndex((x) => x.id === id);
  if (index > -1) {
    parks.splice(index, 1);
  }
};

const createNewPark = (data) => {
  console.log(data)
  return Axios.post(`merchant/parkingLot/create`, data);
}

const uploadParkById = (id) => {
  if (id === -1) {
    // new park
  } else {
    // edit exists park
  }
};

const uploadImagesByParkId = (parkId, images) => {
  const data = new FormData();
  data.append("parkingLotID", 1);
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

const parkAPI = {
  getParks,
  getAllVehiclesType,
  deleteParkById,
  uploadImagesByParkId,
  createNewPark
};

export default parkAPI;
