import { createContext, useReducer } from "react";
import contactsReducer from "../reducers/contactsReducer";

//initialize contacts context
export const ContactsContext = createContext();

//initial state
const initialState = [];

const ContactsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactsReducer, initialState);
  return (
    <ContactsContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsContextProvider;
