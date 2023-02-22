import { LOGIN_USER, LOGOUT_USER } from "../../constants/authActions";

function authReducer(state, action) {
  //handle user login
  if (action.type === LOGIN_USER) {
    return { user: action.payload };
  }

  //hnadle user logout
  if (action.type === LOGOUT_USER) {
    return { user: null };
  }

  return state;
}

export default authReducer;
