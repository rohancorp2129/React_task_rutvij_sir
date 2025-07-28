import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/users.json")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loader">Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <div className="user-grid">
      {users.map(user => (
        <div className="user-card" key={user.id}>
          <img src={user.avatar} alt={user.name} className="user-avatar" />
          <h3>{user.name}</h3>
          <p>@{user.username}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
