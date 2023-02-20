import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const signupUser = async (signupDetails) => {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupDetails),
    });
    const user = response.json();
    return user;
  };

  const singinMutation = useMutation({});

  const onSubmit = (data) => {
    console.log(data);
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
    </>
  );
}

export default Signup;
