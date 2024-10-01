import React, { useState, useEffect } from "react";
import md5 from "md5";
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://boolean-uk-api-server.fly.dev/ConnorJS21/contact");
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <section>
    <h2>Users Section</h2>
    <div className="scroll-container">
      <ul className="users-list">
        {users.map((user) => (
          <li key={user.id} style={{ background: user.favouriteColour }}>
            <img
              src={`https://www.gravatar.com/avatar/${md5(user.email.trim().toLowerCase())}?s=120&d=identicon`}
              alt={`${user.firstName} ${user.lastName}`}
            />
            <h3>{user.firstName} {user.lastName}</h3>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
  );
};

export default Users;
