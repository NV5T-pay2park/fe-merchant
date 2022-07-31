import Axios from "./Axios";

// TODO: using Axios to get data from backend restful api
const parks = require("./mock/parks.json");
const vehicles = require("./mock/vehicles.json");

const getParks = async (user, from, limit) => {
  let response;
  if (!limit) {
    response = parks;
  } else {
    response = parks.slice(from, from + limit);
  }
  return response;
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
    data.append("multipartFile", element);
  });
  console.log(data.getAll("multipartFile"));
  console.log(data.get('parkingLotID'))
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
};

export default parkAPI;
