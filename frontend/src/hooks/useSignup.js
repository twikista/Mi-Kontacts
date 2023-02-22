import { useMutation } from "@tanstack/react-query";
import { useAuthContext } from "./useAuthContext";
import { loginUser } from "../state/actionCreators/authActionCreators";

export const useSignup = () => {
  const { dispatch } = useAuthContext();
  const signupUser = async (signupDetails) => {
    const response = await fetch("http://localhost:4000/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupDetails),
    });
    const user = await response.json();
    return user;
  };

  const {
    mutate: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      //save user to local storage
      localStorage.setItem("user", JSON.stringify(data));
      console.log(data);
      //update user details in authContext
      dispatch(loginUser(data));
    },
  });

  return { createUser };
};
