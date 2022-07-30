import { CHECKOUT_SET_LICENCE_PLATE } from "shared/constants/constants";

let licensePlate;
try {
  licensePlate = JSON.parse(localStorage.getItem('licensePlate'));
} catch (e) {
  licensePlate = {};
}

const initialState = licensePlate;

console.log(initialState)
export default function checkoutReducer(state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_SET_LICENCE_PLATE:
      return action.payload;
    default:
      return state;
  }
}