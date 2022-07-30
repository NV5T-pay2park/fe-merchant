import { CHECKOUT_SET_LICENCE_PLATE } from "shared/constants/constants";

const licensePlate = localStorage.getItem('licensePlate');
const initialState = licensePlate && licensePlate !== "null"
  ? {licensePlate: licensePlate}
  : {licensePlate: ''}
console.log(initialState)
export default function checkoutReducer(state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_SET_LICENCE_PLATE:
      return action.payload;
    default:
      return state;
  }
}