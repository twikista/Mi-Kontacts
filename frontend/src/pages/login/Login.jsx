import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
function Login() {
  const [user, setUser] = useState("");
  const [contacts, setContacts] = useState("");
  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm();

  const getContacts = async () => {
    const response = await fetch("http://localhost:4000/api/contacts/", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const contacts = await response.json();
    return contacts;
  };

  const login = async (loginCredentials) => {
    const response = await fetch("http://localhost:4000/api/user/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginCredentials),
    });
    const user = await response.json();
    return user;
  };

  const { mutate: loginUser } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data);
      console.log(data);
      console.log(user);
    },
    onError: (error) => console.log(error),
  });

  const { refetch: getAllContacts } = useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
    enabled: false,
    onSuccess: (data) => {
      setContacts(data);
      console.log(contacts);
    },
  });

  const onSubmit = (data) => {
    const user = { ...data };
    loginUser(user);
    // console.log(user);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("email")} type="text" placeholder="email" />
        </div>
        <div>
          <input
            {...register("password")}
            type="password"
            placeholder="password"
          />
        </div>
        <button type="submit">login</button>
      </form>
      <button onClick={() => getAllContacts()} style={{ display: "block" }}>
        Get Contacts
      </button>
    </>
  );
}

export default Login;
