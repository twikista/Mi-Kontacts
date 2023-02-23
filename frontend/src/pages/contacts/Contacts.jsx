import { useGetContacts } from "../../hooks/useGetContacts";

function Contacts() {
  const { isLoading, isError, contacts, error } = useGetContacts();

  return (
    <>
      {isLoading && <p>loading...</p>}
      {isError && <p>{error.message}</p>}
      {contacts &&
        contacts.map((contacts) => (
          <p key={contacts._id}>{contacts.fullName}</p>
        ))}
    </>
  );
}

export default Contacts;
