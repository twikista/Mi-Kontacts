import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useLogin = () => {
  const login = async (loginCredentials) => {
    const response = await fetch("http://localhost:4000/api/user/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginCredentials),
    });
    const user = await response.json();
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
      //save user to local storage
      localStorage.setItem("user", JSON.stringify(user));
      setUser(data);
      console.log(data);
      console.log(user);
    },
    onError: (error) => console.log(error.message),
  });

  return { loginUser, isLoading, isSuccess, isError };
};
