import { useAuthContext } from "./useAuthContext";
import { logoutUser as logout } from "../state/actionCreators/authActionCreators";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logoutUser = () => {
    //clear user from localStorage
    localStorage.removeItem("user");

    //dispatch user logout action
    dispatch(logout());
  };

  return logoutUser;
};
