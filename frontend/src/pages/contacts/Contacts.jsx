import { useAuthContext } from "../../hooks/useAuthContext";
import { useContacts } from "../../hooks/useContacts";
import { useTheme } from "../../hooks/useTheme";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import "./contacts.scss";

function Contacts() {
  const { user } = useAuthContext();
  const { toggleTheme } = useTheme();
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
    <div className="contacts">
      <ThemeToggle />
      <h1>contacts</h1>
      {/* {isLoading && <p>loading...</p>} */}
      {/* {isError && <p>{error.message}</p>} */}
      {contacts &&
        contacts.map((contact) => (
          <p key={contact._id}>
            {userInitials(contact.firstName, contact.lastName)}
          </p>
        ))}
    </div>
  );
}

export default Contacts;
