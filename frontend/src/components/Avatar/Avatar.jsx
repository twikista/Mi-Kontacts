import "./avatar.scss";

function Avatar({ url, variant, user }) {
  console.log(user);
  const setInitials = (currentUser) => {
    const fullName = currentUser?.name.split(" ");
    const firstName = fullName[0];
    const lastName = fullName[1];
    return `${firstName[0]}${lastName[0]}`;
  };
  return (
    <div className="avatar">
      {url ? (
        <img src={url} alt="jjjjj" className="avatar__image" />
      ) : (
        <div className="avatar__initials">{setInitials(user)}</div>
      )}
    </div>
  );
}

export default Avatar;
