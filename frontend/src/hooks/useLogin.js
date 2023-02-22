import { useMutation, useQuery } from "@tanstack/react-query";
import { useAuthContext } from "./useAuthContext";
import { loginUser as loginUserAction } from "../state/actionCreators/authActionCreators";

export const useLogin = () => {
  const { dispatch } = useAuthContext();

  //set up mutuation function
  const login = async (loginCredentials) => {
    const response = await fetch("http://localhost:4000/api/user/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginCredentials),
    });
    const user = await response.json();
    // if (response.ok) {
    //   localStorage.setItem("user", JSON.stringify(user));
    //   dispatch(loginUserAction(user));
    // }
    return user;
  };

  const {
    mutate: loginUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      // save user to local storage
      localStorage.setItem("user", JSON.stringify(data));
      // update user details in authContext
      dispatch(loginUserAction(data));
      console.log(data);
    },
    onError: (error) => console.log(error.message),
  });

  return { loginUser, isLoading, isSuccess, isError };
};
