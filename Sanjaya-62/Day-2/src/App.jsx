  import React, { useState, useEffect } from "react";

function App() {

  const [count, setCount] = useState(0);


  const [users, setUsers] = useState([]);

  
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);  
  return (
    <div style={{ padding: "20px" }}>
      
      
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      <hr />

      
      <h2>User List</h2>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))
      )}
    </div>
  );
}

export default App;
