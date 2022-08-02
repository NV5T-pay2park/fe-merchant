// get park index [from, from + limit) of user

import parkAPI from "data/parkAPI"
import { setAlertMessage } from "./redux/actions/alertActions";

// get `limit` park item index `from`
export const getParks = async (user, from, limit) => {
  try {
    const response = await parkAPI.getParks(user.merchantId, from, limit);
    const { data : parks} = response.data || [];
    if (user.userId !== user.merchantId) {
      return parks.filter(park => park.id === user.userId && park.status === 0);
    }
    return parks.filter(park => park.status === 0);
  } catch (error) {
    return [];
  }
}

export const getAllVehiclesType = () => {
  return parkAPI.getAllVehiclesType() || [];
}

export const deleteParkById = (id, dispatch) => {
  parkAPI.deleteParkById(id).then((result) => {
    if (result.data.data) {
      dispatch(setAlertMessage('Xóa thành công'))
    } else {
      dispatch(setAlertMessage('Xóa thất bại'))
    }
  }, error => {
    dispatch(setAlertMessage(`Lỗi ${error}`))
  });
}

export const uploadImagesByParkId = (parkId, images) => {
  parkAPI.uploadImagesByParkId(parkId, images);
}

export const uploadParkInformation = (data, dispatch) => {
  parkAPI.uploadParkInformation(data);
} 

export const createNewPark = (data, dispatch) => {
  parkAPI.createNewPark(data).then((result) => {
    if (result.data.data) {
      dispatch(setAlertMessage('Tạo mới thành công', 'success'))
    } else {
      dispatch(setAlertMessage('Tạo mới thất bại', 'error'))
    }
    return result.data.data;
  }, error => {
    dispatch(setAlertMessage(error.message, 'error'))
    return null;
  });
}