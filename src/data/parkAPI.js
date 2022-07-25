// TODO: using Axios to get data from backend restful api
const parks = require('./mock/parks.json');
const vehicles = require('./mock/vehicles.json');

const getParks = async (user, from, limit) => {
  let response;
  if (!limit) {
    response = parks;
  } else {
    response = parks.slice(from, from + limit);
  }
  return response;
}

const getAllVehiclesType = () => {
  return vehicles;
}

const parkAPI = { getParks, getAllVehiclesType }

export default parkAPI;
