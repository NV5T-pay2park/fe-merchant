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

const deleteParkById = (id) => {
  const index = parks.findIndex(x => x.id === id);
  if (index > -1) {
    parks.splice(index, 1);
  }
}


const parkAPI = { getParks, getAllVehiclesType, deleteParkById }

export default parkAPI;
