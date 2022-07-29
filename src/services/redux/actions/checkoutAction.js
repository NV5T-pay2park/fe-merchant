import { CHECKOUT_SET_LICENCE_PLATE } from "shared/constants/constants";

export const setCheckoutLicencePlate = (licencePlate) => {
  localStorage.setItem('licencePlate', licencePlate);
  return {
    type: CHECKOUT_SET_LICENCE_PLATE,
    payload: { licencePlate },
  };
};
