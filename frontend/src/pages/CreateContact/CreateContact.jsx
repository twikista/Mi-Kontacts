import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../../hooks/useAuthContext";

const CreateContact = () => {
  const queryClient = useQueryClient();
  const [contactAvatar, setContactAvatar] = useState("");
  const { user } = useAuthContext();
  // console.log(user);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  const onChangehandler = (e) => {
    const file = e.target.files[0];
    if (!["image/jpg", "image/jpeg", "image/png"].includes(file?.type)) {
      setError("image", { type: "type", message: "Only PNG, JPEG,  GIF" });
      return;
    }
    if (file?.size < 50000) {
      setError("image", { type: "size", message: null });
      imageToBase64(file);
      return;
    }
    setError("image", { type: "size", message: "Max 10MB" });
    setContactAvatar("");
  };

  const imageToBase64 = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setContactAvatar(reader.result);
      };
    } else {
      setContactAvatar("");
    }
  };

  const onSubmit = (data) => {
    const contact = { ...data, image: contactAvatar };
    createContact(contact);
    console.log(contact);
    reset();
  };

  const setContact = async (contactDetails) => {
    const response = await fetch("http://localhost:4000/api/contacts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(contactDetails),
    });
    const contact = await response.json();
    return contact;
  };

  const { mutate: createContact } = useMutation({
    mutationFn: setContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });

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
          <input
            {...register("contactInfo.phone")}
            type="tel"
            placeholder="Phone number"
          />
        </div>
        <div>
          <input
            {...register("contactInfo.email")}
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            {...register("contactInfo.city")}
            type="text"
            placeholder="City"
          />
        </div>
        <div>
          <input {...register("categoty")} type="text" placeholder="Category" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            {...register("image", {
              validate: {
                lessThan10MB: (files) => files[0]?.size < 5000 || "max 10MB",
                acceptedFormats: (files) =>
                  ["image/jpeg", "image/png", "image/gif"].includes(
                    files[0]?.type
                  ) || "accpeted image formats: png, jpg/jpeg, gif",
              },
            })}
            type="file"
            onChange={onChangehandler}
            // accept="image/png, image/jpg,image/jpeg, image/gif"
          />
          {/* {errors?.image ? (
            <span>{errors.image.message}</span>
          ) : (
            <span>{valFile(filesize)}</span>
          )} */}
          {errors?.image && <span>{errors.image.message}</span>}
          {errors?.image?.type === "type" && (
            <span>{errors.image.type.message}</span>
          )}
        </div>

        <button type="submit">Add User</button>
      </form>
      <img src={contactAvatar} />
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
