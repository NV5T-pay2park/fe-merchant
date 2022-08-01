import { CHECKOUT_SET_LICENCE_PLATE } from "shared/constants/constants";

export const setCheckoutLicencePlate = (licensePlate) => {
  // localStorage.setItem('licensePlate', licensePlate);
  return {
    type: CHECKOUT_SET_LICENCE_PLATE,
    payload: JSON.parse(licensePlate) || {},
  };
};
