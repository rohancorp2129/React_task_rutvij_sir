const ProfileCard = ({ user }) => (
  <div>
    <h2>Welcome, {user.fullName}</h2>
    <p>Email: {user.email}</p>
  </div>
);

export default ProfileCard;
