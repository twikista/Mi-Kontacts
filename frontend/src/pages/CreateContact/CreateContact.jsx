import { useMutation, QueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

const CreateContact = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  const handle = () => "createuser";
  const filesize = watch("image");
  console.log(filesize);
  const valFile = (file) => {
    if (file?.length) {
      const fileLength = file?.length;
      const fileSize = file?.[0].size < 5000;
      return fileLength && !fileSize ? "Max 10MB" : null;
    }
    return null;
  };
  // console.log(filesize?.[0].size < 5000);
  // const
  const onSubmit = (data) => {
    const { firstName, lastName, phone, email, city, category } = data;
    // const file = data.image[0];
    // console.log(file.size);
    // if (!filesize) {
    //   setError("image", { type: "size", message: "small file size" });
    //   return;
    // }
    const contact = {
      firstName,
      lastName,
      contactInfo: { phone, email, city },
      category,
    };
    console.log(data);
    reset();
  };
  const { mutate: createContact } = useMutation({ mutationFn: handle });

  return (
    <>
      <h1>new contact</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register("firstName")}
            type="text"
            placeholder="First name"
          />
        </div>
        <div>
          <input
            {...register("lastName")}
            type="text"
            placeholder="Last name"
          />
        </div>
        <div>
          <input {...register("phone")} type="tel" placeholder="Phone number" />
        </div>
        <div>
          <input {...register("email")} type="email" placeholder="Email" />
        </div>
        <div>
          <input {...register("city")} type="text" placeholder="City" />
        </div>
        <div>
          <input {...register("categoty")} type="text" placeholder="Category" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            {...register("image", {
              validate: {
                lessThan10MB: (files) => files?.[0].size < 5000 || "max 10MB",
              },
            })}
            type="file"
            accept="image/png, image/jpg,image/jpeg"
            placeholder="Category"
          />
          {<span>{valFile(filesize)}</span>}
          {/* {!filesize && <span>Max 10MB</span>} */}
        </div>

        <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default CreateContact;

/*
, {
              validate: {
                lessThan10MB: (files) => files?.[0].size < 2000 || "max 10MB",
              },
            }
 */
