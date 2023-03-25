import { useAuthContext } from "../../hooks/useAuthContext";
import { useContacts } from "../../hooks/useContacts";

function Contacts() {
  const { user } = useAuthContext();
  // let we;
  // if (user) {
  console.log(user);
  const { data: contacts, error } = useContacts();
  console.log(contacts);
  // we = contacts;

  const userInitials = (firstName, lastName) => {
    return `${firstName[0]}${lastName[0]}`;
  };

  return (
    <>
      {/* {isLoading && <p>loading...</p>} */}
      {/* {isError && <p>{error.message}</p>} */}
      {contacts &&
        contacts.map((contact) => (
          <p key={contact._id}>
            {userInitials(contact.firstName, contact.lastName)}
          </p>
        ))}
    </>
  );
}

export default Contacts;
