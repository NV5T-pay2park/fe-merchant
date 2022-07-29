import { CHECKOUT_SET_LICENCE_PLATE } from "shared/constants/constants";

const licencePlate = localStorage.getItem('licencePlate');
const initialState = licencePlate && licencePlate !== "null"
  ? {licencePlate: licencePlate}
  : {licencePlate: ''}
console.log(initialState)
export default function checkoutReducer(state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_SET_LICENCE_PLATE:
      return action.payload;
    default:
      return state;
  }
}