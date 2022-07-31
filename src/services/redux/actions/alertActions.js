import { ALERT_SET_MESSAGE } from "shared/constants/constants";

export const setAlertMessage = (message, type) => {
  console.log(message);
  return {
    type: ALERT_SET_MESSAGE,
    payload: { message, type },
  };
};
