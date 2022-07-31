// get park index [from, from + limit) of user

import parkAPI from "data/parkAPI"

// get `limit` park item index `from`
export const getParks = async (user, from, limit) => {
  console.log(user);
  const response = await parkAPI.getParks(user.userId, from, limit);
  const { data : parks} = response.data || [];
  return parks;
}

export const getAllVehiclesType = () => {
  return parkAPI.getAllVehiclesType() || [];
}

export const deleteParkById = (id) => {
  parkAPI.deleteParkById(id);
}

export const uploadImagesByParkId = (parkId, images) => {
  parkAPI.uploadImagesByParkId(parkId, images);
} 

export const uploadParkInformation = (parkId, data) => {
  
} 

export const createNewPark = (data) => {
  parkAPI.createNewPark(data).then((result) => {
    console.log(result);
  });
}