import { ALERT_SET_MESSAGE } from "shared/constants/constants";

const initialState = {messages: '', open: false}

export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    case ALERT_SET_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}