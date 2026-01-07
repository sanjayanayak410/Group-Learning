import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Hooks Example</h1>

      <h2>Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      <hr />

      <h2>Users from API</h2>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} – {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
