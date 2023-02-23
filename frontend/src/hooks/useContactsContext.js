import { useContext } from "react";
import { ContactsContext } from "../state/context/ContactsConext";

export const useContactsContext = () => {
  const context = useContext(ContactsContext);
  if (!context) {
    throw Error("context can't be use outside AuthContxtprovider");
  }
  return context;
};
