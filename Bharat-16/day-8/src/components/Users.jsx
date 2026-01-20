import useFetch from "../hooks/useFetch";

function Users() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
  );

  return (
    <div className="card">
      <h2>👥 Users</h2>

      {loading && <p>Loading users...</p>}
      {error && <p className="error">{error}</p>}

      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>
            <br />
            <small>{user.email}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
