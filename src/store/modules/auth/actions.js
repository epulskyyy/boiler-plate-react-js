import { api, auth } from "../action-types";
import { encryptText } from "../../../utils/encrypt";
import { config } from "../../../utils/function";
export const loginError = () => async (dispatch) => {
  await dispatch({ type: auth.LOGIN_ERROR });
};

export const login = (post, checked) => {
  return (dispatch) => {
    dispatch({ type: auth.LOGIN });
    const dataLogin = { username: post.email, password: post.password };
    const data = { encrypt: encryptText(JSON.stringify(dataLogin)) };
    return APIGEE.post(`${api + "/login"}`, data, config())
      .then((res) => {
        dispatch({
          type: auth.LOGIN_SUCCESS,
          jwt: res.data.token,
          post: { ...post, isChecked: checked },
        });
        return true;
      })
      .catch((err) => {
        let errMsg;
        if (err.response != null) {
          if (err.response.data.Message != null) {
            errMsg = err.response.data.Message;
          } else {
            errMsg = err.response.data.desc;
          }
        } else {
          errMsg = err.message;
        }
        dispatch({ type: auth.LOGIN_FAILED, msg: errMsg });
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: auth.LOGIN });
    return APIGEE.post(`${api + "/logout"}`, config())
      .then((res) => {
        dispatch({ type: auth.LOGOUT_SUCCESS });
        return true;
      })
      .catch((err) => {
        let errMsg;
        if (err.response != null) {
          if (err.response.data.Message != null) {
            errMsg = err.response.data.Message;
          } else {
            errMsg = err.response.data.desc;
          }
        } else {
          errMsg = err.message;
        }
        dispatch({ type: auth.LOGIN_FAILED, msg: errMsg });
      });
  };
};
