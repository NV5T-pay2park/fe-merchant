import authService from "services/auth.service";
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "shared/constants";

export const login = ({phone, username, password}) => (dispatch) => {
  // try {
  //   const data = authService.login(phone, username, password);
  //   if (data === null)
  //     throw Error("error");
  //   dispatch({
  //     type: LOGIN_SUCCESS,
  //     payload: { user: data }
  //   })
  //   return Promise.resolve();
  // } catch (error) {
  //   dispatch({
  //     type: LOGIN_FAIL
  //   })
  //   return Promise.reject();
  // }
  return authService.login(phone, username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: LOGIN_FAIL,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  authService.logout();

  dispatch({
    type: LOGOUT,
  });
};
