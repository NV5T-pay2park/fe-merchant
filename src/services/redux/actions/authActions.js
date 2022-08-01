import authService from "services/auth.service";
import { ALERT_SET_MESSAGE } from "shared/constants/constants";
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "shared/constants/constants";

export const login =
  ({ phone, username, password }) =>
  (dispatch) => {
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
        console.log(data);
        dispatch({
          type: ALERT_SET_MESSAGE,
          payload: { message: "Đăng nhập thanh công", type: "success" },
        });
        return Promise.resolve();
      },
      (error) => {
        console.log(error);
        if (error.response && error.response.data) {
          dispatch({
            type: ALERT_SET_MESSAGE,
            payload: { message: error.response.data.message, type: "warning" },
          });
        } else {
          dispatch({
            type: ALERT_SET_MESSAGE,
            payload: { message: error.message, type: "error" },
          });
        }
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
