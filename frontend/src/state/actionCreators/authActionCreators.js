import { LOGIN_USER, LOGOUT_USER } from "../../constants/authActions";

//login action creator
export const loginUser = (payload) => {
  return { type: LOGIN_USER, payload: payload };
};

export const logoutUser = () => {
  return { type: LOGOUT_USER };
};
