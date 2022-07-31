// get park index [from, from + limit) of user

import parkAPI from "data/parkAPI"

// get `limit` park item index `from`
export const getParks = (user, from, limit) => {
  return parkAPI.getParks(user, from, limit) || []
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