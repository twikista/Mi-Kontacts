// import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSignup } from "../../hooks/useSignup";
// import { useMutation } from "@tanstack/react-query";
function Signup() {
  const { createUser } = useSignup();
  // const [user, setUser] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const [password, password2] = watch(["password", "password2"]);

  // const signupUser = async (signupDetails) => {
  //   const response = await fetch("/api/user/signup", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(signupDetails),
  //   });
  //   const user = response.json();
  //   return user;
  // };

  // const { mutate: createUser } = useMutation({
  //   mutationFn: signupUser,
  //   onSuccess: (data) => {
  //     setUser(data);
  //     console.log(user);
  //   },
  // });

  const onSubmit = (data) => {
    const signupDetails = { ...data };
    createUser(signupDetails);
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register("firstName")}
            type="text"
            placeholder="first name"
          />
        </div>
        <div>
          <input
            {...register("lastName")}
            type="text"
            placeholder="last name"
          />
        </div>
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
        <div>
          <input
            {...register("password2")}
            type="password"
            placeholder="confirm password"
          />
          {password2 !== "" && password !== password2 && (
            <p>password do no match</p>
          )}
        </div>
        <button type="submit">login</button>
      </form>
    </>
  );
}

export default Signup;
