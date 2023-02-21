import { LOGIN_USER, LOGOUT_USER } from "../../constants/authActions";

export default function authReducer(state, action) {
  //handle user login
  if (action.type === LOGIN_USER) {
    return { user: action.payload };
  }

  //hnadle user logout
  if (action.type === LOGIN_USER) {
    return { user: null };
  }

  return state;
}
