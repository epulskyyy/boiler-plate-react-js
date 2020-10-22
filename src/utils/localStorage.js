import jwt from "jwt-simple";
import { decryptText, encryptText } from "./encrypt";

export const loadState = () => {
  const state = localStorage.getItem("state");
  try {
    var userState;
    const now = new Date();
    const expirationDuration = 1000 * 60 * 60 * 24; // 24 hours
    if (state != null) {
      const data = decryptText(state);
      userState = JSON.parse(data);
    }
    if (now.getTime() - userState.auth.expired > expirationDuration) {
      const newState = {
        auth: {
          isLoggedIn: false,
          token: null,
          post: { ...userState.auth.post },
          msg: "expired",
          expired: 0,
        },
      };
      localStorage.setItem(
        "state",
        encryptText(JSON.stringify({ state: { ...newState } }))
      );
      return newState;
    }
    if (
      userState.auth.isLoggedIn === false &&
      userState.auth.isLoading === true
    ) {
      localStorage.removeItem("state");
    }
    return userState;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  const { isLoggedIn, token, post, msg } = state.auth;
  const now = new Date();
  const newState = {
    auth: {
      isLoggedIn,
      token,
      post,
      msg,
      expired: state.auth.expired || now.getTime(),
    },
  };
  try {
    localStorage.setItem(
      "state",
      encryptText(JSON.stringify({ state: { ...newState } }))
    );
  } catch (err) {}
};
