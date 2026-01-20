import React from "react";
import { useUsers } from "../hooks/useUsers";

const Users = () => {
  const { data: users, isLoading, isError, error, isFetching } = useUsers();

  if (isLoading) return <h3>Loading users...</h3>;
  if (isError) return <h3>Error: {error.message}</h3>;

  return (
    <div>
      <h2>User List</h2>

      {isFetching && <p>Refreshing data...</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
