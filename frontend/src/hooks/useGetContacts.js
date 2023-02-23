import { useQuery } from "@tanstack/react-query";
import { useContactsContext } from "./useContactsContext";
import { useAuthContext } from "./useAuthContext";

export const useGetContacts = () => {
  const { dispatch } = useContactsContext();
  const { user } = useAuthContext();

  const getContacts = async () => {
    const response = await fetch("http://localhost:4000/api/contacts/", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const contacts = await response.json();
    return contacts;
  };

  const {
    isLoading,
    isError,
    data: contacts,
    error,
  } = useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
    onSuccess: (contacts) => {
      dispatch({ type: "SET_CONTACTS", payload: contacts });
    },
  });
  return { isLoading, isError, contacts, error };
};
